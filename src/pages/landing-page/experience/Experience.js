import dayjs from 'dayjs';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import t from 'translator';
import { NumberDisplay } from '../about-me/NumberDisplay';
import { Section } from '../components';
import { SkillProgress } from './SkillProgress';

function getYearsOfExperience({ day, month, year }) {
  const formatted = dayjs(`${year}-${month}-${day}`);
  const months = dayjs().diff(formatted, 'months');

  return (months / 12).toFixed(1);
}

export function ExperienceSection() {
  const professional = getYearsOfExperience({ day: 1, month: 6, year: 2019 });
  const general = getYearsOfExperience({ day: 10, month: 9, year: 2017 });

  return (
    <>
      <Section>
        <Row style={{ marginRight: 0 }} className='experience-section'>
          <Col sm={12}>
            <h2>{t('skills.experience')}</h2>
          </Col>
          <Col sm={12} md={6}>
            <NumberDisplay
              label={t('about.experience.professional')}
              years={professional}
            />
          </Col>
          <Col sm={12} md={6}>
            <NumberDisplay
              label={t('about.experience.general')}
              years={general}
            />
          </Col>
        </Row>
      </Section>
      <Row style={{ marginRight: 0 }}>
        <Col>
          <SkillProgress />
        </Col>
      </Row>
    </>
  );
}
