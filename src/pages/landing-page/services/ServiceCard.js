import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export function ServiceCard({ image }) {
  const { title, text, id, src, alt } = image;
  const key = id + 'aadc';

  return (
    <Card key={key} className={'shadow-lg p-3 mb-3 bg-white rounded'}>
      <Card.Img
        alt={alt}
        variant='top'
        src={src}
        style={{ height: 200, objectFit: 'cover' }}
      />
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
  image: PropTypes.object,
};
