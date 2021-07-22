import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../CSS/header.css';

const header = () =>{
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='header'>
            <Container>
                <Navbar.Brand href="/"><span className='title'>Kvothe</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">Me</Nav.Link>
                    <Nav.Link href="/music">My Music</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default header;