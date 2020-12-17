import React from 'react';

// Bootstrap components
import Container from 'react-bootstrap/Container';

import Slider from './Slider';

export const Hero = () => {
    return (
        <div style={{}} id='hero'>
            <Container fluid>

                {/* <h2 style={{color: 'white'}}>Hero</h2> */}
                <Slider />

            </Container>
        </div>
    );
}

export default Hero;