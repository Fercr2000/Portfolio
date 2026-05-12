import { Container, Button } from 'react-bootstrap'
import { profile } from '../data/profile'

function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Círculos decorativos difuminados */}
      <div className="hero-decoration hero-decoration-1" />
      <div className="hero-decoration hero-decoration-2" />

      {/* Terminal animada de fondo */}
      <div className="hero-code-terminal" aria-hidden="true">
        <div className="terminal-header">
          <span className="terminal-dot dot-red" />
          <span className="terminal-dot dot-yellow" />
          <span className="terminal-dot dot-green" />
          <span className="terminal-title">fernando@portfolio:~</span>
        </div>
        <div className="terminal-body">
          <pre className="terminal-code">
{`> npm run dev
✓ Compiled successfully

const developer = {
  name: "Fernando J. Camacho Rizquez",
  studies: "Ingeniería Informática",
  passions: ["código", "música", "fotografía"],
  status: "buscando oportunidades"
};

while (vida) {
  aprender();
  crear();
  inspirar();
}`}
          </pre>
          <span className="terminal-cursor-line">_</span>
        </div>
      </div>

      <Container className="hero-container">
        <div className="hero-content">
          {/* Badge superior */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>{profile.hero.badge}</span>
          </div>

          {/* Saludo */}
          <p className="hero-greeting">{profile.hero.greeting}</p>

          {/* Nombre con F gigante decorativa */}
          <div className="hero-name-wrapper">
            <span className="hero-big-letter" aria-hidden="true">F</span>
            <h1 className="hero-name">
              <span className="hero-firstname">
                <span className="hero-firstletter">F</span>ernando J.
              </span>
              
              <span className="hero-lastname">Camacho Rizquez</span>
            </h1>
          </div>

         {/* Frase de identidad — con barra lateral degradada */}
          <div className="hero-identity">
            <p className="hero-headline">{profile.hero.headline}</p>
            <p className="hero-subheadline">{profile.hero.subheadline}</p>
          </div>

         {/* Descripción con estilo marcador diagonal */}
          <div className="hero-description-wrapper">
            <p className="hero-description-highlighted">
              {profile.hero.description}
            </p>
          </div>

          {/* Línea separadora elegante */}
          <div className="hero-divider" aria-hidden="true" />

          {/* Botones de acción */}
          <div className="hero-buttons">
            <Button
              href={profile.personal.cvPdf}
              target="_blank"
              className="btn-primary-custom"
            >
              <i className="bi bi-download me-2" />
              Descargar CV
            </Button>

            <Button
              href="#contact"
              className="btn-outline-custom"
            >
              Contactar
            </Button>

            {/* Iconos sociales */}
            <div className="hero-socials">
              
              <a  href={profile.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <i className="bi bi-github" />
              </a>
              <a
                href={profile.personal.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin" />
              </a>
              <a
                href={`mailto:${profile.personal.email}`}
                className="social-icon"
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill" />
              </a>
            </div>
          </div>

          {/* Indicador scroll */}
          <div className="hero-scroll-indicator">
            <span>Scroll</span>
            <div className="hero-scroll-line" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero