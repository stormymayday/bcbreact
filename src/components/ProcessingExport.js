import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import slideOne from '../images/slideOne.jpg';
import slideTwo from '../images/slideTwo.jpg';


export const ProcessingExport = () => {
    return (
        <div style={{'padding-top': '4em', 'padding-bottom': '4em'}} id='processing-export'>
            <Container>

                <h2 style={{'margin-bottom': '3rem'}}>Processed and Exported by Catracha Coffee</h2>

                <Row>

                        <Col lg>

                            <Card border="light">
                                <Card.Img variant="top" src={slideOne} style={{'height': '20rem'}} />
                                <Card.Body>
                                <Card.Title>Catracha Coffee</Card.Title>
                            <Card.Text>
                                A social enterprise dedicated to accessing the specialty coffee market for coffee farmers in Santa Elena, La Paz, Honduras.
                            </Card.Text>
                            </Card.Body>
                            </Card>

                        </Col>

                        <Col lg>

                            <Card border="light">
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

                            <Card border="light">
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