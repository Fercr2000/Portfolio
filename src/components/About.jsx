import { Container, Row, Col } from 'react-bootstrap'
import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'
import fotoSobreMi from '../assets/images/fotoAbout.png'

// Iconos SVG con degradado azul
const IconCode = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 6L2 12L8 18M16 6L22 12L16 18M14 4L10 20"
      stroke="url(#about-blue-grad)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconSettings = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="url(#about-blue-grad)" strokeWidth="2" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="url(#about-blue-grad)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconMusic = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="6" width="19" height="12" rx="1.5" stroke="url(#about-blue-grad)" strokeWidth="1.8" />
    <line x1="7" y1="6" x2="7" y2="14" stroke="url(#about-blue-grad)" strokeWidth="1.5" />
    <line x1="12" y1="6" x2="12" y2="14" stroke="url(#about-blue-grad)" strokeWidth="1.5" />
    <line x1="17" y1="6" x2="17" y2="14" stroke="url(#about-blue-grad)" strokeWidth="1.5" />
    <rect x="5.4" y="6" width="2.3" height="5" fill="url(#about-blue-grad)" />
    <rect x="10.4" y="6" width="2.3" height="5" fill="url(#about-blue-grad)" />
    <rect x="15.4" y="6" width="2.3" height="5" fill="url(#about-blue-grad)" />
  </svg>
)

const IconCamera = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
      stroke="url(#about-blue-grad)"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="13" r="4" stroke="url(#about-blue-grad)" strokeWidth="1.9" />
  </svg>
)

const iconMap = {
  code: IconCode,
  settings: IconSettings,
  music: IconMusic,
  camera: IconCamera,
}

function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="about" className="about-section section-alt">
      {/* Decoraciones de fondo */}
      <div className="about-orb about-orb-1" aria-hidden="true" />
      <div className="about-orb about-orb-2" aria-hidden="true" />

      <Container className="about-container">
        {/* SVG con el degradado definido una vez */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <defs>
            <linearGradient id="about-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6fa8ee" />
              <stop offset="100%" stopColor="#a8caf5" />
            </linearGradient>
          </defs>
        </svg>

        <h2 className="section-title">Sobre mí</h2>

        <div
          ref={ref}
          className={`about-grid ${isInView ? 'about-grid-visible' : ''}`}
        >
          {/* COLUMNA IZQUIERDA: foto */}
          <div className="about-photo-col">
            <div className="about-photo-wrap">
              <img src={fotoSobreMi} alt="Fernando J. Camacho Rizquez" />
            </div>
          </div>

          {/* COLUMNA DERECHA: texto */}
          <div className="about-text-col">
            <blockquote className="about-quote">
              <span className="about-quote-text">"{profile.about.quote}"</span>
            </blockquote>

            {profile.about.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-divider" aria-hidden="true" />

            {/* Highlights */}
            <div className="about-highlights">
              {profile.about.highlights.map((hl) => {
                const IconComponent = iconMap[hl.icon]
                return (
                  <div key={hl.id} className="about-hl">
                    <span className="about-hl-glow" aria-hidden="true" />
                    <div className="about-hl-icon-wrap">
                      {IconComponent && <IconComponent />}
                    </div>
                    <div className="about-hl-info">
                      <p className="about-hl-title">{hl.title}</p>
                      <p className="about-hl-sub">{hl.subtitle}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About