import t from "translator";

import {AboutMe} from "./AboutMe";
import {Services} from "./services";
import {Contact} from "./contact";

export function HomePage() {
    return <>
        <div id={'home'} className={'d-flex align-items-center justify-content-center pt-5'}>
            <h1 className={'text-center'}>{t('en', 'about.title')}</h1>
        </div>
        <AboutMe/>
        <Services/>
        <Contact/>
    </>
}