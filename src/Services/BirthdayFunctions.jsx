import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const BirthdayFunctions = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
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
      <h3>BirthdayFunctions</h3>
      <p>Ajith Event Management is your go-to partner for all social events. Whether it's birthdays, anniversaries, cultural celebrations, or private parties, we deliver tailored, seamless, and memorable experiences that leave a lasting impression on your guests.</p>
      <div className="image-grid">
        {data
          .filter((x) => x.category === "Birthday Functions")
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

export default BirthdayFunctions