import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./Blogs.css"
const Blogs1 = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <section className="blog-section">
            <div>
                <div>
                    <h2>How Ajith Events Can Simplify Your Event Planning Process</h2>
                    <img src="https://framerusercontent.com/images/ZN6C9I3xkufl91QnGjKphMlSrI.jpg?scale-down-to=1024" alt="" className='blogs' />
                    <div className="row g-4">
                        {[
                            {
                                title: "Comprehensive Planning from Start to Finish",
                                text: "At Ajith, we believe that every event should be a reflection of your vision and style...",
                            },
                            {
                                title: "Creativity and Innovation",
                                text: "Our talented planners are always brimming with fresh ideas and unique concepts...",
                            },
                            {
                                title: "Efficient Execution",
                                text: "We pride ourselves on our ability to execute events flawlessly, adhering to timelines...",
                            },
                            {
                                title: "Budget-Friendly Solutions",
                                text: "Our company offers flexible solutions tailored to your financial constraints...",
                            },
                            {
                                title: "A Complete Toolkit",
                                text: "From venue selection and décor to catering and entertainment, we provide a full toolkit...",
                            },
                            {
                                title: "Conclusion",
                                text: "With Ajith, event planning becomes a seamless and enjoyable experience...",
                            },
                        ].map((item, idx) => (
                            <div className="col-md-6" key={idx}>
                                <div className="card h-100 shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button onClick={() => handleNavigation("/blogs")}>See all blogs</Button>
                </div>
            </div>
        </section>
    )
}

export default Blogs1