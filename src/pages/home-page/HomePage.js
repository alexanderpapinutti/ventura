import t from "translator";
import {ColoredContainer} from "cmn-components/ColoredContainer";

import {Section} from "./components";
import {AboutMe} from "./AboutMe";
import {Services} from "./Services";

export function HomePage() {
    return <>
        <Section className={'d-flex align-items-center justify-content-center'}>
            <ColoredContainer><h1>{t('en', 'about.title')}</h1></ColoredContainer>
        </Section>
        <AboutMe/>
        <Services/>
    </>
}