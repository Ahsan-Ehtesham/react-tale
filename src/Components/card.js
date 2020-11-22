import React from 'react';

import { Card, Button, CardDeck, Container } from "react-bootstrap";

import card1 from './assets/Images/card-1.jpg'
import card2 from './assets/Images/card-2.jpg'
import card3 from './assets/Images/card-3.jpg'



function Card1() {
    return (
        <div className="card-cont p-5">
            <Container>
                <CardDeck>
                    <Card style={{ width: '18rem' }} bg="dark" text="white" className="card">
                        <Card.Img className="img-fluid" variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title>Shrubland</Card.Title>
                            <Card.Text>
                                Shrubland, scrubland, scrub, brush, or bush is a plant 
                                community characterized by vegetation dominated by shrubs</Card.Text>
                            <Button variant="light">Learn More</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" text="white" className="card">
                        <Card.Img className="img-fluid" variant="top" src={card2} />
                        <Card.Body>
                            <Card.Title>Stream bed</Card.Title>
                            <Card.Text>
                            A streambed is the channel bottom of a stream or river, 
                            the physical confine of the normal water flow.</Card.Text>
                            <Button variant="light">Learn More</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} bg="dark" text="white" className="card">
                        <Card.Img className="img-fluid" variant="top" src={card3} />
                        <Card.Body>
                            <Card.Title>Sand Area</Card.Title>
                            <Card.Text>
                            coast area. calm body of water. cove beside mountains. 
                            flamigo on body of water. silhouette of mountain and sea view.</Card.Text>
                            <Button variant="light">Learn More</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    )
}

export default Card1;