import { useContext } from 'react';
import { LangContext } from '../context';

export function getLanguage() {
  const { lang } = useContext(LangContext);
  return localStorage.getItem('language') || lang;
}

export function copyToClipboard(link, setAlert, text) {
  navigator.clipboard.writeText(link);

  setAlert({ type: 'success', active: true, text });
}
