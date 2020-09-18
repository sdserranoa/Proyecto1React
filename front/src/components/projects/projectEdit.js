import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class ProjectEdit extends Component {
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

    componentDidMount() {

        
/*
        fetch('http://' + process.env.REACT_APP_IP_ADDRESS + "/projects/"+this.props.match.params.id, {
            method: 'GET',
            headers: {
                'Token': "hola",
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {*/

            this.setState({ name: "hola" })
            this.setState({ desc: "data.event_category" })
            this.setState({ val: 132 })
        //})
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

        fetch("http://" + process.env.REACT_APP_IP_ADDRESS + "/projects/", {
            method: "PATCH",
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
            return <Redirect to="/projects" />
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
                        <h1 className="ed-title">Modificar información</h1>
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
                                    <Form.Control type="text" onChange={this.onNameChange} defaultValue={this.state.name}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="col-md-6"><b> Descripción: </b></Form.Label>
                                    <Form.Control type="text" as="textarea" rows="3" onChange={this.onDescChange} defaultValue={this.state.desc}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="col-md-6"><b> Valor estimado a pagar: </b></Form.Label>
                                    <Form.Control
                                        type="number"
                                        onChange={this.onValChange}
                                        min={0}
                                        value={this.state.val} />
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

export default ProjectEdit;