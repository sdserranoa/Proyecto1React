import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nombreEmpresa: "",
            correo: "",
            password: "",
            passwordConf: "",
            redirect: false,
            validated: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onCompanyChange = this.onCompanyChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onPasswordConfChange = this.onPasswordConfChange.bind(this)
    }

    onCompanyChange(e) {
        this.setState({ nombreEmpresa: e.target.value })
    }

    onEmailChange(e) {
        this.setState({ correo: e.target.value })
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value })
    }

    onPasswordConfChange(e) {
        this.setState({ passwordConf: e.target.value })
    }

    handleSubmit(e) {
        
        e.preventDefault();

        let registration = {
            "company": this.state.nombreEmpresa,
            "email": this.state.correo,
            "password": this.state.password,
            "password_confirmation": this.state.passwordConf
        }

        fetch("http://"+process.env.REACT_APP_IP_ADDRESS+"/users",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registration)
        }).then(res => {
            if (res.ok) {
                this.setState({ redirect: true })
            }
        })

        /*
        console.log(this.state.validated)
        let form = e.currentTarget
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        }

        this.setState({validated: true},()=>{
            console.log(this.state.validated)
        })
        */
    }

    redirect() {
        if (this.state.redirect) {
            return <Redirect to="/login" />
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
                        <div id="first">
                            <div className="signup">
                                <div className="logo mb-3">
                                    <Col className="text-cetered" md={12}>
                                        <h1>Registro</h1>
                                    </Col>
                                </div>
                                <Form validated={this.validated} onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Nombre empresa</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Nombre de la empresa"
                                            onChange={this.onCompanyChange} />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Correo electronico</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="Correo electronico"
                                            onChange={this.onEmailChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder="Contraseña"
                                            onChange={this.onPasswordChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Confirmar Contraseña</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder="Confirmar ontraseña"
                                            onChange={this.onPasswordConfChange} />
                                    </Form.Group>
                                    <Col className="text-center" md={12}>
                                        <Button className="btn mybtn btn-block" type="submit">
                                            Reistrarme
                                        </Button>
                                    </Col>
                                </Form>
                            </div>

                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Register;