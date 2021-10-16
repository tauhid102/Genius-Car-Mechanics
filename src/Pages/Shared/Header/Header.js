import React from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#experts">Expert</Nav.Link>
                            {user.email ?
                                <button onClick={logOut}>Logout</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        </Nav>
                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
                        <Row>
                        <Col xs={0} md={0} lg={0} width={2} >
                            <Image className="header-image" src={user?.photoURL} roundedCircle />
                        </Col>
                        </Row>
                    </Navbar.Collapse>



                </Container>
            </Navbar>
        </>
    );
};

export default Header;