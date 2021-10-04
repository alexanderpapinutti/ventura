import { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import t from 'translator';

import englishFlag from '../assets/images/united-kingdom.png';
import italianFlag from '../assets/images/italy.png';
import logo from '../assets/images/logo.png';

import { LangContext } from '../context';

export function Header() {
  const { setLang, lang } = useContext(LangContext);

  return (
    <Navbar sticky='top' expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#root'>
          <img className={'logo'} src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link className='scalable' href='#about-me'>
              {t(lang, 'general.aboutMe')}
            </Nav.Link>
            <Nav.Link className='scalable' href='#service-list'>
              {t(lang, 'general.services')}
            </Nav.Link>
            <Nav.Link className='scalable' href='#contact'>
              {t(lang, 'general.contact')}
            </Nav.Link>
          </Nav>
          <Nav className='d-flex flex-row justify-content-end'>
            <div>
              <Image
                className='flag scalable'
                onClick={() => setLang('en')}
                src={englishFlag}
                rounded
              />
            </div>
            <div>
              <Image
                className='flag scalable'
                onClick={() => setLang('it')}
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
