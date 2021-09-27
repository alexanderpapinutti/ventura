import { useContext } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import englishFlag from "../assets/images/united-kingdom.png";
import italianFlag from "../assets/images/italy.png"
import LangContext from '../context';

export function Header() {
  const {setLang} = useContext(LangContext);

  return (
          <Navbar sticky='top' expand="lg" bg="dark" variant="dark">
              <Container>
                  <Navbar.Brand href="#home">Ventura</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link className="scalable" href="#about-me">About Me</Nav.Link>

                          <Nav.Link className="scalable" href="#service-list">Services</Nav.Link>
                      </Nav>
                      <Nav>
                        <Image className="flag scalable" onClick={() => setLang('en')} src={englishFlag} rounded />
                        <Image className="flag scalable" onClick={() => setLang('it')} src={italianFlag} rounded />
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
  )
}
