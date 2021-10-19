import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut, loginUser } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <NavLink to="/home" className="logo">Soul Sense Healthcare</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav">
                        <NavLink to="/home" className="navlink">Home</NavLink>

                        <NavLink to="/services" className="navlink">Services</NavLink>

                        <NavLink to="/clinicians" className="navlink">Clinicians</NavLink>

                        <NavLink to="/blog" className="navlink">News/Blog</NavLink>

                    </Nav>
                    <Nav>
                        {
                            user.email ?
                                <div>
                                    <img src={user?.photoURL} className="userPic" alt="" />
                                    <NavLink to="/userInfo" className="loginLink">{user?.displayName}</NavLink>
                                    <button className="logoutBtn" onClick={logOut}>LogOut</button>
                                </div>
                                :
                                <NavLink to="/login" className="loginLink">Login</NavLink>
                        }



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;