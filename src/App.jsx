import React, { useEffect, useState } from 'react';
import Navbar1 from './Navbar/Navbar';
import Home from './Home/Home';
import AboutUs from './About Us/About Us';
import Services from './Services/Services';
import Gallery from './Gallery/Gallery';
import Form from './Form/Form';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import { Route, Routes, Navigate,useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { author } from "./Firebase/Fbconfig"
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer/Footer';
import GrandWedding from './Services/GrandWedding';
import CorporateConferences from './Services/CorporateConferences';
import BirthdayFunctions from './Services/BirthdayFunctions';
import PrivateParties from './Services/PrivateParties';
import Destinations from './Services/Destinations';
import Festivals from './Services/Festivals';
import Blogs from './Blogs/Blogs';
import Blogs1 from './Blogs/Blogs1';
import Blogs2 from './Blogs/Blogs2';
import Authentication from './Welcomepage/Authentication';
import Imagedetail from './Services/Imagedetail';
const App = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const location = useLocation();
  useEffect(() => {
    const userLoggedIn = onAuthStateChanged(author, (currentUser) => {
      setUser(currentUser)
      setLoading(false)

    })

    return () => userLoggedIn()
  }, [])


  console.log(user)
  if (loading) {
    return <h1>Loadig pls wait a moment......</h1>
  }
  const hideNavbarPaths = ['/','/dashboard','/signup', '/login'];
  const isAuthenticated = () => {
  const user = localStorage.getItem("loggedInPerson");
  return !!user;
};
  return (
    <div>
       {!hideNavbarPaths.includes(location.pathname) && <Navbar1 />}
      <Routes>
        <Route path='/' element={<Authentication />} /> 
        <Route path='/home' element={isAuthenticated() ? <Home /> : <Navigate to="/login" />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blogs1' element={<Blogs1/>} />
        <Route path='/blogs2' element={<Blogs2/>} />
        <Route path='/form' element={<Form />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/grand-wedding" element={<GrandWedding />} />
        <Route path="/corporate-conferences" element={<CorporateConferences />} />
        <Route path="/birthday-functions" element={<BirthdayFunctions />} />
        <Route path="/private-parties" element={<PrivateParties />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/festivals" element={<Festivals />} />
        <Route path="/details/:id" element={<Imagedetail/>}/>
      </Routes>
      {!hideNavbarPaths.includes(location.pathname) && <Footer />}

    </div>

  )
}

export default App
