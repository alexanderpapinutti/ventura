import Image from 'react-bootstrap/Image';
import t from 'translator';

import { AboutMe } from './about-me';
import { Contact } from './contact';
import { Services } from './services';
import { ExperienceSection } from './experience';

import Logo from '../../assets/images/logo150.png';

export function LandingPage() {
  return (
    <>
      <div
        className={
          'd-flex flex-column align-items-center justify-content-center pt-5'
        }
      >
        <h1 className={'text-center'}>{t('about.title')}</h1>
        <Image
          alt='Logo'
          src={Logo}
          style={{
            height: 150,
            width: 150,
            borderRadius: '50%',
            marginRight: 20,
          }}
        />
      </div>
      <AboutMe />
      <ExperienceSection />
      <Services />
      <Contact />
    </>
  );
}
