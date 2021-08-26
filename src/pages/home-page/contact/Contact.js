import {ContactForm} from "cmn-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import t from 'translator';

export function Contact() {
    return <Row className={'p-5 justify-content-center bg-dark text-white'}>
        <Col sm={12} md={6}>
            <h2>{t('en', 'contact.details.title')}</h2>
            <p className={'pt-2'}>{t('en', 'contact.details.description')}</p>
        </Col>
        <Col className={'pt-sm-0 pt-md-5 pl-md-5'} sm={12} md={6}>
            <ContactForm/>
        </Col>
    </Row>
}