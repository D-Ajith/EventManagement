import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Home.css"
import { Carousel, Button } from 'react-bootstrap';
const Home = () => {
  const loc = useLocation();
  const handleNavigate = useNavigate();

  const [loggedInPerson, setLoggedInPerson] = useState(localStorage.getItem('loggedInPerson') || 'Guest');

  useEffect(() => {
    if (loc.state && loc.state.personData && loc.state.role) {
      localStorage.setItem('loggedInPerson', loc.state.personData.name);
      localStorage.setItem('loggedInPersonRole', loc.state.role);
      setLoggedInPerson(loc.state.personData.name);
    }
  }, [loc.state]);

  return (
    <div className='home'>

      <div style={{ padding: 0, margin: 0 }}>
      <Carousel fade>
  <Carousel.Item>
    <video
      className="d-block w-100 img-fluid carousel-video"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="https://videos.pexels.com/video-files/31575321/13456306_2560_1440_25fps.mp4" type="video/mp4" />
      
    </video>
  </Carousel.Item>

  <Carousel.Item>
    <video
      className="d-block w-100 img-fluid carousel-video"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="https://videos.pexels.com/video-files/9474518/9474518-uhd_2732_1440_30fps.mp4" type="video/mp4" />
      
    </video>
  </Carousel.Item>

  <Carousel.Item>
    <video
      className="d-block w-100 img-fluid carousel-video"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="https://videos.pexels.com/video-files/31501470/13430911_1920_1080_60fps.mp4" type="video/mp4" />
     
    </video>
  </Carousel.Item>
</Carousel>

      </div>

      <section>
        <div className='homefirst'>
          <h2>Premier Event Planning for Grand Weddings, Joyous Haldi, Vibrant Festivals, Elite Corporate Events, and Unforgettable Private Parties</h2>
          <p>Your Trusted Partner for Exceptional Corporate Events and Memorable Weddings. From seamless corporate planning to breathtaking wedding celebrations, we bring your vision to life with precision and creativity</p>
          <Button onClick={() => handleNavigate('/form')} variant='success'>Plan Your Event Today</Button>
        </div>
        <div className='homevision'>
          <h2>Our Vision</h2>
          <p>At Ajith events, we envision a world where every event is a masterpiece of creativity and efficiency. Our dedicated team transforms concepts into spectacular productions, ensuring that every detail is perfectly executed from start to finish. We are committed to delivering exceptional event experiences, characterized by innovative ideas, timely execution, and unmatched quality.
            By offering a comprehensive toolkit and personalized planning, we cater to events of all sizes and budgets. Our goal is to make every event not just successful, but truly unforgettable.</p>
        </div>
        <h2 className="text-center my-4">Let's Plan Your Big Day!</h2>
        <div className='homebigday'>
          <div className="step">
            <img src="https://goldentrumpetevents.com/wp-content/uploads/2023/10/Call-icon.png" alt="" className="img-icon" />
            <h4>Speak</h4>
            <p>SPEAK with us and share your requirements</p>
          </div>

          <div className="step">
            <img src="https://goldentrumpetevents.com/wp-content/uploads/2023/10/Search.png" alt="" className="img-icon" />
            <h4>Explore</h4>
            <p>EXPLORE through a vast gallery of our past events</p>
          </div>

          <div className="step">
            <img src="https://goldentrumpetevents.com/wp-content/uploads/2023/10/Images.png" alt="" className="img-icon" />
            <h4>Visualise</h4>
            <p>VISUALIZE your decor with our customized designs</p>
          </div>

          <div className="step">
            <img src="https://goldentrumpetevents.com/wp-content/uploads/2023/10/Calender.png" alt="" className="img-icon" />
            <h4>Book</h4>
            <p>BOOK us after going through our detailed quote</p>
          </div>

          <div className="step">
            <img src="https://goldentrumpetevents.com/wp-content/uploads/2023/10/Women-with-tea.png" alt="" className="img-icon" />
            <h4>Relax & Enjoy</h4>
            <p>RELAX & ENJOY your big day</p>
          </div>
        </div>
      </section>

    </div>

  );
};

export default Home;