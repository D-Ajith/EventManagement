import React from 'react';
import { Navbar, Nav, Container,Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { author } from '../Firebase/Fbconfig';
import './Navbar.css';

const Navbar1 = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(author);
    localStorage.removeItem('loggedInPerson');
    localStorage.removeItem('loggedInPersonRole');
    alert('User logged out successfully!!');
    navigate('/login');
  };
  return (
    <div>
     <Navbar bg="light" variant="light" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/home">Ajith Events</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">HOME</Nav.Link>
              <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
              <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
              <Nav.Link as={Link} to="/Gallery">GALLERY</Nav.Link>
              <Nav.Link as={Link} to="/blogs">BLOG</Nav.Link>
              <Nav.Link as={Link} to="/form">CONTACT US</Nav.Link>
              <Button variant="outline-danger" size="sm" onClick={handleLogout} className="ms-3">
              Logout
            </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;