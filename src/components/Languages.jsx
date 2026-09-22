import { Container, Row, Col } from 'react-bootstrap'
import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'

// Banderas monocromas en el degradado azul de Formación. Las franjas van
// rellenas en vez de con línea fina: a 26px es lo único que se lee.
const IconSpain = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="flag-es-clip">
        <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      </clipPath>
    </defs>
    <g clipPath="url(#flag-es-clip)">
      <rect x="2.5" y="5" width="19" height="3.5" fill="url(#lang-blue-grad)" />
      <rect x="2.5" y="15.5" width="19" height="3.5" fill="url(#lang-blue-grad)" />
    </g>
    <rect x="2.5" y="5" width="19" height="14" rx="1.5" stroke="url(#lang-blue-grad)" strokeWidth="1.7" />
  </svg>
)

const IconUK = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="flag-uk-clip">
        <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      </clipPath>
    </defs>
    <g clipPath="url(#flag-uk-clip)">
      <path d="M2.5 5L21.5 19M21.5 5L2.5 19" stroke="url(#lang-blue-grad)" strokeWidth="1.3" />
      <rect x="10.2" y="5" width="3.6" height="14" fill="url(#lang-blue-grad)" />
      <rect x="2.5" y="10.2" width="19" height="3.6" fill="url(#lang-blue-grad)" />
    </g>
    <rect x="2.5" y="5" width="19" height="14" rx="1.5" stroke="url(#lang-blue-grad)" strokeWidth="1.7" />
  </svg>
)

const iconMap = {
  spain: IconSpain,
  uk: IconUK,
}

function LangCard({ item, index }) {
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const IconComponent = iconMap[item.icon]

  return (
    <Col lg={4} md={6}>
      <article
        ref={ref}
        className={`edu-card ${isInView ? 'edu-card-visible' : ''}`}
        style={{ transitionDelay: isInView ? `${index * 150}ms` : '0ms' }}
      >
        <span className="edu-card-glow" aria-hidden="true" />

        <div className="edu-header">
          <div className="edu-icon-wrapper">
            {IconComponent && <IconComponent />}
          </div>
          <span className={`edu-status edu-status-${item.status}`}>
            {item.statusLabel}
          </span>
        </div>

        <h3 className="edu-degree">{item.language}</h3>
        <p className="edu-specialty">{item.level}</p>

        <div className="edu-divider" aria-hidden="true" />

        <p className="edu-institution">{item.detail}</p>
        {item.note && <p className="edu-location">{item.note}</p>}

        <span className="edu-corner-decor" aria-hidden="true" />
      </article>
    </Col>
  )
}

function Languages() {
  return (
    <section id="languages" className="section-hero-bg">
      <Container>
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <defs>
            <linearGradient id="lang-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6fa8ee" />
              <stop offset="100%" stopColor="#a8caf5" />
            </linearGradient>
          </defs>
        </svg>

        <h2 className="section-title">Idiomas</h2>

        <Row className="g-4 justify-content-center">
          {profile.languages.map((item, index) => (
            <LangCard key={item.id} item={item} index={index} />
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Languages
