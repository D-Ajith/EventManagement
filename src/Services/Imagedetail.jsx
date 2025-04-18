import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const Imagedetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  if (!data) return <p>No data found......</p>

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{data.hallName}</h2>
      <img src={data.image} alt={data.hallName} style={{ width: '80%', maxWidth: '600px', borderRadius: '10px', marginBottom: '1rem' }} />
      <p><strong>Category:</strong> {data.category}</p>
      <p><strong>Budget:</strong> {data.budget}</p>
      <p><strong>Capacity:</strong> {data.capacity}</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: "15%", margin: '0 auto' }}>
        <Button onClick={() => navigate('/form')}>Book Now</Button>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </div>

    </div>
  )
}

export default Imagedetail