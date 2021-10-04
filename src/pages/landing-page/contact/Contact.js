import t from 'translator';
import { useContext } from 'react';
import Image from 'react-bootstrap/Image';

import { AlertContext, LangContext } from '../../../context';
import { copyToClipboard } from '../../../utils';

import gmail from '../../../assets/images/gmail.png';
import phone from '../../../assets/images/phone.png';

export function Contact() {
  const { lang } = useContext(LangContext);
  const { setAlert } = useContext(AlertContext);

  const emailText = 'alexpapinutti@gmail.com';
  const phoneText = '+393498117005';

  return (
    <div
      id={'contact'}
      className={'pb-5 justify-content-center bg-dark text-white'}
    >
      <div className={'p-5'}>
        <div>
          <h2>{t(lang, 'contact.title')}</h2>
          <Image
            onClick={() => copyToClipboard(emailText, setAlert, 'E-mail')}
            className='flag scalable'
            src={gmail}
            style={{ marginLeft: 5 }}
          />
          <Image
            onClick={() =>
              copyToClipboard(
                phoneText,
                setAlert,
                t(lang, 'general.phoneNumber')
              )
            }
            className='flag scalable'
            src={phone}
          />
        </div>
        <div>
          <p className={'pt-2'}>{t(lang, 'contact.email')}</p>
        </div>
      </div>
    </div>
  );
}
