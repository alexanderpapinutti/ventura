import { useContext } from 'react';
import { LangContext } from '../context';

export function getLanguage() {
  const { lang } = useContext(LangContext);
  const result = localStorage.getItem('language') || lang;
  console.log(result);
  return result;
}

export function copyToClipboard(link, setAlert, text) {
  navigator.clipboard.writeText(link);

  setAlert({ type: 'success', active: true, text });
}
