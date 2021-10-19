import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Register.css'

const Register = () => {

    // google signup starts
    const { signInUsingGoogle, signInWithEmailAndPassword, sendEmailVerification, updateProfile, setLoginUser, loginUser } = useAuth()

    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || "/home"

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect)
            })
    }
    // google signup ends


    const { getAuth, createUserWithEmailAndPassword } = useFirebase();

    const [name, setName] = useState('')

    // const [loginUser, setLoginUser] = useState({});

    // error state
    const [error, setError] = useState('')

    // login state
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //register button click handler
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be atleast 6 characters long.')
            return;
        }

        isLogin ? processLogin(email, password) : registerNewUser(email, password);

    }


    // login process
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setLoginUser(result.user);
                history.push(redirect);
                // console.log(loginUser)
                setError('');



            })
            .catch(error => {
                setError("User not found, please register")
            })
        // return {
        //     loginUser
        // }
    }

    // register process 

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setLoginUser(result.user);
                // console.log(loginUser);
                setError('');
                verifyEmail();
                setUserName();
                history.push(redirect);
            })
            .catch(error => {
                setError("You have already an account, please login");
            })
        return {
            loginUser
        }
    }

    // setting username after login via email and password 
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }

    // verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
    }

    // toggle login
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    // handling name change
    const handleNameChange = e => {
        setName(e.target.value);
    }

    // email handler
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    // password handler
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <Form onSubmit={handleRegistration} className="container my-5 col-md-6 register">
            <h2 className="text-center mb-5">Please {isLogin ? "Login" : "Register"}</h2>

            {!isLogin && <Form.Group className="mb-3" controlId="formGroupText">
                <Form.Label>Full Name</Form.Label>
                <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter Full Name" required />
            </Form.Group>}

            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formGroupText">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" required />
            </Form.Group> */}

            <Form.Group onChange={toggleLogin} className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Already have an Account?" />
            </Form.Group>

            {/* error message */}
            <div>
                <p className="text-danger">{error}</p>
            </div>

            {/* toggle login and register button */}
            <div className="loginSubmit d-flex">
                <button className="loginBtn my-3">{isLogin ? "Login" : "Register"}</button>

                <button className="orBtn" disabled>or</button>

                <input onClick={handleGoogleLogIn} type="submit" value="Sign up using Google" className="loginBtn my-3" />
            </div>


            {/* <p>Already have an Account? <NavLink to="/login" className="registerLink">Login Now</NavLink></p> */}
        </Form>
    );
};

export default Register;