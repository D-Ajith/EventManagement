import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='topdiv'>
      <div className='footerdescp'>
        <h4>Ajith Events</h4>
        <p>Ajith events is your ultimate one-stop destination for all your event management needs. From conception to execution, we handle every detail to ensure your event is a stunning success.</p>
        </div>
       <div className='footersection'>
       <div className='footeremail'>
        <h5>Email</h5>
        <a href="mailto:doddi.ajith2003@gmail.com">doddi.ajith2003@gmail.com</a>
        </div>
        <div className='footercont'>
        <h5>Contact/Whatsapp</h5>
        <a href="tel:+916303698338">6303698338</a>
        </div>
       </div>
      </div>
        <hr/>
        <p id="footerbtm">© 2025 Ajith events. All rights reserved.</p>
    </div>
  )
}

export default Footer