import { Container } from 'react-bootstrap'
import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'

function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.15 })
  const item = profile.experience[0] // Tu única experiencia (de momento)

  return (
    <section id="experience" className="experience-section section-alt">
      {/* Fondo decorativo: grid de puntos sutil */}
      <div className="exp-dot-grid" aria-hidden="true" />
      <div className="exp-vignette" aria-hidden="true" />

      {/* Orbes sutiles */}
      <div className="exp-orb exp-orb-1" aria-hidden="true" />
      <div className="exp-orb exp-orb-2" aria-hidden="true" />

      <Container className="experience-container">
        <h2 className="section-title">Experiencia profesional</h2>

        <div className="timeline-wrap">
          {/* Línea vertical degradada */}
          <div className="timeline-line" aria-hidden="true" />

          {/* Nodo brillante único */}
          <div className="timeline-node" aria-hidden="true" />

          {/* Card de experiencia */}
          <article
            ref={ref}
            className={`exp-card ${isInView ? 'exp-card-visible' : ''}`}
          >
            <span className="exp-card-glow" aria-hidden="true" />

            <div className="exp-card-header">
              <div className="exp-role-block">
                <h3 className="exp-role">{item.role}</h3>
                <p className="exp-company">{item.company}</p>
                <p className="exp-program">{item.program}</p>
              </div>

              <div className="exp-meta">
                <span className="exp-date-badge">{item.period}</span>
                <span className="exp-duration-badge">{item.duration}</span>
              </div>
            </div>

            <div className="exp-divider" />

            <p className="exp-tasks-label">Responsabilidades</p>
            <ul className="exp-tasks-list">
              {item.tasks.map((task, idx) => (
                <li key={idx} className="exp-task">{task}</li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  )
}

export default Experience