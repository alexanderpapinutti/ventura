import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export function ServiceCard({ title, text, id }) {
  const key = id + 'aadc';

  return (
    <Card id={id} key={key} className={'shadow-lg p-3 mb-3 bg-white rounded'}>
      <Card.Body>
        <Card.Title>
          <h4>{title}</h4>
        </Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
};
