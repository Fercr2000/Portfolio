import { Container } from 'react-bootstrap'
import { profile } from '../data/profile'

// Iconos SVG con degradado azul
const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="url(#contact-blue-grad)" strokeWidth="1.8" />
    <path d="M3 6.5L12 13L21 6.5" stroke="url(#contact-blue-grad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="url(#contact-blue-grad)" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H4.97C3.88 3 3 3.88 3 4.97v14.03C3 20.09 3.88 21 4.97 21h14.06C20.13 21 21 20.09 21 19V4.97C21 3.88 20.13 3 19 3zM8.27 18.5H5.5V10h2.77v8.5zM6.88 8.56c-.89 0-1.61-.72-1.61-1.61s.72-1.61 1.61-1.61 1.61.72 1.61 1.61-.72 1.61-1.61 1.61zM18.5 18.5h-2.77v-4.13c0-.99-.02-2.26-1.38-2.26-1.38 0-1.59 1.08-1.59 2.19v4.2H10V10h2.66v1.17h.04c.37-.7 1.27-1.43 2.61-1.43 2.79 0 3.3 1.84 3.3 4.22v4.54z" />
  </svg>
)

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="url(#contact-blue-grad)" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.7 18.6.3 12 .3z" />
  </svg>
)

// Datos de las tres tarjetas
const contactCards = [
  {
    id: 'email',
    filename: '~/email.sh',
    command: 'send',
    flag: '--to',
    bigChar: '@',
    icon: IconEmail,
    value: 'fernandojosecamachorizquez@gmail.com',
    showCursor: false,
    getHref: () => `mailto:${profile.personal.email}`,
  },
  {
    id: 'linkedin',
    filename: '~/linkedin.sh',
    command: 'connect',
    flag: '--profile',
    bigChar: 'in',
    icon: IconLinkedIn,
    value: 'Fernando J. Camacho Rizquez',
    showCursor: false,
    getHref: () => profile.personal.linkedin,
  },
  {
    id: 'github',
    filename: '~/github.sh',
    command: 'git',
    flag: 'clone --user',
    bigChar: '{ }',
    icon: IconGitHub,
    value: '@Fercr2000',
    showCursor: true,
    getHref: () => profile.personal.github,
  },
]

function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Decoraciones de fondo */}
      <div className="contact-orb contact-orb-1" aria-hidden="true" />
      <div className="contact-orb contact-orb-2" aria-hidden="true" />

      <span className="contact-symbol contact-sym-1" aria-hidden="true">{'</>'}</span>
      <span className="contact-symbol contact-sym-2" aria-hidden="true">{'@'}</span>
      <span className="contact-symbol contact-sym-3" aria-hidden="true">{'{ }'}</span>
      <span className="contact-symbol contact-sym-4" aria-hidden="true">{'>_'}</span>

      <Container className="contact-container">
        {/* SVG con el degradado definido una sola vez */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <defs>
            <linearGradient id="contact-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6fa8ee" />
              <stop offset="100%" stopColor="#a8caf5" />
            </linearGradient>
          </defs>
        </svg>

        <span className="contact-tag">Contacto</span>
        <h2 className="contact-headline">
          ¿<span className="text-gradient">Hablamos</span>?
        </h2>
        <p className="contact-description">
          Estoy abierto a oportunidades profesionales, colaboraciones y proyectos.
          Elige el canal que prefieras y te respondo cuanto antes.
        </p>

        <div className="contact-cards-grid">
          {contactCards.map((card) => {
            const IconComponent = card.icon
            return (
              <a
                key={card.id}
                href={card.getHref()}
                target={card.id === 'email' ? '_self' : '_blank'}
                rel={card.id !== 'email' ? 'noopener noreferrer' : undefined}
                className="contact-card"
                data-big={card.bigChar}
              >
                <span className="contact-card-glow" aria-hidden="true" />

                {/* Header tipo terminal */}
                <div className="contact-card-header">
                  <div className="contact-card-dots">
                    <span className="contact-card-dot dot-r" />
                    <span className="contact-card-dot dot-y" />
                    <span className="contact-card-dot dot-g" />
                  </div>
                  <span className="contact-card-filename">{card.filename}</span>
                </div>

                {/* Body con comando + valor */}
                <div className="contact-card-body">
                  <div className="cmd-line">
                    <span className="cmd-prompt">$</span>
                    <span className="cmd-command">{card.command}</span>
                    <span className="cmd-flag">{card.flag}</span>
                  </div>

                  <div className="cmd-output">
                    <div className="cmd-icon-wrap">
                      <IconComponent />
                    </div>
                    <p className="cmd-value">
                      {card.value}
                      {card.showCursor && <span className="cmd-cursor" />}
                    </p>

                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Contact