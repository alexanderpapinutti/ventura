import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import t from "translator";
import {ColoredContainer} from "cmn-components/ColoredContainer";

import {NumberDisplay, Section} from "./components";
import dayjs from "dayjs";

function getYearsOfExperience({day, month, year}) {
    const formatted = dayjs(`${year}-${month}-${day}`);
    const months = dayjs().diff(formatted, 'months');
    return (months / 12).toFixed(1);
}

function YearsOfWork() {
    const professional = getYearsOfExperience({day: 1, month: 6, year: 2019});
    const general = getYearsOfExperience({day: 10, month: 9, year: 2017});

    return <Row>
        <Col md={12} lg={6}>
            <NumberDisplay label={t('en', 'about.experience.professional')} years={professional}/>
        </Col>
        <Col md={12} lg={6}>
            <NumberDisplay label={t('en', 'about.experience.general')} years={general}/>
        </Col>
    </Row>
}

export function AboutMe() {
    return (
        <Section>
            <Row>
                <Col xs={12} md={6} className={'pb-sm-2'}>
                    <ColoredContainer>
                        <h2>{t('en', 'about.aboutMe')}</h2>
                    </ColoredContainer>
                </Col>
                <Col xs={12} md={6}>
                    <ColoredContainer>
                        <p>{t('en', 'about.description')}</p>
                    </ColoredContainer>
                </Col>
                <Col xs={12}>
                    <ColoredContainer>
                        <YearsOfWork/>
                    </ColoredContainer>
                </Col>
            </Row>
        </Section>
    )
}