import t from 'translator';
import { useContext } from 'react';
import Image from 'react-bootstrap/Image';

import { AlertContext } from '../../../context';
import { Section } from '../components';

import gmail from '../../../assets/images/gmail.png';

export function copyToClipboard(link, setAlert, text) {
  navigator.clipboard.writeText(link);

  setAlert({ type: 'success', active: true, text });
}

export function Contact() {
  const { setAlert } = useContext(AlertContext);

  const emailText = 'alexpapinutti@gmail.com';

  return (
    <div
      id={'contact'}
      className={'pb-5 justify-content-center bg-dark text-white'}
    >
      <Section>
        <div>
          <h2>{t('contact.title')}</h2>
          <Image
            alt='Gmail icon'
            onClick={() => copyToClipboard(emailText, setAlert, 'E-mail')}
            className='flag scalable'
            src={gmail}
            style={{ marginLeft: 5 }}
          />
        </div>
        <div>
          <p className={'pt-2'}>{t('contact.email')}</p>
        </div>
      </Section>
    </div>
  );
}
