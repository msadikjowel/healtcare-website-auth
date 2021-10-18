import React from 'react';
import { Form } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {

    // google sign in starts
    const { signInUsingGoogle } = useAuth()

    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || "/home"

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect)
            })
    }

    // google sign in

    const handleLogin = e => {
        e.preventDefault();
    }

    const login = () => {
        alert('This function is not available yet, please go to Register Section')
    }


    return (
        <Form onSubmit={handleLogin} className="container my-5 login col-md-6">
            <h2 className="text-center mb-5">Please Login</h2>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className="loginSubmit d-flex">
                <input onClick={login} type="submit" value="Login" className="loginBtn my-3" />

                <button className="orBtn" disabled>or</button>

                <input type="submit" value="Sign in using Google" className="loginBtn my-3" onClick={handleGoogleLogIn} />
            </div>

            <p className="loginPara">New to this Website? <NavLink to="/register" className="registerLink mb-5">Register Now</NavLink></p>


        </Form>
    );
};

export default Login;