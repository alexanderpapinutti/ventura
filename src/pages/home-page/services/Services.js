import _ from 'lodash';
import t from 'translator';
import {ServiceCard} from "./ServiceCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LangContext from '../../../context';
import { useContext } from 'react';

const serviceList = (lang) => {
  return [
    {title: t(lang, 'skills.CMS.title'), text: t(lang, 'skills.CMS.text')},
    {title: t(lang, 'skills.dataCollection.title'), text: t(lang, 'skills.dataCollection.text')},
    {title: t(lang, 'skills.database.title'), text: t(lang, 'skills.database.text')},
    {title: t(lang, 'skills.webApp.title'), text: t(lang, 'skills.webApp.text')},
    {title: t(lang, 'skills.websites.title'), text: t(lang, 'skills.websites.text')}
  ]
};

export const Services = function Services() {
  const {lang} = useContext(LangContext);

  return (
      <div id={'service-list'} className={'justify-content-center p-5'}>
              <h2 className={'pb-5'}>{t(lang, 'skills.title')}</h2>
          <Row>
          {_.map(serviceList(lang), service =>
              <Col xs={12} md={6} lg={4}>
                  <ServiceCard
                      key={service.title}
                      title={service.title}
                      text={service.text}
                  />
              </Col>
          )}
          </Row>
      </div>
  )
}
