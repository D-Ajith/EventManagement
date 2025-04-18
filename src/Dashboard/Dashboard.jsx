import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { db } from "../Firebase/Fbconfig";
import { ref, onValue, set } from "firebase/database";
import Footer from "../Footer/Footer";
import emailjs from '@emailjs/browser';
import "./Dashboard.css"

const Dashboard = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const bookingsRef = ref(db, 'bookings');
        onValue(bookingsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const bookingList = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                setBookings(bookingList);
            } else {
                setBookings([]);
            }
        });
    }, []);

    const sendEmail = async (booking, status) => {
        try {
            const templateParams = {
                name: booking.name,
                to_email: booking.email,
                time: new Date().toLocaleString(),
                message: `Your booking for ${booking.eventType} on ${booking.date} has been ${status}.`,
                status: status
            };

            const response = await emailjs.send(
                'service_idkxxzb',
                'template_nribm41',
                templateParams,
                'MvQvannLOlk-rc6zl'
            );

            console.log('Email sent successfully!', response.status, response.text);

            // Update the booking status instead of removing it
            await set(ref(db, `bookings/${booking.id}`), {
                ...booking,
                status: status // Add status to keep track of the booking
            });

        } catch (error) {
            console.error('Failed to send email:', error);
        }
    };

    const handleAccept = (booking) => sendEmail(booking, 'accepted');
    const handleReject = (booking) => sendEmail(booking, 'rejected');
    const handleNavigate = useNavigate();
    return (

        <div>
            <div className="dashboard-header">
                <h3>Ajith Events</h3>
                <h4 onClick={() => handleNavigate('/home')}>DASHBOARD</h4>
                <h5>EVENT MANGEMENT</h5>
                <h5>EVENT LIST</h5>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Event Type</th>
                        <th>Location</th>
                        <th>Guests</th>
                        <th>Budget</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td>{booking.name}</td>
                            <td>{booking.email}</td>
                            <td>{booking.eventType}</td>
                            <td>{booking.location}</td>
                            <td>{booking.guests}</td>
                            <td>{booking.budget}</td>
                            <td>{booking.date}</td>
                            <td>{booking.status || 'Pending'}</td>

                            <td>
                                <Button variant="success" onClick={() => handleAccept(booking)}>Accept</Button>{' '}
                                <Button variant="danger" onClick={() => handleReject(booking)}>Reject</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Footer />
        </div>


    );
};

export default Dashboard;
