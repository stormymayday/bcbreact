import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import slideOne from '../images/slideOne.jpg';
import slideTwo from '../images/slideTwo.jpg';


export const Farming = () => {
    return (
        <div style={{background: 'white', 'padding-top': '4em', 'padding-bottom': '4em'}} id='farming'>
            <Container>

                <h2 style={{'color': 'black', 'margin-bottom': '3rem'}}>Grown, Picked, and Processed by Claudia & Juan</h2>

                <Row>

                        <Col md>

                            <Card border="light">

                                <Card.Img variant="top" src={slideOne} style={{'height': '20rem'}} />
                                <Card.Body>
                                <Card.Title>Farmer Harvest</Card.Title>
                                <Card.Text>
                                    Picked by: Geremias Vasquez<br />
                                    Picked Cherries Weight: 100.00 Lbs<br />
                                    Date picked: 2020-01-14<br />
                                    Variety: Catuai Rojo
                                </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col md>

                            <Card border="light">
                                <Card.Img variant="top" src={slideTwo} style={{'height': '20rem'}} />
                                <Card.Body>
                                <Card.Title>Farmer De-Pulping</Card.Title>
                                <Card.Text>
                                    Total Absorbed Weight: 5223 Lbs<br />
                                    Total De-pulped Weight: 2372 Lbs<br />
                                    De-pulped between: 2020-01-14 and 2020-02-15
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        
                        </Col>

                </Row>

            </Container>
        </div>
    );
}

export default Farming;