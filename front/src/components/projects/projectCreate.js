import React, { Component } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom'

class ProjectCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            desc: "",
            val: 0,
            redirect: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onDescChange = this.onDescChange.bind(this)
        this.onValChange = this.onValChange.bind(this)
    }

    onNameChange(e) {
        this.setState({ name: e.target.value })
    }

    onDescChange(e) {
        this.setState({ desc: e.target.value })
    }

    onValChange(e) {
        this.setState({ val: e.target.value })
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
                        <h1 className="ed-title">Crea tu proyecto</h1>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs={2}></Col>
                    <Col>
                        <div className="border editor">
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label className="col-md-6"><b> Nombre del proyecto: </b></Form.Label>
                                    <Form.Control type="text" onChange={this.onNameChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="col-md-6"><b> Descripción: </b></Form.Label>
                                    <Form.Control type="text" as="textarea" rows="3" onChange={this.onDescChange}></Form.Control>
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

export default ProjectCreate;