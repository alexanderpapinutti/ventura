import _ from 'lodash';
import t from 'translator';
import { ServiceCard } from './ServiceCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Section } from '../components';
import DataAnalysis from '../../../assets/images/data-analysis.jpg';
import DataBase from '../../../assets/images/data-base.png';
import Website from '../../../assets/images/website.png';
import CMS from '../../../assets/images/CMS.png';

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
      src: CMS,
      alt: 'PC screen filled with bundled code',
    },
    {
      title: t('skills.dataCollection.title'),
      text: t('skills.dataCollection.text'),
      src: DataAnalysis,
      alt: 'Laptop and paper filled with graphically presented data',
    },
    {
      title: t('skills.database.title'),
      text: t('skills.database.text'),
      src: DataBase,
      alt: 'Cartoon image of a server',
    },
    {
      title: t('skills.webApp.title'),
      text: t('skills.webApp.text'),
      src: Website,
      alt: 'Cartoon image of finger pointing at PC screen',
    },
  ];
}

function ServiceList() {
  return _.map(getServiceList(), (image) => (
    <Col key={image.title} sm={12} md={6} xxl={3}>
      <ServiceCard image={image} />
    </Col>
  ));
}
