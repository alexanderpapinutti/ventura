import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Section({ children, className, id }) {
  const sectionProps = {
    className: 'section-padding',
  };

  if (className) {
    sectionProps.className += ` ${className}`;
  }

  if (id) {
    sectionProps.id = id;
  }

  return (
    <Container {...sectionProps}>
      <Row className={'justify-content-md-center'}>
        <Col xs={12} sm={10}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

Section.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  id: PropTypes.string,
};
