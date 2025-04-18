import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Destinations = () => {
    const [data, setData] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        axios
            .get("https://api.jsonbin.io/v3/b/6800f20c8a456b79668b6788")
            .then((res) => setData(res.data.record))
            .catch((err) => console.log(err));
    }, []);
    const handleclick=(item)=>{
        navigate(`/details/${item.id}`,{state:item})
    }
  return (

      <div>
         <div className="image-container">
            <h3>Destinations</h3>
         <p>Ajith Event Management curates unforgettable destination events, blending stunning locations with meticulous planning. From exotic beach weddings to serene hilltop ceremonies, we ensure every detail is flawlessly managed, turning your dream destination into a breathtaking reality.</p>
                {data
                .filter((x) => x.category === "Destinations")
                .map((x,index) => (
                    <img key={index} src={x.image} loading='lazy' alt="" width="250px" height="250px" onClick={()=>handleclick(x)}  style={{ cursor: 'pointer' }}/>
                ))}
            </div>
    </div>

  )
}

export default Destinations