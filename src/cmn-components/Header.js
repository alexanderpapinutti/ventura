import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export function Header() {
    return (
        <>
            <Navbar sticky='top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Ventura</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about-me">About Me</Nav.Link>

                            <Nav.Link href="#service-list">Services</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href={'#contact'}>Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
