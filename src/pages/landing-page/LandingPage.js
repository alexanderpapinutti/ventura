import { useContext } from 'react';
import t from 'translator';

import { AboutMe } from './about-me';
import { Contact } from './contact';
import { Services } from './services';

import { LangContext } from '../../context';

export function LandingPage() {
  const { lang } = useContext(LangContext);

  return (
    <>
      <div className={'d-flex align-items-center justify-content-center pt-5'}>
        <h1 className={'text-center'}>{t(lang, 'about.title')}</h1>
      </div>
      <AboutMe />
      <Services />
      <Contact />
    </>
  );
}
