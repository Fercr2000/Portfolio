import { Container } from 'react-bootstrap'
import {
  SiPython,
  SiCplusplus,
  SiC,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiFlutter,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiLinux,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'

// Mapa de iconos disponibles
const iconMap = {
  SiPython,
  SiCplusplus,
  SiC: SiCplusplus,
  SiJavascript,
  SiReact,
  SiFlutter,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiLinux,
  SiVisualstudiocode: VscVscode,
  FaJava,
  SiHtml5,
  SiCss,
}

// Tarjeta individual de skill con animación de entrada
function SkillPill({ item, index, categoryIndex }) {
  const IconComponent = iconMap[item.icon]
  const totalDelay = categoryIndex * 100 + index * 50

  return (
    <span
      className={`skill-pill skill-pill-${item.size}`}
      style={{ animationDelay: `${totalDelay}ms` }}
    >
      {IconComponent && (
        <span className="skill-pill-icon">
          <IconComponent />
        </span>
      )}
      <span className="skill-pill-name">{item.name}</span>
    </span>
  )
}

// Sección por categoría
function SkillCategory({ category, index }) {
  const [ref, isInView] = useInView({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`skill-category ${isInView ? 'skill-category-visible' : ''}`}
    >
      <p className="skill-cat-heading">{category.title}</p>
      <div className="skill-pill-row">
        {category.items.map((item, idx) => (
          <SkillPill
            key={`${category.id}-${item.name}`}
            item={item}
            index={idx}
            categoryIndex={index}
          />
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="skills-section">
      {/* Decoraciones de fondo */}
      <div className="skills-orb skills-orb-1" aria-hidden="true" />
      <div className="skills-orb skills-orb-2" aria-hidden="true" />
      <div className="skills-orb skills-orb-3" aria-hidden="true" />

      <span className="skills-symbol skills-sym-1" aria-hidden="true">{'{ }'}</span>
      <span className="skills-symbol skills-sym-2" aria-hidden="true">{'</>'}</span>
      <span className="skills-symbol skills-sym-3" aria-hidden="true">{'[ ]'}</span>
      <span className="skills-symbol skills-sym-4" aria-hidden="true">{'( )'}</span>
      <span className="skills-symbol skills-sym-5" aria-hidden="true">{';'}</span>
      <span className="skills-symbol skills-sym-6" aria-hidden="true">{'#'}</span>

      <Container className="skills-container-wrapper">
        <h2 className="section-title">Habilidades técnicas</h2>
<div className="skills-container">
          {profile.skills.categories.map((category, idx) => (
            <SkillCategory key={category.id} category={category} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  )
}
export default Skills