import React from 'react'
import { useNavigate } from 'react-router-dom'
import Img1 from "../Images/img1.png"
import "./Blogmain.css"
const Blogs = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
      navigate(path);
    };
  return (
<section className="blog-section">
<div className='blogs'>
        <h2>Blogs</h2>
     <img src={Img1} alt="" width="80%" height="700"/>
     <div className='Blog1' onClick={()=>handleNavigation('/Blogs1')}>
         <img src="https://framerusercontent.com/images/ZN6C9I3xkufl91QnGjKphMlSrI.jpg?scale-down-to=1024" alt="" width="250" height="250"/>
         <p>How Ajith Events Can Simplify Your Event Planning Process</p>
     </div>
 
     <div className='Blog2' onClick={()=>handleNavigation('/Blogs2')}>
         <img src="https://framerusercontent.com/images/X7DZ3crjPZlTeCQsL2mSnAAOF74.jpg?scale-down-to=1024" alt="" width="250" height="250"/>
         <p>The Benefits of Hiring a Professional Event Planner</p>
     </div>

    </div>
</section>
  )
}

export default Blogs