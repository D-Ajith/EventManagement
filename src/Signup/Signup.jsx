import React  from "react"
import { Button, Form } from "react-bootstrap"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { author, db } from '../Firebase/Fbconfig'
import { set, ref } from "firebase/database"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import "./Signup.css"
const Signup= () => {
    const navigate = useNavigate()
    const [signUpDetails, setSignUpDetails] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    })
    const handleDetails = (e) => {
        setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value })
    }
   const handleSubmitSignup = async (e) => {
    e.preventDefault();
    const { name, email, password, role } = signUpDetails;

    try {
        const signupUser = await createUserWithEmailAndPassword(author, email, password);
        const signupuserCred = signupUser.user;

        await updateProfile(signupuserCred, {
            displayName: name
        });

        let roleType = role === "admin" ? "admins" : "users";

        await set(ref(db, `${roleType}/${name}`), {
            name: name,
            email: email,
            id: signupUser.user.uid,
            role: role
        });

        alert("Signup successful!");
        navigate("/login");

    } catch (err) {
        console.log(err);
        if (err.code === 'auth/email-already-in-use') {
            alert("Email is already in use. Please try a different one or login.");
        } else if (err.code === 'auth/invalid-email') {
            alert("Invalid email address.");
        } else if (err.code === 'auth/weak-password') {
            alert("Password should be at least 6 characters.");
        } else {
            alert("Signup failed. Please try again.");
        }
    }
}
    return (

<div className="signup-wrapper">
<div id="SignupForm">
    <h3>Signup</h3>
            <Form onSubmit={handleSubmitSignup}  id="Formconatiner">
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type='text' name='name' value={signUpDetails.name} onChange={handleDetails} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type='email' name='email' value={signUpDetails.email} onChange={handleDetails} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>password:</Form.Label>
                    <Form.Control type='password' name='password' value={signUpDetails.password} onChange={handleDetails} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Role</Form.Label>
                    <Form.Select onChange={handleDetails} name='role'>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </Form.Select>
                </Form.Group>
                <Button type='submit'>SignUp</Button>
            </Form>
        </div>
</div>

    )
}
export default Signup;
