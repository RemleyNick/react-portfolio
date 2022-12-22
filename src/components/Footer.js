import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm="3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/exercise">Exercise</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs="6" sm="4" className="text-center">
                        <p>
                            Exercise at your own risk! See healthcare provider
                            prior to starting. Better Back Health is not
                            responsible for any harm or injury that may be done.
                        </p>
                    </Col>
                    <Col sm="4" className="text-center">
                        <a
                            role="button"
                            className="btn btn-link"
                            href="tel:+18477274628"
                        >
                            <i className="fa fa-phone" /> 1-847-727-4628
                        </a>
                        <br />
                        <a
                            role="button"
                            className="btn btn-link"
                            href="mailto:remleynick@yahoo.com"
                        >
                            <i className="fa fa-envelope-o" />{" "}
                            remleynick@yahoo.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
