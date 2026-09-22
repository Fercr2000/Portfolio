import { Container } from 'react-bootstrap'
import {
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiGnubash,
  SiGoogleappsscript,
  SiHtml5,
  SiCss,
  SiReact,
  SiFlutter,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiDocker,
  SiVercel,
  SiLinux,
  SiJira,
} from 'react-icons/si'
import { FaJava, FaWindows } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'

// Iconos propios para tecnologías sin logo oficial.
// Trazo geométrico al estilo de Formación, pero en currentColor para
// heredar el color y el brillo de la píldora en hover.
const svgProps = {
  width: '1em',
  height: '1em',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  xmlns: 'http://www.w3.org/2000/svg',
}

// RAG — documento recuperado bajo lupa
const IconRag = () => (
  <svg {...svgProps}>
    <path d="M4 3.5h8l4 4v3" />
    <path d="M7 8h4M7 11.5h5" />
    <circle cx="15.5" cy="15.5" r="4" />
    <path d="M18.6 18.6L21.5 21.5" />
  </svg>
)

// LLM — red neuronal en capas
const IconLlm = () => (
  <svg {...svgProps}>
    <circle cx="4.5" cy="6" r="1.8" />
    <circle cx="4.5" cy="18" r="1.8" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19.5" cy="6" r="1.8" />
    <circle cx="19.5" cy="18" r="1.8" />
    <path d="M6.2 7.1L10.3 10.8M6.2 16.9L10.3 13.2M13.7 10.8L17.8 7.1M13.7 13.2L17.8 16.9" />
  </svg>
)

// TCP/IP — nodo central conectado a la red
const IconNetwork = () => (
  <svg {...svgProps}>
    <circle cx="12" cy="12" r="2.4" />
    <circle cx="4" cy="4.5" r="2" />
    <circle cx="20" cy="4.5" r="2" />
    <circle cx="12" cy="21" r="2" />
    <path d="M5.5 6L10.2 10.4M18.5 6L13.8 10.4M12 14.4V19" />
  </svg>
)

// Administración de sistemas — racks apilados
const IconServer = () => (
  <svg {...svgProps}>
    <rect x="3" y="4" width="18" height="6" rx="1.6" />
    <rect x="3" y="14" width="18" height="6" rx="1.6" />
    <path d="M6.8 7h.01M6.8 17h.01" strokeWidth="2.4" />
    <path d="M15 7h3M15 17h3" />
  </svg>
)

// Automotive SPICE — ciclo en V
const IconAspice = () => (
  <svg {...svgProps}>
    <path d="M4 4.5L12 19.5L20 4.5" />
    <circle cx="4" cy="4.5" r="1.6" />
    <circle cx="20" cy="4.5" r="1.6" />
    <circle cx="12" cy="19.5" r="1.6" />
    <path d="M7.2 10.5h9.6" strokeDasharray="2 2" />
  </svg>
)

// Gestión de requisitos — documento validado
const IconRequirements = () => (
  <svg {...svgProps}>
    <path d="M5.5 3h8l4.5 4.5V21h-12.5z" />
    <path d="M13.5 3v4.5H18" />
    <path d="M8.5 14l2 2 4.5-4.5" />
  </svg>
)

// Codebeamer — trazabilidad entre elementos
const IconTraceability = () => (
  <svg {...svgProps}>
    <circle cx="5.5" cy="5" r="2.2" />
    <circle cx="18.5" cy="12" r="2.2" />
    <circle cx="5.5" cy="19" r="2.2" />
    <path d="M7.5 6.2L16.5 10.8M7.5 17.8L16.5 13.2" />
  </svg>
)

// IBM DOORS — puerta
const IconDoors = () => (
  <svg {...svgProps}>
    <path d="M5 21V4.2a1.2 1.2 0 011-1.2l10-1a1.2 1.2 0 011.3 1.2V21" />
    <path d="M3 21h18" />
    <circle cx="14" cy="12.5" r="1" strokeWidth="2.2" />
  </svg>
)

// Bus CAN — par diferencial CAN_H / CAN_L
const IconCanBus = () => (
  <svg {...svgProps}>
    <path d="M2 8.5h4l2-3.5 2 3.5h4l2-3.5 2 3.5h4" />
    <path d="M2 15.5h4l2 3.5 2-3.5h4l2 3.5 2-3.5h4" />
  </svg>
)

// Vector CANoe — osciloscopio
const IconOscilloscope = () => (
  <svg {...svgProps}>
    <rect x="2" y="4" width="20" height="13.5" rx="2" />
    <path d="M5.5 11h2.2l1.8-3.5L12 14.5l1.8-3.5h2.7" />
    <path d="M9 21h6M12 17.5V21" />
  </svg>
)

// Saleae Logic 2 — trenes de pulsos digitales
const IconLogicAnalyzer = () => (
  <svg {...svgProps}>
    <path d="M2 9.5h3.5V5H10v4.5h4V5h4.5v4.5H22" />
    <path d="M2 19h3.5v-4.5H10V19h4v-4.5h4.5V19H22" />
  </svg>
)

// Mapa de iconos disponibles
const iconMap = {
  SiPython,
  SiCplusplus,
  SiC: SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiGnubash,
  SiGoogleappsscript,
  SiHtml5,
  SiCss,
  SiReact,
  SiFlutter,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiDocker,
  SiVercel,
  SiLinux,
  SiJira,
  SiVisualstudiocode: VscVscode,
  FaJava,
  FaWindows,
  IconRag,
  IconLlm,
  IconNetwork,
  IconServer,
  IconAspice,
  IconRequirements,
  IconTraceability,
  IconDoors,
  IconCanBus,
  IconOscilloscope,
  IconLogicAnalyzer,
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
