import React from 'react'
import "./Aboutus.css"
import Showcase from '../Showcase/Showcase'
const AboutUs = () => {
  return (
    <div className='aboutus'>
      <section>
        <div className='aboutpart'>
          <h2>About Us</h2>
          <p>At Ajith events, we are your complete event management solution, dedicated to transforming your vision into reality. Our team is committed to delivering exceptional experiences, handling everything from initial concept to final production with unparalleled creativity, efficiency, and attention to detail. Our mission is to turn every event into an unforgettable experience, making your special moments truly exceptional.</p>
          <img src="https://img.freepik.com/premium-photo/anime-style-businessman-holding-clipboard_1282444-262169.jpg" alt="" width="250" height="250"/>
          <div className='aboutpart2'>
            <h2>We also provide the following event management services</h2>
            <ul>
              Venue booking
              Food
              Photography
              Tenthouse arrangement
              Entertainment
              Celebrity management
            </ul>
          </div>
        </div>
        <Showcase />
      </section>
    </div>
  )
}

export default AboutUs