import React from 'react';
import { FaHome, FaCalendarAlt} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import "./Adminsidebar.css"

const Sidebar = () => {
    const navigate=useNavigate()
  return (
    <div className="sidebar" style={{ width: '250px', background: 'linear-gradient(135deg, #6e8efb, #a777e3)', height: '100vh', color: 'white', padding: '20px 10px' }}>
      <h2 style={{ marginBottom: '30px' }}>Ajith Events</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li onClick={()=>navigate("/home")} style={{ cursor: 'pointer' }}><FaHome /> Home</li>
        <li onClick={()=>navigate("/dashboard")} style={{ cursor: 'pointer' }}><FaCalendarAlt/> Dashboard</li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
