import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import t from "translator";

import {NumberDisplay, Section} from "./components";
import dayjs from "dayjs";
import { useContext } from 'react';
import langContext from '../../context';

function getYearsOfExperience({day, month, year}) {
    const formatted = dayjs(`${year}-${month}-${day}`);
    const months = dayjs().diff(formatted, 'months');
    return (months / 12).toFixed(1);
}

function YearsOfWork() {
    const professional = getYearsOfExperience({day: 1, month: 6, year: 2019});
    const general = getYearsOfExperience({day: 10, month: 9, year: 2017});
    const {lang} = useContext(langContext);
    
    return <Row>
        <Col md={12} lg={6}>
            <NumberDisplay label={t(lang, 'about.experience.professional')} years={professional}/>
        </Col>
        <Col md={12} lg={6}>
            <NumberDisplay label={t(lang, 'about.experience.general')} years={general}/>
        </Col>
    </Row>
}

export function AboutMe() {
  const {lang} = useContext(langContext);

  return (
      <Section id={'about-me'}>
          <Row>
              <Col xs={12} md={6} className={'pb-sm-2'}>
                  <h2>{t(lang, 'about.aboutMe')}</h2>
              </Col>
              <Col xs={12} md={6}>
                  <p>{t(lang, 'about.description')}</p>
              </Col>
              <Col xs={12}>
                  <YearsOfWork/>
              </Col>
          </Row>
      </Section>
  )
}