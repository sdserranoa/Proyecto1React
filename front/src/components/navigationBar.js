import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

class NavigationBar extends Component {

    inicioBtn() {
        if (localStorage.getItem("Token") === null) {
            return (

                <Nav.Item className="hvr-underline-reveal active">
                    <Nav.Link className="a-white" href="/">Inicio</Nav.Link>
                </Nav.Item>

            )
        } else {
            return (

                <Nav.Item className="hvr-underline-reveal active">
                    <Nav.Link className="a-white" href="/projects">Inicio</Nav.Link>
                </Nav.Item>

            )

        }


    }

    serviciosBtn() {
        if (localStorage.getItem("Token") === null) {
            return (
                <Nav.Item className="hvr-underline-reveal active">
                    <Nav.Link className="a-white" href="/services">Servicios</Nav.Link>
                </Nav.Item>
            )
        }
    }

    logInBtn() {
        if (localStorage.getItem("Token") === null) {
            return (
                <Nav.Item className="hvr-underline-reveal active">
                    <Nav.Link className="a-white" href="/login">Iniciar sesión</Nav.Link>
                </Nav.Item>
            )
        } else {
            return (
                <Nav.Item className="hvr-underline-reveal active">
                    <Nav.Link className="a-white" href="/projects/create">Crear proyecto</Nav.Link>
                </Nav.Item>
            )
        }
    }

    handleLogOut(){
        localStorage.removeItem('Token');
    }

    registerBtn() {
        if (localStorage.getItem("Token") === null) {
            return (
                <Nav.Item className="hvr-underline-reveal active">
                    <Nav.Link className="a-white" href="/register">Regístrate</Nav.Link>
                </Nav.Item>
            )
        } else {
            return (
                <Nav.Item className="hvr-underline-reveal active">
                    <Nav.Link className="a-white" href="/register" onClick={this.handleLogOut}>Cerrar sesión</Nav.Link>
                </Nav.Item>
            )
        }
    }

    render() {
        return (
            <div>
                <Navbar className="color-nav" fixed="top" expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">DesignMatch</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            {this.inicioBtn()}
                            {this.serviciosBtn()}
                            {this.logInBtn()}
                            {this.registerBtn()}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;