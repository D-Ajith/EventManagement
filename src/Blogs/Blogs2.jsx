import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./Blogs.css"
const Blogs2 = () => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <section>
            <div>

                <>
                    <h2>The Benefits of Hiring a Professional Event Planner</h2>
                    <img src="https://framerusercontent.com/images/X7DZ3crjPZlTeCQsL2mSnAAOF74.jpg?scale-down-to=1024" alt="" className='blogs' />
                    <div className="row g-4">
                        {[
                            {
                                title: "Stress Reduction",
                                text: "Planning an event involves juggling numerous tasks, deadlines, and details. A professional event planner manages all of these, allowing you to relax and enjoy the process without the stress.",
                            },
                            {
                                title: "Expertise and Experience",
                                text: "Professional event planners know the ins and outs of event planning — from venue selection to timeline management — ensuring a flawless experience.",
                            },
                            {
                                title: "Time-Saving",
                                text: "Event planners save you countless hours of research, organization, and coordination so you can focus on what matters most.",
                            },
                            {
                                title: "Budget Management",
                                text: "They help you stick to your budget, negotiate better vendor rates, and deliver quality without unnecessary overspending.",
                            },
                            {
                                title: "Creativity and Innovation",
                                text: "With fresh, unique ideas and themes, planners elevate your event with memorable touches and innovative décor.",
                            },
                            {
                                title: "Attention to Detail",
                                text: "Planners ensure everything — from seating to lighting — aligns perfectly with your vision, delivering a cohesive experience.",
                            },
                            {
                                title: "Problem-Solving Skills",
                                text: "Unexpected issues are handled swiftly by experienced planners so that your event continues smoothly without interruptions.",
                            },
                            {
                                title: "Conclusion",
                                text: "Hiring a professional planner like Satavahana means less stress, better quality, and a truly unforgettable event. Let us help make your next celebration a success.",
                            }
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
                </>
            </div>
        </section>
    )
}

export default Blogs2