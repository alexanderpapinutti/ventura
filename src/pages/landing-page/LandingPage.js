import { useContext } from 'react';
import Image from 'react-bootstrap/Image';
import t from 'translator';

import { AboutMe } from './about-me';
import { Contact } from './contact';
import { Services } from './services';

import { LangContext } from '../../context';
import Logo from '../../assets/images/logo512.png';

export function LandingPage() {
  const { lang } = useContext(LangContext);

  return (
    <>
      <div className={'d-flex align-items-center justify-content-center pt-5'}>
        <Image
          src={Logo}
          style={{ height: 120, borderRadius: '50%', marginRight: 20 }}
        />
        <h1 className={'text-center'}>{t(lang, 'about.title')}</h1>
      </div>
      <AboutMe />
      <Services />
      <Contact />
    </>
  );
}
