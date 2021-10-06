import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import t from 'translator';

import { Section } from '../components';
import linkedin from '../../../assets/images/linkedin.png';
import github from '../../../assets/images/github.png';
import cvIcon from '../../../assets/images/cv-icon.svg';
import { Link } from 'react-router-dom';
import { getLanguage } from '../../../utils';

export function AboutMe() {
  const linkedInLink = 'https://www.linkedin.com/in/alexander-papinutti/';
  const gitHubLink = 'https://github.com/alexanderpapinutti';
  return (
    <Section id={'about-me'}>
      <Row>
        <Col xs={12} md={6} className={'pb-sm-2'}>
          <h2>{t('about.aboutMe')}</h2>
          <Link
            to={{ pathname: linkedInLink }}
            target={'_blank'}
            rel='noreferrer'
          >
            <Image
              alt='LinkedIn icon'
              className='flag scalable'
              src={linkedin}
            />
          </Link>
          <Link
            to={{ pathname: gitHubLink }}
            target={'_blank'}
            rel='noreferrer'
          >
            <Image alt='Github icon' className='flag scalable' src={github} />
          </Link>
          <Link
            to={`/files/cv-${getLanguage()}.pdf`}
            target='_blank'
            rel='noreferrer'
            download
          >
            <Image alt='CV Icon' className='flag scalable' src={cvIcon} />
          </Link>
        </Col>
        <Col xs={12} md={6}>
          <p>{t('about.description')}</p>
        </Col>
      </Row>
    </Section>
  );
}
