import { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import t from 'translator';

import englishFlag from '../assets/images/united-kingdom.png';
import italianFlag from '../assets/images/italy.png';

import { LangContext } from '../context';

function setLanguage(lang, setLang) {
  setLang(lang);
  localStorage.setItem('language', lang);
}

export function Header() {
  const { setLang } = useContext(LangContext);
  return (
    <Navbar sticky='top' expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#root' style={{ paddingRight: 40 }}>
          <h5 className={'logo'}>V</h5>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto align-items-center'>
            <Nav.Link className='scalable' href='#about-me'>
              {t('general.aboutMe')}
            </Nav.Link>
            <div className='nav-divider' />
            <Nav.Link className='scalable' href='#service-list'>
              {t('general.services')}
            </Nav.Link>
            <div className='nav-divider' />
            <Nav.Link className='scalable' href='#contact'>
              {t('general.contact')}
            </Nav.Link>
          </Nav>
          <Nav className='d-flex flex-row justify-content-end'>
            <div>
              <Image
                className='flag scalable'
                onClick={() => setLanguage('en', setLang)}
                src={englishFlag}
                rounded
              />
            </div>
            <div>
              <Image
                className='flag scalable'
                onClick={() => setLanguage('it', setLang)}
                src={italianFlag}
                rounded
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
