import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Authentication.css';

const Authentication = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section">
        <Container className="hero-container">
          <h1 className="hero-title">Welcome to AjithEvents</h1>
          <p className="hero-subtitle">
            Your ultimate companion for seamless event planning
          </p>
          <div className="auth-buttons">
            <Button variant="primary" onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
            <Button variant="outline-light" onClick={() => navigate('/login')}>
              Log In
            </Button>
          </div>
        </Container>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <Container>
          <Row>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">📅</div>
                  <h3>Plan Your Event</h3>
                  <p>Create detailed event schedules effortlessly</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">✅</div>
                  <h3>Organize Checklists</h3>
                  <p>Customizable checklists for perfect preparation</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card">
                <Card.Body>
                  <div className="feature-icon">👥</div>
                  <h3>Team Collaboration</h3>
                  <p>Plan events together in real time</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer */}
      <div className="footer-section">
        <p>Made with ❤️ by AjithEvents Team</p>
      </div>
    </div>
  );
};

export default Authentication;