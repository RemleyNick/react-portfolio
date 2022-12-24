import { Col, Row, Container } from "reactstrap";

const ProgramDetail = () => {
    return (
        <Container>
            <Row>
                <Col lg='4' className="mt-4">
                    <h2>A Better Way of Living.</h2>
                </Col>
                <Col lg='8' className="mb-5 mt-5">
                    <Row className="row-cols-1 row-cols-md-2">
                        <Col>
                            <i class="fa fa-heart fa-lg mb-1"></i>
                            <h2 class="h5">Live Longer and Better</h2>
                            <p class="mb-0">Imagine your life with no pain. You will be able to do all the activities you enjoy, feeling better physically and mentally.</p>
                        </Col>
                        <Col>
                            <i class="fa fa-bar-chart fa-lg mb-1"></i>
                            <h2 class="h5">Scaled for Pain</h2>
                            <p class="mb-0">We all have good and bad days. These exercises will be scaled based on how your pain levels are on that day!</p>
                        </Col>
                        <Col className="mt-2">
                            <i class="fa fa-hourglass-end fa-lg mb-1"></i>
                            <h2 class="h5">Short and Sweet</h2>
                            <p class="mb-0">We know you are busy. That is why we designed this exercise routine to only take 10-20 minutes!</p>
                        </Col>
                        <Col className="mt-2">
                            <i class="fa fa-credit-card fa-lg mb-1"></i>
                            <h2 class="h5">Completely Free</h2>
                            <p class="mb-0">Cost should not be a barrier to living a normal life. With Better Back Health, you won't pay a single cent!</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ProgramDetail;