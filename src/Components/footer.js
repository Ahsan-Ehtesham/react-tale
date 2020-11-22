import { React } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


import { Col, Container, Row } from "react-bootstrap";


function Footer1() {
    return (
        <div className="font-small bg-dark text-light pt-5">
            <Container className="text-center text-md-left">
                <Row>
                    <Col md="6">
                        <h5 className="title">Aqua Nature</h5>
                        <p>
                            The existence of liquid water, and to a lesser extent its
                            gaseous and solid forms, on Earth are vital to the existence
                            of life on Earth as we know it. The Earth is located in the
                            habitable zone of the Solar System; if it were slightly
                            closer to or farther from the Sun (about 5%, or about 8
                            million kilometers), the conditions which allow the three
                            forms to be present simultaneously would be far less likely
                           to exist.</p>
                    </Col>
                    <Col md="6" className="text-center">
                        <h5 className="title mb-3">Social Links</h5>
                        <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth className="circleIcon" />
                        <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth className="circleIcon" />
                        <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth className="circleIcon" />
                        <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth className="circleIcon" />
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center p-3">
                <Container fluid>
                    &copy; {new Date().getFullYear()} <a href="!#">Copyright: JAF</a>
                </Container>
            </div>
        </div>
    )
}

export default Footer1;