import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Festivals = () => {
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

    
      <div className="image-container">
        <h3>Festivals</h3>
        <p>Ajith Event Management brings festivals to life with vibrant themes, seamless coordination, and joyful celebrations. From cultural fests to seasonal carnivals, we craft immersive experiences that capture the spirit of the occasion and leave lasting impressions on every guest.</p>
        <div className="image-grid">
        {data
          .filter((x) => x.category === "Festivals")
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

export default Festivals