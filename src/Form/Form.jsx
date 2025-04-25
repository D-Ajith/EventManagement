import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { db } from '../Firebase/Fbconfig';
import { set, ref, push } from "firebase/database";
import { useNavigate, useLocation } from 'react-router-dom';
import "./Form.css"

const Form1 = () => {
    const navigate = useNavigate();
    const location = useLocation();
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

    useEffect(() => {
        if (location.state) {
            setBookingDetails(prevDetails => ({
                ...prevDetails,
                hallname: location.state.hallName,
                budget: location.state.budget,
                guests:location.state.guests,
                eventType: location.state.category, 
            }));
        }
    }, [location.state]);

    const handleDetails = (e) => {
        setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
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
                    <Form.Group>
                        <Form.Label>Location:</Form.Label>
                        <Form.Control type='text' name='location' value={bookingDetails.location} onChange={handleDetails} placeholder="Enter your location" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>HallName/Theme:</Form.Label>
                        <Form.Control type='text' name='hallname' value={bookingDetails.hallname} onChange={handleDetails} placeholder="Enter hall or theme name you liked" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Number of Guests:</Form.Label>
                        <Form.Control type='text'  name='guests' value={bookingDetails.guests} onChange={handleDetails} placeholder="Enter number of guests" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Budget:</Form.Label>
                        <Form.Control type='text' name='budget' value={bookingDetails.budget} onChange={handleDetails} placeholder="Enter Budget" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type='date' name='date' value={bookingDetails.date} onChange={handleDetails} />
                    </Form.Group>
                    <Button type='submit'>Submit Booking</Button>
                </Form>
            </div>
        </div>

    );
};

export default Form1;