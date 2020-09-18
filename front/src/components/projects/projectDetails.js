import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';

class ProjectDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "hola",
            val: 123,
            desc: "hola"
        }

        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        fetch("http://" + process.env.REACT_APP_IP_ADDRESS + "/projects/" + this.props.match.params.id, {
            method: 'GET',
            headers: {
                'Token': "hola",
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {

            this.setState({ name: data.event_name })
            this.setState({ val: data.event_category })
            this.setState({ desc: data.event_place })
        })
    }

    goBack(){
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <br></br>
                <Row>
                    <Col xs={1}></Col>
                    <Col>
                        <h1>Detalle</h1>
                    </Col>
                </Row>

                <br></br>
                <Row>
                    <Col xs={2}></Col>
                    <Col>
                        <div className="editor border">
                            <Row>
                                <Col>
                                    <h3>Nombre del proyecto:</h3>
                                    <p>{this.state.name}</p>
                                    <hr></hr>
                                    <h3>Valor estimado a pagar:</h3>
                                    <p>{this.state.val}</p>
                                </Col>
                                <Col>
                                    <h3>Descripción:</h3>
                                    <p>{this.state.desc}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Button className="mybtn ml-3" onClick={this.goBack}>Go Back</Button>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={2}></Col>
                </Row>
                
            </div>
        );
    }
}

export default ProjectDetails;          