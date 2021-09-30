import { useContext } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import t from 'translator';

import { Section } from '../components';
import { LangContext, AlertContext } from '../../../context';
import linkedin from '../../../assets/images/linkedin.png';
import github from '../../../assets/images/github.png';
import { copyToClipboard } from '../../../utils';
import { ExperienceSection } from './Experience';

export function AboutMe() {
  const { lang } = useContext(LangContext);
  const { setAlert } = useContext(AlertContext);

  const linkedInLink = 'https://www.linkedin.com/in/alexander-papinutti/';
  const gitHubLink = 'https://github.com/alexanderpapinutti';

  return (
    <Section id={'about-me'}>
      <Row>
        <Col xs={12} md={6} className={'pb-sm-2'}>
          <h2>{t(lang, 'about.aboutMe')}</h2>
          <Image
            onClick={() =>
              copyToClipboard(linkedInLink, setAlert, 'LinkedIn link')
            }
            className='flag scalable'
            src={linkedin}
          />
          <Image
            onClick={() => copyToClipboard(gitHubLink, setAlert, 'Github link')}
            className='flag scalable'
            src={github}
          />{' '}
        </Col>
        <Col xs={12} md={6}>
          <p>{t(lang, 'about.description')}</p>
        </Col>
        <Col xs={12}>
          <ExperienceSection />
        </Col>
      </Row>
    </Section>
  );
}
