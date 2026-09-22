import { Container } from 'react-bootstrap'
import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'

function ExpCard({ item, index }) {
  const [ref, isInView] = useInView({ threshold: 0.15 })

  return (
    <div className="timeline-item">
      <div
        className={`timeline-node ${item.current ? 'timeline-node-current' : ''}`}
        aria-hidden="true"
      />

      <article
        ref={ref}
        className={`exp-card ${isInView ? 'exp-card-visible' : ''}`}
        style={{ transitionDelay: isInView ? `${index * 120}ms` : '0ms' }}
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

        {item.technologies?.length > 0 && (
          <div className="exp-tech-chips">
            {item.technologies.map((tech, idx) => (
              <span key={idx} className="exp-tech-chip">{tech}</span>
            ))}
          </div>
        )}
      </article>
    </div>
  )
}

function Experience() {
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

          {profile.experience.map((item, index) => (
            <ExpCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience
