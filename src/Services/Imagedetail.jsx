import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import  "./Singlepage.css"

const Imagedetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  if (!data) return <p>No data found......</p>

  return (
    <div className="detail-text">
  <div className="detail-image">
    <img src={data.image} alt={data.hallName} />
  </div>
  <div className="detail-info">
    <h2>{data.hallName}</h2>
    <p><strong>Category:</strong> {data.category}</p>
    <p><strong>Budget:</strong> {data.budget}</p>
    <p><strong>Capacity:</strong> {data.capacity}</p>
    <div className="btn-group">
      <Button onClick={() => navigate('/form',{state:{hallName:data.hallName,budget:data.budget,guests:data.capacity,category:data.category}})}>Book Now</Button>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  </div>
</div>
  )
}

export default Imagedetail