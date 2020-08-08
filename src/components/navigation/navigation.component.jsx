import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';
const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Navbar.Brand as={Link} to="/"><Typography variant='h6'>OPEN SOURCE CLUB</Typography></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                <Nav.Link as={Link} to="/projects" ><Typography variant='button'>Projects</Typography></Nav.Link>    
                <Nav.Link as={Link} to="/aboutus" ><Typography variant='button'>About Us</Typography></Nav.Link>
                <Nav.Link as={Link} to="/contactus" ><Typography variant='button'>Contact Us</Typography></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;