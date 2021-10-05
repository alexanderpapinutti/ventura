import _ from 'lodash';
import t from 'translator';
import { ServiceCard } from './ServiceCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Section } from '../components';
import { getLanguage } from '../../../utils';

export function Services() {
  const lang = getLanguage();

  return (
    <div id={'service-list'} className={'justify-content-center p-5'}>
      <Section>
        <Row>
          <Col xs={12} className={'pb-sm-2'}>
            <h2 className={'pb-5 pl-5'}>{t(lang, 'skills.title')}</h2>
          </Col>
        </Row>
      </Section>
      <Row>
        <ServiceList lang={lang} />
      </Row>
    </div>
  );
}

function getServiceList(lang) {
  return [
    {
      id: 1,
      title: t(lang, 'skills.CMS.title'),
      text: t(lang, 'skills.CMS.text'),
    },
    {
      id: 2,
      title: t(lang, 'skills.dataCollection.title'),
      text: t(lang, 'skills.dataCollection.text'),
    },
    {
      id: 3,
      title: t(lang, 'skills.database.title'),
      text: t(lang, 'skills.database.text'),
    },
    {
      id: 4,
      title: t(lang, 'skills.webApp.title'),
      text: t(lang, 'skills.webApp.text'),
    },
  ];
}

function ServiceList({ lang }) {
  return _.map(getServiceList(lang), ({ id, title, text }) => (
    <Col key={id} xs={12} md={6} lg={3}>
      <ServiceCard id={id} title={title} text={text} />
    </Col>
  ));
}
