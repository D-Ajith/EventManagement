import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table, Row, Col, Card } from "react-bootstrap";
import { db } from "../Firebase/Fbconfig";
import { ref, onValue, set } from "firebase/database";
import emailjs from '@emailjs/browser';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Adminsidebar from "../Adminsidebar/Adminsidebar"
import "./Dashboard.css"

ChartJS.register(ArcElement, Tooltip, Legend);
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
    // Prepare event type data for the Doughnut chart
    const getEventTypeData = () => {
        const eventCounts = {};

        bookings.forEach(booking => {
            const eventType = booking.eventType || 'Unknown';
            eventCounts[eventType] = (eventCounts[eventType] || 0) + 1;
        });

        const eventTypes = Object.keys(eventCounts);
        const counts = Object.values(eventCounts);

        const backgroundColors = eventTypes.map((_, index) => {
            const hue = (index * 360 / eventTypes.length) % 360;
            return `hsl(${hue}, 70%, 60%)`;
        });

        return {
            labels: eventTypes,
            datasets: [
                {
                    data: counts,
                    backgroundColor: backgroundColors,
                    borderWidth: 1,
                }
            ]
        };
    };
    const handleNavigate = useNavigate();
    return (
        <div className="dashboard-layout">
            <div className="sidebar-wrapper">
                <Adminsidebar />
            </div>
            <div className="main-wrapper">
                <div className="dashboard-header">
                    <h4 onClick={() => handleNavigate('/home')}>DASHBOARD</h4>


                </div>
                {/* Chart & Stats */}
                <Row className="chart-stats-section mb-4">
                    <Col md={6}>
                        <Card className="shadow-sm p-3">
                            <h5 className="text-center mb-3">Event Type Distribution</h5>
                            <Doughnut
                                data={getEventTypeData()}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            position: 'right',
                                        },
                                    },
                                }}
                            />
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Row className="g-3">
                            <Col md={6}>
                                <Card className="shadow-sm p-3 text-center stats-card">
                                    <h3>{bookings.length}</h3>
                                    <p>Total Bookings</p>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="shadow-sm p-3 text-center stats-card">
                                    <h3>{bookings.filter(b => b.status === 'accepted').length}</h3>
                                    <p>Accepted</p>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="shadow-sm p-3 text-center stats-card">
                                    <h3>{bookings.filter(b => b.status === 'rejected').length}</h3>
                                    <p>Rejected</p>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="shadow-sm p-3 text-center stats-card">
                                    <h3>{bookings.filter(b => !b.status).length}</h3>
                                    <p>Pending</p>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="table-wrapper">
                    <Table striped bordered hover responsive>
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
                </div>
            </div>
        </div>


    );
};

export default Dashboard;
