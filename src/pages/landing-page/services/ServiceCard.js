import './service-card.css';
import { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import t from 'translator';
import { LangContext } from '../../../context';

export function ServiceCard({ title, text, id }) {
  const [readMore, setReadMore] = useState(false);
  const { lang } = useContext(LangContext);
  const key = id + 'aadc';

  let textStyle = 'short-text-style';
  if (readMore) {
    textStyle = '';
  }

  return (
    <Card id={id} key={key} className={'shadow-lg p-3 mb-5 bg-white rounded'}>
      <Card.Body>
        <Card.Title className={'title-section'}>
          <h4>{title}</h4>
        </Card.Title>
        <Card.Text className={textStyle}>{text}</Card.Text>
        {!readMore && (
          <Button variant='dark' onClick={setReadMore.bind(this, !readMore)}>
            {t(lang, 'skills.read.more')}
          </Button>
        )}
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
