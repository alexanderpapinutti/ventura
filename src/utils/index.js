import { useContext } from 'react';
import { LangContext } from '../context';

export function getLanguage() {
  const { lang } = useContext(LangContext);
  const result = localStorage.getItem('language') || lang;

  return result;
}
