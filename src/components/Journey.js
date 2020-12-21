import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import slideOne from '../images/slideOne.jpg';
import slideTwo from '../images/slideTwo.jpg';


export const Journey = () => {
    return (
        <div style={{'padding-top': '4em', 'padding-bottom': '4em'}} id='journey'>
            <Container>

                <h2 style={{'margin-bottom': '3rem'}}>Journey Highlights</h2>

                <Row>

                        <Col lg>
                            <Card border="light">
                                <Card.Img variant="top" src={slideOne} style={{'height': '20rem'}} />
                                <Card.Body>
                                <Card.Title>Puerto Cortés Green Export</Card.Title>
                                <Card.Text>
                                    Exported From: Puerto Cortes, Cortes, Honduras<br />
                                    Date: 2020-07-10T14:02<br />
                                    Weight: 760 Lbs
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg>
                            <Card border="light">
                                <Card.Img variant="top" src={slideOne} style={{'height': '20rem'}} />
                                <Card.Body>
                                <Card.Title>Port of Oakland Green Import</Card.Title>
                                <Card.Text>
                                    Imported At: Oakland, California, United States<br />
                                    Date: 2020-08-20T15:24
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg>
                            <Card border="light">
                                <Card.Img variant="top" src={slideOne} style={{'height': '20rem'}} />
                                <Card.Body>
                                <Card.Title>QC Intake Green</Card.Title>
                                <Card.Text>
                                    Roaster Received in: Denver, Colorado, United States<br />
                                    Date: 2020-10-02T00:36<br />
                                    Current Weight Remaining: 225 Lbs<br />
                                    Received by: Maxwell
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                </Row>

            </Container>
        </div>
    );
}

export default Journey;