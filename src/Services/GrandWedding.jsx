import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Images.css"
const GrandWedding = () => {
    const [data, setData] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        axios
            .get("https://api.jsonbin.io/v3/b/6800f20c8a456b79668b6788")
            .then((res) => setData(res.data.record))
            .catch((err) => console.log(err));
    }, []);
    const handleclick =(item)=>{
        navigate(`/details/${item.id}`,{state:item})
    }
    return (       
            <div className="image-container">
                <h3>GrandWedding</h3>
                <p>We specialize in curating bespoke weddings, handling every detail from planning to execution. Ajith Event Management ensures a stress-free journey to your special day, delivering timeless and beautifully crafted events.
                </p>
                <div className="image-grid">
                {data
                    .filter((x) => x.category === "Grand Wedding")
                    .map((x, index) => (
                        <div key={index} className="event-item">
                        <img key={index} src={x.image} loading='lazy' alt="" onClick={()=>handleclick(x)}  style={{ cursor: 'pointer' }}/>
                        <p>{x.hallName}</p>
                        </div>
                    ))}
                </div>
            </div>
      


    )
}

export default GrandWedding