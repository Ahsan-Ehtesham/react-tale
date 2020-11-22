import { React } from "react";

import { Container, Row, Col } from "react-bootstrap";



function DGT() {
    return (
        <div className="p-5">
            <Container>
                <Row>
                    <Col className="text-dark text-left m-auto">
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
                    <Col>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9h_-vBYui_U" title="video" frameborder="0" loop autoplay muted></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DGT;