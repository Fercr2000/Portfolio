import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap'

function Navbar() {
  return (
    <BsNavbar
      expand="lg"
      fixed="top"
      className="navbar-custom"
    >
      <Container>
        <BsNavbar.Brand href="#hero" className="brand-custom">
          <div className="brand-terminal">
            <span className="brand-prompt">$</span>
            <div className="brand-name-stack">
              <span className="brand-firstname">Fernando J.</span>
              <span className="brand-surname">Camacho Rizquez</span>
            </div>
            <span className="brand-cursor" />
          </div>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="main-nav" />

        <BsNavbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="nav-link-custom">Sobre mí</Nav.Link>
            <Nav.Link href="#education" className="nav-link-custom">Formación</Nav.Link>
            <Nav.Link href="#experience" className="nav-link-custom">Experiencia</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">Habilidades</Nav.Link>
            <Nav.Link href="#music" className="nav-link-custom">Música</Nav.Link>
            <Nav.Link href="#gallery" className="nav-link-custom">Galería</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contacto</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}

export default Navbar