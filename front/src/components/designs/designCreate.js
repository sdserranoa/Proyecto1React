import React, { Component } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'

class DesignCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            last: "",
            email: "",
            nameFile:"",
            file: null,
            value: 0,
            redirect: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onLastChange = this.onLastChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onFileChange = this.onFileChange.bind(this)
    }

    onNameChange(e) {
        this.setState({ name: e.target.value })
    }

    onLastChange(e) {
        this.setState({ last: e.target.value })
    }

    onEmailChange(e) {
        this.setState({ email: e.target.value })
    }

    onFileChange(e) {
        this.setState({ file: e.target.files })
    }

    onValChange(e) {
        this.setState({ value: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()

        let project = {
            name_project: this.state.name,
            description: this.state.desc,
            e_value: this.state.val
        }
        
        fetch("http://" + process.env.REACT_APP_IP_ADDRESS + "/projects", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Token': "hola"
            },
            body: JSON.stringify(project)
        }).then(res => {
            if (res.ok) {
                this.setState({ redirect: true })
            }
        })

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
                <br></br>
                <Row>
                    <Col xs={1}></Col>
                    <Col>
                        <h1>Carga tu diseño</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}></Col>
                    <Col>
                        <div className="border newDesign">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label className="col-md-6"><b> Nombre: </b></Form.Label>
                                    <Form.Control type="text" onChange={this.onNameChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="col-md-6"><b> Apellido: </b></Form.Label>
                                    <Form.Control type="text" onChange={this.onLastChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="col-md-6"><b> Email: </b></Form.Label>
                                    <Form.Control type="email" onChange={this.onEmailChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="col-md-6"><b> Imagen: </b></Form.Label>
                                    <Form.File required onChange={this.onFileChange}></Form.File>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="col-md-6"><b> Valor estimado a pagar: </b></Form.Label>
                                    <Form.Control
                                        type="number"
                                        onChange={this.onValChange}
                                        min={0} />
                                </Form.Group>
                                <hr></hr>
                                <Button className="mybtn" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col xs={2}></Col>
                </Row>
            </div>
        );
    }
}

export default DesignCreate;