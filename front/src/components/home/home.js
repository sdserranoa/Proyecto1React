import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col, Card } from 'react-bootstrap'
import champions from  '../../assets/champions.jpg'
import cocacola from '../../assets/coca-cola.jpg'

class Home extends Component {
    render() {
        return (
            <div className="fill-height">
                <Jumbotron className="hm-jumb my-4">
                    <h2 className="display-4">Bienvenido a DesignMatch</h2>
                    <p className="lead">En nuestro sitio web podrá solicitar <br />abiertamente diseños para sus proyectos.</p>
                    <p>
                        <Button variant="primary" size="lg" className="btn-conocer">Learn more</Button>
                    </p>
                </Jumbotron>

                <div>
                    <h3 className="hm-txt">Conoce algunos diseños...</h3>
                </div>

                <Row className="text-centered">
                    <Col className="mb-4" lg={3} md={6}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={champions}></Card.Img>
                            <Card.Body>
                                <Card.Title>Andrea Velasco</Card.Title>
                                <Card.Text>Campaña champions league.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="mb-4" lg={3} md={6}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={cocacola}></Card.Img>
                            <Card.Body>
                                <Card.Title>Andrea Velasco</Card.Title>
                                <Card.Text>Campaña champions league.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="mb-4" lg={3} md={6}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={cocacola}></Card.Img>
                            <Card.Body>
                                <Card.Title>Andrea Velasco</Card.Title>
                                <Card.Text>Campaña champions league.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="mb-4" lg={3} md={6}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={cocacola}></Card.Img>
                            <Card.Body>
                                <Card.Title>Andrea Velasco</Card.Title>
                                <Card.Text>Campaña champions league.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;