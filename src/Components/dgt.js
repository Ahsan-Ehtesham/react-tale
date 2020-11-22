import { React } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';


import image1 from './assets/Images/image1.jpg'


function DGT() {
    return (
        <div className="p-5">
            <Fade left>
            <Container>
                <Row>     
                    <Col md="6" className="text-dark text-left">
                        <h2>Protect Nature</h2>
                        <p><i>A page made by React and React-Bootstrap components.</i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce lacus risus, hendrerit ut enim quis, auctor interdum erat.
                        In elementum et odio in suscipit.
                        Proin blandit mi et arcu tristique. Fusce pretium, urna nec sagittis tincidunt,
                        quam leo molestie felis, sit amet faucibus lectus sem in massa. Sed ante leo,
                        laoreet at ex vitae, posuere hendrerit nibh. Nulla facilisi. Etiam egestas
                        eros velit, id aliquet leo viverra vel.
                        Praesent aliquet lobortis nibh, in lobortis augue tempor at.</p>
                    </Col>
                    <Col md="6">
                        <img className="img-fluid" src={image1}/>
                    </Col>
                </Row>
            </Container>
            </Fade>
        </div>
    )
}

export default DGT;