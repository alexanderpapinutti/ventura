import { useContext } from 'react';
import t from "translator";
import langContext from '../../context';

import {AboutMe} from "./AboutMe";
import { Contact } from './contact';
import {Services} from "./services";

export function HomePage() {
  const {lang} = useContext(langContext);
  
  return <>
      <div id={'home'} className={'d-flex align-items-center justify-content-center pt-5'}>
          <h1 className={'text-center'}>{t(lang, 'about.title')}</h1>
      </div>
      <AboutMe/>
      <Services/>
      <Contact/>
  </>
}