import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { author, db } from '../Firebase/Fbconfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, get } from 'firebase/database';
import "./Login.css"

const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const handleDetails = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginDetails;

    try {
      const userCred = await signInWithEmailAndPassword(author, email, password);
      const loggedInPerson = userCred.user.displayName;

      const adminRef = ref(db, `admins/${loggedInPerson}`);
      const userRef = ref(db, `users/${loggedInPerson}`);

      const [adminData, userData] = await Promise.all([get(adminRef), get(userRef)]);

      if (adminData.exists()) {
        alert("Successfully admin login");
        navigate("/dashboard", { state: { personData: adminData.val(), role: "admin" } });
      } else if (userData.exists()) {
        alert("Successfully user login");
        navigate("/home", { state: { personData: userData.val(), role: "user" } });
      } else {
        alert("No signed-up user found");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to login. Please check your credentials.");
    }
  };

  return (

<div className='login-wrapper'>
<div id="loginform">
  <h3>Login</h3>
      <Form onSubmit={handleLogin} id="formconatiner">
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control type='email' name='email' value={loginDetails.email} onChange={handleDetails} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control type='password' name='password' value={loginDetails.password} onChange={handleDetails} required />
        </Form.Group>
        <Button variant="primary" type='submit'>Login</Button>
      </Form>
    </div>
</div>

  );
};

export default Login;