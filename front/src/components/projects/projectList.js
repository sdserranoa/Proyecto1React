import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap'

class ProjectList extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        fetch("http://" + process.env.REACT_APP_IP_ADDRESS + "/sessions", {
            method: 'GET',
            headers: {
                'Token': localStorage.getItem("Token"),
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            this.setState({ events: data })
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Mis proyectos</h1>
                </div>
                <Accordion className="md-accordion accordion-blocks" id="accordionEx78" role="tablist"
                    aria-multiselectable="true" style={{ paddingTop: "1.5em" }}>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click me!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Click me!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );
    }
}

export default ProjectList;