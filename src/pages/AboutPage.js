import SubHeader from "../components/SubHeader";
import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import ProgramDetail from "../features/ProgramDetail";

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current="About" />
            <Row className="row-content">
                <Col sm="6">
                    <h2>The Mission</h2>
                    <p>
                    Regular exercise is important for overall health, but it can be difficult to fit into a busy schedule or afford pricey gym memberships. Additionally, it can be challenging to know which exercises are most effective and how much to push yourself. At Better Back Health, we strive to eliminate these barriers and help you achieve a pain-free lifestyle. Our tailored exercise program is designed to help you reduce short and long-term pain through quick, targeted exercises customized to your daily pain rating. Take an active role in your pain management and start making progress towards a healthier you.
                    </p>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardHeader className="card-header text-white">
                            <h3>Back Pain Facts</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-4">Pain in Life - </dt>
                                <dd className="col-8">
                                    8 out of 10 Americans will experience back pain in their lives
                                </dd>
                                <dt className="col-4">Pain today - </dt>
                                <dd className="col-8">
                                    3 out of 10 Americans hurt right now
                                </dd>
                                <dt className="col-4">Surgery - </dt>
                                <dd className="col-8">
                                    Half a million back surgeries a year in U.S
                                </dd>
                                <dt className="col-4">Expensive - </dt>
                                <dd className="col-8">
                                    $12 billion/yr and 6th most costly condition
                                    in U.S
                                </dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p>
                                    " To anyone living in persistent pain: it is
                                    possible to overcome chronic pain. You do
                                    not have to learn to live with it, or manage
                                    it. You can treat it and change it. No
                                    matter how out of reach this may seem, know
                                    that it is true. ‘You can if you think you
                                    can.' "
                                </p>
                                <footer className="blockquote-footer">
                                Adrianne Carley, RN, MSN{" "}
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ProgramDetail />
        </Container>
    );
};

export default AboutPage;
