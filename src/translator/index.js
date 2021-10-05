import _ from 'lodash';
import translations from './translations';
import { getLanguage } from '../utils';

function translator(label) {
  const lang = getLanguage();
  const missingLabelText = `Missing translation for ${label}`;
  const basePath = label.split('.');
  const translationPath = [...basePath, lang];
  const defaultTranslation = _.get(translations, [...basePath, 'en']);
  const translation = _.get(translations, translationPath);

  if (!translation) {
    console.warn(missingLabelText);
  }

  return translation || defaultTranslation || missingLabelText;
}

export default translator;
