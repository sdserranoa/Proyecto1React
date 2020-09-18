import React, { Component } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

export default class logIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            correo: "",
            password: "",
            redirect: false
        }

        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onEmailChange(e) {
        this.state({ correo: e.target.value })
    }

    onPasswordChange(e) {
        this.state({ password: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()

        let login = {
            email: this.state.correo,
            password: this.state.password
        }

        console.log(process.env.REACT_APP_IP_ADDRESS)

        
        fetch("http://" + process.env.REACT_APP_IP_ADDRESS + "/sessions", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
        

        this.setState({ redirect: true })


    }

    redirect() {
        if (this.state.redirect) {
            return <Redirect to="/projects" />
        } else {
            return <div></div>
        }
    }

    render() {
        return (
            <div>
                {this.redirect()}
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <div>
                            <Form className="signin" onSubmit={this.handleSubmit}>
                                <div className="logo mb-3">
                                    <h1 className="title">Iniciar sesión</h1>
                                </div>
                                <Form.Group>
                                    <Form.Label>Correo Electronico</Form.Label>
                                    <Form.Control type="email" placeholder="Correo" onChange={this.onEmailChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Contraseña" onChange={this.onPasswordChange}></Form.Control>
                                </Form.Group>
                                <Col className="text-center" md={12}>
                                    <Button className="btn mybtn btn-block" type="submit">
                                        Iniciar sesion
                                        </Button>
                                </Col>
                            </Form>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </div>
        )
    }
}
