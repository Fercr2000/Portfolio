import { Container, Row, Col } from 'react-bootstrap'
import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'

// Iconos SVG con degradado azul
const IconCode = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 6L2 12L8 18M16 6L22 12L16 18M14 4L10 20"
      stroke="url(#edu-blue-grad)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconPiano = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="6" width="19" height="12" rx="1.5" stroke="url(#edu-blue-grad)" strokeWidth="1.8" />
    <line x1="7" y1="6" x2="7" y2="14" stroke="url(#edu-blue-grad)" strokeWidth="1.5" />
    <line x1="12" y1="6" x2="12" y2="14" stroke="url(#edu-blue-grad)" strokeWidth="1.5" />
    <line x1="17" y1="6" x2="17" y2="14" stroke="url(#edu-blue-grad)" strokeWidth="1.5" />
    <rect x="5.4" y="6" width="2.3" height="5" fill="url(#edu-blue-grad)" />
    <rect x="10.4" y="6" width="2.3" height="5" fill="url(#edu-blue-grad)" />
    <rect x="15.4" y="6" width="2.3" height="5" fill="url(#edu-blue-grad)" />
  </svg>
)

const iconMap = {
  code: IconCode,
  piano: IconPiano,
}

// Componente individual de tarjeta (con su propio hook de visibilidad)
function EduCard({ item, index }) {
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

        <h3 className="edu-degree">{item.degree}</h3>
        <p className="edu-specialty">{item.specialty}</p>

        <div className="edu-chips">
          {item.chips.map((chip, idx) => (
            <span key={idx} className="edu-chip">{chip}</span>
          ))}
        </div>

        <div className="edu-divider" aria-hidden="true" />

        <p className="edu-institution">{item.institution}</p>
        <p className="edu-location">{item.location}</p>

        <span className="edu-corner-decor" aria-hidden="true" />
      </article>
    </Col>
  )
}

function Education() {
  return (
    <section id="education">
      <Container>
        {/* SVG con el degradado, definido una sola vez */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <defs>
            <linearGradient id="edu-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6fa8ee" />
              <stop offset="100%" stopColor="#a8caf5" />
            </linearGradient>
          </defs>
        </svg>

        <h2 className="section-title">Formación académica</h2>

        <Row className="g-4">
          {profile.education.map((item, index) => (
            <EduCard key={item.id} item={item} index={index} />
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Education