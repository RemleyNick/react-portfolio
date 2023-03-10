import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SubHeader = ({ current }) => {
    return (
        <Row className='site-subheader'>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{current}</BreadcrumbItem>
                </Breadcrumb>
                <hr />
            </Col>
        </Row>
    );
};

export default SubHeader;
