import _ from 'lodash';
import t from 'translator';
import { ServiceCard } from './ServiceCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Section } from '../components';

export function Services() {
  return (
    <div id={'service-list'} className={'justify-content-center p-5'}>
      <Section>
        <Row>
          <Col xs={12} className={'pb-sm-2'}>
            <h2 className={'pb-5 pl-5'}>{t('skills.title')}</h2>
          </Col>
        </Row>
      </Section>
      <Row>
        <ServiceList />
      </Row>
    </div>
  );
}

function getServiceList() {
  return [
    {
      title: t('skills.CMS.title'),
      text: t('skills.CMS.text'),
    },
    {
      title: t('skills.dataCollection.title'),
      text: t('skills.dataCollection.text'),
    },
    {
      title: t('skills.database.title'),
      text: t('skills.database.text'),
    },
    {
      title: t('skills.webApp.title'),
      text: t('skills.webApp.text'),
    },
  ];
}

function ServiceList() {
  return _.map(getServiceList(), ({ title, text }) => (
    <Col key={title} sm={12} md={6}>
      <ServiceCard title={title} text={text} />
    </Col>
  ));
}
