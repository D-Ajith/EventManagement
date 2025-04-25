import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PrivateParties = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/6800f20c8a456b79668b6788")
      .then((res) => setData(res.data.record))
      .catch((err) => console.log(err));
  }, []);
  const handleclick = (item) => {
    navigate(`/details/${item.id}`, { state: item })
  }
  return (


    <div className="image-container">
      <h3>PrivateParties</h3>
      <p>Ajith Event Management specializes in organizing elegant and memorable private parties, tailored to your unique style and vision. Whether it's an intimate birthday, an anniversary celebration, or a luxurious gathering, we handle every detail to ensure a flawless and unforgettable experience.</p>
      <div className="image-grid">
        {data
          .filter((x) => x.category === "Private Parties")
          .map((x, index) => (
            <div key={index} className="event-item">
              <img key={index} src={x.image} loading='lazy' alt="" onClick={() => handleclick(x)} style={{ cursor: 'pointer' }} />
              <p>{x.hallName}</p>
            </div>
          ))}
      </div>
    </div>

  )
}

export default PrivateParties