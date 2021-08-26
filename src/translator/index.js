import _ from 'lodash';
import translations from "./translations";

function translator(language, label) {
    const missingLabelText = `Missing translation for ${label}`;
    const basePath = label.split('.');
    const translationPath = [...basePath, language];
    const defaultTranslation = _.get(translations, [...basePath, 'en'])
    const translation = _.get(translations, translationPath);

    if(!translation) {
        console.warn(missingLabelText);
    }

    return translation || defaultTranslation || missingLabelText;
}

export default translator;