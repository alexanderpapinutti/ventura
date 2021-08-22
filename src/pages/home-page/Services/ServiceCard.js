import './service-card.css';
import {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export function ServiceCard({title, text}) {
    const [readMore, setReadMore] = useState(false);

    let textStyle = 'short-text-style';
    let buttonText = 'Read more';
    if (readMore) {
        textStyle = '';
        buttonText = 'Read less';
    }

    return (
            <Card className={'card m-2'}>
                <Card.Body>
                    <Card.Title className={'title-section'}><h4>{title}</h4></Card.Title>
                    <Card.Text className={textStyle}>{text}</Card.Text>
                    <Button variant="primary" onClick={setReadMore.bind(this, !readMore)}>{buttonText}</Button>
                </Card.Body>
            </Card>
    )
}

ServiceCard.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}