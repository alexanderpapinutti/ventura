import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Section({children, className}) {
    let defaultClassName = 'section-height';
    if(className) {
        defaultClassName = `section-height ${className}`;
    }

    return (
        <Container className={defaultClassName}>
            <Row className={"justify-content-md-center"}>
                <Col xs={12} sm={10} md={8}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

Section.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
}