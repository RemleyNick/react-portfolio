import SubHeader from "../components/SubHeader";
import { Container, Col, Row } from "reactstrap";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current="Contact" />
            <Row className="text-center">
                <Col xs="12">
                    <h2>Want Personalized Exercises?</h2>
                    <h5>We're happy to help! Get in touch with us.</h5>
                    <hr />
                </Col>
                <Col md="10">
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;