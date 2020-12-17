import React from 'react';

// Bootstrap components
import Carousel from 'react-bootstrap/Carousel'

// Images
import slideOne from '../images/slideOne.jpg';
import slideTwo from '../images/slideTwo.jpg';

export default function Slider() {
    return(
        <>
            <Carousel>

                <Carousel.Item interval={1000} style={{'height': '100vh'}}>
                    <img
                    className="d-block w-100"
                    src={slideOne}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Your coffee might be opaque, but how it got to you should be transparent</h3>
                        <p>Thank you for being a coffee pioneer! You are one of the first who have this level of visibility at the wave of your hand. The link that took you here is tied to a specific batch of roasted coffee, and you can see some highlights of its origin and how it got to you, recorded using blockchain technology.</p>

                        <p>We invite you to explore this site and share your feedback in the form below.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={500} style={{'height': '100vh'}}>
                    <img
                    className="d-block w-100"
                    src={slideTwo}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Your coffee might be opaque, but how it got to you should be transparent</h3>
                        <p>Thank you for being a coffee pioneer! You are one of the first who have this level of visibility at the wave of your hand. The link that took you here is tied to a specific batch of roasted coffee, and you can see some highlights of its origin and how it got to you, recorded using blockchain technology.</p>

                        <p>We invite you to explore this site and share your feedback in the form below.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    );
}