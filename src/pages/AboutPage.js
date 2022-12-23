import SubHeader from "../components/SubHeader";
import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import ProgramDetail from "../features/ProgramDetail";

const AboutPage = () => {
    return (
        <Container>
            <SubHeader current="About" />
            <Row className="row-content">
                <Col sm="6">
                    <h3>The Mission</h3>
                    <p>
                        Exercise can be time consuming and gym memberships can
                        be expensive. If those barriers are not big enough, how
                        about the hurdle of knowing which exercises to perform
                        and how hard to push it? Our goal is to minimize those
                        barriers and have you taking steps forward towards a
                        pain-free you! Play an active role in reducing your
                        short and long-term pain with these quick exercises,
                        customized based on your daily pain rating.
                    </p>
                </Col>
                <Col sm="6">
                    <Card>
                        <CardHeader className="card-header text-white">
                            <h3>Back Pain Facts</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Pain in Life - </dt>
                                <dd className="col-6">
                                    8 out of 10 Americans will experience back pain in their lives
                                </dd>
                                <dt className="col-6">Pain today - </dt>
                                <dd className="col-6">
                                    3 out of 10 Americans hurt right now
                                </dd>
                                <dt className="col-6">Surgery - </dt>
                                <dd className="col-6">
                                    Half a million back surgeries a year in U.S
                                </dd>
                                <dt className="col-6">Expensive - </dt>
                                <dd className="col-6">
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
