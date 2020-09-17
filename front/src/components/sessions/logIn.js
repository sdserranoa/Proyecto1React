import React, { Component } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export default class logIn extends Component {

    constructor(props){
        super(props)
        this.state = {
            correo:"",
            password:"",
            redirect: false
        }
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

        fetch(process.env.REACT_APP_IP_ADDRESS,{
            method: "POST",
            
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <div>
                            <Form className="signin">
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
