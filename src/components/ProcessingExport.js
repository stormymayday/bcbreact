import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import slideOne from '../images/slideOne.jpg';
import slideTwo from '../images/slideTwo.jpg';

import './ProcessingExport.css';


export const ProcessingExport = () => {
    return (
        <div className="processing-section-bg" style={{'padding-top': '4em', 'padding-bottom': '4em'}} id='processing-export'>
            <Container>

                <h2 style={{color: 'white'}}>Processed and Exported by Catracha Coffee</h2>
                <p style={{color: 'white'}}>A social enterprise dedicated to accessing the specialty coffee market for coffee farmers in Santa Elena, La Paz, Honduras.</p>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <Button variant="outline-light" size="lg" block style={{'margin-bottom': '2rem'}}>LEARN MORE</Button>
                    </Col>
                </Row>

                <Row>

                        <Col lg>

                            <Card border="light" text='light' border='light' style={{'background-color': 'transparent'}}>
                                <Card.Img variant="top" src={slideOne} style={{'height': '20rem'}} />
                                <Card.Body>
                                <Card.Title>Catracha Intake Parchment</Card.Title>
                            <Card.Text>
                                Picked by: Geremias Vasquez<br />
                                Picked Cherries Weight: 100.00 Lbs<br />
                                Date picked: 2020-01-14<br />
                                Variety: Catuai Rojo
                            </Card.Text>
                            </Card.Body>
                            </Card>

                        </Col>

                        <Col lg>

                            <Card border="light" text='light' border='light' style={{'background-color': 'transparent'}}>
                                <Card.Img variant="top" src={slideOne} style={{'height': '20rem'}} />
                                <Card.Body>
                                <Card.Title>Milling</Card.Title>
                            <Card.Text>
                                Picked by: Geremias Vasquez<br />
                                Picked Cherries Weight: 100.00 Lbs<br />
                                Date picked: 2020-01-14<br />
                                Variety: Catuai Rojo
                            </Card.Text>
                            </Card.Body>
                            </Card>

                        </Col>

                </Row>

            </Container>
        </div>
    );
}

export default ProcessingExport;