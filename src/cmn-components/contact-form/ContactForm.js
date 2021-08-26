import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import t from 'translator';
import Button from "react-bootstrap/Button";

export function ContactForm() {
    return (
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                <Col sm={12} md={6}>
                    <Form.Label>{t('en','contact.details.firstName')}</Form.Label>
                    <Form.Control type="email" placeholder={t('en', 'contact.details.firstName')}/>
                </Col>
                <Col sm={12} md={6}>
                    <Form.Label>{t('en', 'contact.details.lastName')}</Form.Label>
                    <Form.Control type="text" placeholder={t('en', 'contact.details.lastName')}/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>{t('en', 'contact.details.email')}</Form.Label>
                <Form.Control type="email" placeholder={t('en', 'contact.details.email')}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{t('en', 'contact.details.comments')}</Form.Label>
                <Form.Control as="textarea" rows={3}/>
            </Form.Group>
            <Button variant="light" type="submit">
                {t('en', 'contact.submit')}
            </Button>
        </Form>
    )
}