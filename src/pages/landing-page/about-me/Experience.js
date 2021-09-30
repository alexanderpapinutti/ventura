import { useContext, useState } from 'react';
import dayjs from 'dayjs';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import t from 'translator';
import { NumberDisplay } from './NumberDisplay';
import { LangContext } from '../../../context';
import { Drawer } from './Drawer';
import { SkillList } from './SkillList';

function getYearsOfExperience({ day, month, year }) {
  const formatted = dayjs(`${year}-${month}-${day}`);
  const months = dayjs().diff(formatted, 'months');

  return (months / 12).toFixed(1);
}

export function ExperienceSection() {
  const professional = getYearsOfExperience({ day: 1, month: 6, year: 2019 });
  const general = getYearsOfExperience({ day: 10, month: 9, year: 2017 });
  const { lang } = useContext(LangContext);
  const [show, setShow] = useState(false);

  return (
    <>
      <Drawer
        show={show}
        setShow={setShow}
        title={'Technologies I work with and my current level of confidence'}
      >
        <SkillList />
      </Drawer>
      <Row>
        <Col className='d-flex justify-content-end' sm={12}>
          <Button onClick={() => setShow(true)} style={{ background: 'black' }}>
            {t(lang, 'skills.read.more')}
          </Button>
        </Col>
        <Col sm={12} md={6}>
          <NumberDisplay
            label={t(lang, 'about.experience.professional')}
            years={professional}
          />
        </Col>
        <Col sm={12} md={6}>
          <NumberDisplay
            label={t(lang, 'about.experience.general')}
            years={general}
          />
        </Col>
      </Row>
    </>
  );
}
