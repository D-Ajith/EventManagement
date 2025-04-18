import React from 'react'
import "./Services.css"
import {useNavigate} from "react-router-dom"
import Img4 from "../Images/img 4.png"
import Img3 from "../Images/img 3.png"
import Img5 from "../Images/img 5.png"
import Img2 from "../Images/img2.png"
const Services = () => {
  const navigate = useNavigate();
const handleNavigation = (path) => {
  navigate(path);
};
  return (
    
    <section>
          <div className='services'>
      <h2>Our Services</h2>
      <div className='cardcontainer'>
      <div  className='conatiner' onClick={() => handleNavigation('/grand-wedding')}>
        <h4 id="service-heading">Grand Wedding</h4>
        <img src="https://framerusercontent.com/images/ifOncw8817LMptpgHZZy4G8e6Q.jpg?scale-down-to=1024" alt="" className='div-image'/>
      </div>
      <div className='conatiner' onClick={() => handleNavigation('/corporate-conferences')}>
        <h4 id="service-heading">Corporate Conferences</h4>
        <img src="https://framerusercontent.com/images/N4IZZG1Q5IyYUUpE3vmlgLOqsk.jpg" alt="" className='div-image'/>
      </div>
      <div className='conatiner' onClick={() => handleNavigation('/birthday-functions')}>
        <h4 id="service-heading">Birthday Functions</h4>
        <img src="https://framerusercontent.com/images/BybjBGz9yw8T69RSwtLKpE.jpg" alt="" className='div-image'/>
      </div>
      <div className='conatiner' onClick={() => handleNavigation('/private-parties')}>
        <h4 id="service-heading">Private Parties</h4>
        <img src="https://static.vecteezy.com/system/resources/previews/024/057/245/non_2x/teenagers-friends-in-costumes-celebrating-and-having-fun-at-halloween-party-young-people-at-costumes-party-halloween-celebration-concept-by-ai-generated-free-photo.jpg" alt="" className='div-image'/>
      </div>
      <div className='conatiner' onClick={() => handleNavigation('/destinations')}>
        <h4 id="service-heading">Destinations</h4>
        <img src="https://weddingplanningconference.com/blog/wp-content/uploads/2022/09/image-27.png" alt="" className='div-image'/>
      </div>
      <div className='conatiner' onClick={() => handleNavigation('/festivals')}>
        <h4 id="service-heading">Festivals</h4>
        <img src="https://www.financialexpress.com/wp-content/uploads/2024/08/Janmashtami-celebration-2024.jpg" alt="" className='div-image'/>
      </div>
      </div>
      <>
      <h2>What We Offer</h2>
      <img src={Img4} alt="" width="600px" height="500px"/>
      <p>Ajith Events offers a comprehensive range of services to transform your occasions into spectacular memories. Our expertise covers:</p>
      <div className="service-detail">
      <h3>Decor Planning:</h3>
      <p>We specialize in crafting enchanting decor that reflects your unique style and vision, ensuring a visually stunning backdrop for your event.</p>
      <img src="https://static.vecteezy.com/system/resources/previews/003/623/365/non_2x/planning-schedule-or-time-management-with-calendar-business-meeting-activities-and-events-organizing-process-office-working-background-illustration-vector.jpg" alt="" width="250" height="250"/>
      <h3>Venue Booking</h3>
      <p>Let us help you find the perfect venue that suits your event, be it an intimate gathering or a grand celebration.</p>
      <img src={Img3} alt="" width="250" height="250" />
      <p>We curate exciting entertainment experiences that keep your guests captivated, from live performances to interactive activities.</p>
      <img src="https://media.istockphoto.com/id/1266620945/vector/home-party-happy-people-dancing-taking-rest-and-having-fun-vector-flat-illustration.jpg?s=612x612&w=0&k=20&c=V0BBFAbcgapOPvupFAV8KDi6tkdWf19ARHARALgwA5w=" alt="" width="250" height="250"/>
      <h3>Photography</h3>
      <p>Capture every moment with our professional photography and cinematography services, preserving your memories for a lifetime.</p>
      <img src="https://t3.ftcdn.net/jpg/01/84/88/32/360_F_184883269_raopl6K12HiS4bxzKcD86KDj7wKpfcTN.jpg" alt="" width="250" height="250"/>
      <h3>Catering and Foodservice</h3>
      <p>Catering and foodservices deliver delicious meals and professional service, ensuring every event is seamless and memorable.</p>
      <img src={Img2} alt="" width="250" height="250"/>
      <h3>Artist Management</h3>
      <p>Whether you need renowned artists or local talent, we handle all aspects of artist management to elevate your event.</p>
      <img src="https://i.pinimg.com/736x/2d/6c/95/2d6c9544648f98c9be69e1b104a72a52.jpg" alt="" width="250" height="250"/>
      <h3>Logistics</h3>
      <p>Our logistics team ensures a seamless execution of your event, from transportation to setup, so you can relax and enjoy.</p>
      <img src={Img5} alt="" width="250" height="250"/>
      </div>
      </>
    </div>
    </section>
  )
}

export default Services