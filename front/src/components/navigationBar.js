import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar className="color-nav" fixed="top" expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">DesignMatch</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item className="hvr-underline-reveal active">
                                <Nav.Link className="a-white" href="/">Inicio</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="hvr-underline-reveal active">
                                <Nav.Link className="a-white" href="/services">Servicios</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="hvr-underline-reveal active">
                                <Nav.Link className="a-white" href="/login">Iniciar sesión</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="hvr-underline-reveal active">
                                <Nav.Link className="a-white" href="/register">Regístrate</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;