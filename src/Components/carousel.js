import React from "react";

import { Carousel, Container } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

import image1 from "./assets/Images/carousel-1.jpg";
import image2 from "./assets/Images/carousel-2.jpg";
import image3 from "./assets/Images/carousel-3.jpg";


function Carousel1() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-flex w-100 img-fluid"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-flex w-100 img-fluid"
                        src={image2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-flex w-100 img-fluid"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Container>
                <Fade right>
                    <p className="text-center mt-4">Water is an inorganic, transparent,
                    tasteless, odorless, and nearly colorless chemical substance, which
                    is the main constituent of Earth's hydrosphere and the fluids of all
                    known living organisms. It is vital for all known forms of life,
                    even though it provides no calories or organic nutrients. Water covers 71% of
                    the Earth's surface, mostly in seas and oceans. Small portions of water
                    occur as groundwater (1.7%), in the glaciers and the ice caps of Antarctica
                    and Greenland (1.7%), and in the air as vapor, clouds
                (formed of ice and liquid water suspended in air), and precipitation (0.001%).</p>
                </Fade>
            </Container>
        </div>
    )
}

export default Carousel1;