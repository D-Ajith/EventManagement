import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { db } from '../Firebase/Fbconfig';
import { set, ref, push } from "firebase/database";
import { useNavigate, useLocation } from 'react-router-dom';
import "./Form.css"

const Form1 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [availableHalls, setAvailableHalls] = useState([]);
    const [availableLocations, setAvailableLocations] = useState([]);
    const [bookingDetails, setBookingDetails] = useState({
        name: "",
        email: "",
        eventType: "",
        location: "",
        hallname: "",
        guests: "",
        budget: "",
        date: "",
    });
    const eventOptions = {
        wedding: ["Krishna Garden Function Hall", "Rajwada Palace Banquet Hall", "Sangeetha Gardens", "Green Valley Garden", "haldi set", "Subhamastu Function Hall", "Krishna Garden Function Hall", "Performance show", "Sree Lakshmi Convention Hall", "Anmol Celebration Hall", "Sai Krishna Kalyana Mandapam", "Kusumas Halls"],
        "corporate party": ["Orion Business Convention Center", "Crystal Tower Corporate Hall", "Zenith Hall – TechPark Events", "Grand Sapphire Boardroom", "Emerald Elite Corporate Suites", "Phoenix Vista Business Hub", "The Hive Seminar Hall", "Nexus Pro Convention Venue", "MetroPoint Corporate Hall", "Infinity Edge Business Bay", "CoreSpace Executive Arena"],
        birthday: ["Butterfly Theme", "Barbie Dream Theme", "Animal Theme", "Forest Theme", "Aqua Theme", "Horses Theme", "Drunk in Love Theme", "Avengers Theme", "Princess Theme", "Goa Beach Theme", "Jurassic Theme", "Animal theme"],
        "private party": ["Olive Bistro", "Candle light dinner", "private cabin resto", "Pool resto", "Bachelors Maina", "Jungle theme", "Thearte Theme", "Halloween theme", "Retro theme"],
        destinations: ["Waves & Whistles", "Whispering Pines Wedding", "Royal / Rajputana Theme", "Pearls of Paradise", "Moonlight Manhattan", "Love on the Grapevines", "Moonlit Mirage", "Manali Maina", "Andamans Elegance", "Forest Theme", "Fort Resorts"],
        festival: ["Ganpati Utsav", "Krishna Leela Divine Dahi Handi", "Yuletide Gala", "Rajesh Parade", "Bhimavaram celebs", "Dandiya Dhamaka", "Holi Damaka", "Ravana Samharam", "light illuminated Elegance", "bathukamma Celebs"],
    };
    const locationOptions = {
        wedding: ["Vizag", "Vijayawada", "Hyderabad", "Guntur", "Rajahmundry"],
        birthday: ["Vizag", "Kakinada", "Hyderabad", "Warangal"],
        "private party": ["Beach Road", "Hilltop Resort", "Farmhouse", "City Club"],
        "corporate party": ["Business Bay", "Tech Park", "City Center", "Corporate Hub"],
        destinations: ["Manali", "Goa", "Jaipur", "Udaipur", "Kerala"],
        festival: ["Local Grounds", "Community Halls", "Open Stadium", "Temple Venues"],
    };
    useEffect(() => {
        if (location.state) {
            setBookingDetails(prevDetails => ({
                ...prevDetails,
                hallname: location.state.hallName,
                budget: location.state.budget,
                guests: location.state.guests,
                eventType: location.state.category,
            }));
        }
    }, [location.state]);

    // const handleDetails = (e) => {
    //     setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
    // };
    // const handleDetails = (e) => {
    //     const { name, value } = e.target;

    //     if (name === "eventType") {
    //         setBookingDetails({ ...bookingDetails, eventType: value, hallname: "" });
    //         setAvailableHalls(eventOptions[value] || []);
    //     } else {
    //         setBookingDetails({ ...bookingDetails, [name]: value });
    //     }
    // };
    const handleDetails = (e) => {
        const { name, value } = e.target;

        if (name === "eventType") {
            setBookingDetails({ ...bookingDetails, eventType: value, hallname: "", location: "" });
            setAvailableHalls(eventOptions[value] || []);
            setAvailableLocations(locationOptions[value] || []);
        } else {
            setBookingDetails({ ...bookingDetails, [name]: value });
        }
    };
    const handleSubmitBooking = async (e) => {
        e.preventDefault();

        try {
            const bookingsRef = ref(db, `bookings`);
            const newBookingRef = push(bookingsRef);

            await set(newBookingRef, {
                ...bookingDetails,
                timestamp: new Date().toISOString(),
            });

            alert("Booking submitted successfully!");
            setBookingDetails({ // Reset the form
                name: "",
                email: "",
                eventType: "",
                location: "",
                hallname: "",
                guests: "",
                budget: "",
                date: "",
            });
            navigate("/form"); // Redirect to the form page or another page
        } catch (err) {
            console.error("Error submitting booking:", err);
            alert("An error occurred while submitting the booking.");
        }
    };

    return (
        <div id="contactform">
            <div id="image">
                <img src="https://img.freepik.com/free-vector/wedding-planner-concept-illustration_114360-2720.jpg" alt="" />
            </div>
            <div id="form">
                <h3>Contact Us</h3>
                <Form onSubmit={handleSubmitBooking} >
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type='text' name='name' value={bookingDetails.name} onChange={handleDetails} placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type='email' name='email' value={bookingDetails.email} onChange={handleDetails} placeholder="Enter your email" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Event Type:</Form.Label>
                        <Form.Select name='eventType' value={bookingDetails.eventType} onChange={handleDetails}>
                            <option value="">Select Event Type</option>
                            <option value="wedding">Wedding</option>
                            <option value="birthday">Birthday</option>
                            <option value="private party">Private Party</option>
                            <option value="corporate party">Corporate Party</option>
                            <option value="destinations">Destinations</option>
                            <option value="festival">Festival</option>
                        </Form.Select>
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Label>Location:</Form.Label>
                        <Form.Control type='text' name='location' value={bookingDetails.location} onChange={handleDetails} placeholder="Enter your location" required />
                    </Form.Group> */}
                    <Form.Group>
                        <Form.Label>Location:</Form.Label>
                        <Form.Select name='location' value={bookingDetails.location} onChange={handleDetails} required>
                            <option value="">Select a location</option>
                            {availableLocations.map((loc, index) => (
                                <option key={index} value={loc}>{loc}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>HallName/Theme:</Form.Label>
                        <Form.Select name='hallname' value={bookingDetails.hallname} onChange={handleDetails} required>
                            <option value="">Select a hall/theme</option>
                            {availableHalls.map((hall, index) => (
                                <option key={index} value={hall}>{hall}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    {/* <Form.Group>
                        <Form.Label>Number of Guests:</Form.Label>
                        <Form.Control type='text' name='guests' value={bookingDetails.guests} onChange={handleDetails} placeholder="Enter number of guests" required />
                    </Form.Group> */}
                    <Form.Group>
                        <Form.Label>Number of Guests:</Form.Label>
                        <Form.Select name="guests" value={bookingDetails.guests} onChange={handleDetails} required>
                            <option value="">Select guest range</option>
                            <option value="Couple">Couple</option>
                            <option value="1-10">1 - 10</option>
                            <option value="11-25">11 - 25</option>
                            <option value="26-50">26 - 50 </option>
                            <option value="51-100">51 - 100</option>
                            <option value="Above 100">Above 100 </option>
                            <option value="Above 300">Above 300</option>
                            <option value="Above 500">Above 500</option>
                            <option value="Above 800">Above 800</option>
                            <option value="1000+">1000+</option>
                        </Form.Select>
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Label>Budget:</Form.Label>
                        <Form.Control type='text' name='budget' value={bookingDetails.budget} onChange={handleDetails} placeholder="Enter Budget" required />
                    </Form.Group>
                    */}
                    <Form.Group>
                        <Form.Label>Budget:</Form.Label>
                        <Form.Select name="budget" value={bookingDetails.budget} onChange={handleDetails} required>
                            <option value="">Select your budget range</option>
                            <option value="5000">₹5,000</option>
                            <option value="5000-10000">₹5,000 - ₹10,000</option>
                            <option value="10001-25000">₹10,001 - ₹25,000</option>
                            <option value="25001-50000">₹25,001 - ₹50,000</option>
                            <option value="50001-100000">₹50,001 - ₹1,00,000</option>
                            <option value="100001-250000">₹1,00,001 - ₹2,50,000</option>
                            <option value="250001-500000">₹2,50,001 - ₹5,00,000</option>
                            <option value="500001-1000000">₹5,00,001 - ₹10,00,000</option>
                            <option value="1000001-1500000">₹10,00,001 - ₹15,00,000</option>
                            <option value="1500000+">₹15,00,000+</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type='date' name='date' value={bookingDetails.date} onChange={handleDetails} />
                    </Form.Group>
                    <Button type='submit'>Submit Booking</Button>
                </Form>
            </div>
        </div >

    );
};

export default Form1;