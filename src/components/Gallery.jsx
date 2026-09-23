import { useState, useEffect, useCallback, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { profile } from '../data/profile'

// Carga automática: cualquier imagen que se deje en src/assets/gallery/
// aparece aquí sin tocar código. El número del nombre decide el orden.
const photos = Object.entries(
  import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp,avif}', {
    eager: true,
    import: 'default',
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ id: path, src }))

// Canon R6 Mark II estilizada con la paleta de la web
function CameraIcon() {
  return (
    <svg viewBox="0 0 230 200" className="gallery-camera" aria-hidden="true">
      <defs>
        <linearGradient id="cam-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#32456e" />
          <stop offset="55%" stopColor="#1d2745" />
          <stop offset="100%" stopColor="#111828" />
        </linearGradient>
        <linearGradient id="cam-edge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6fa8ee" />
          <stop offset="100%" stopColor="#3460a8" />
        </linearGradient>
        <linearGradient id="cam-barrel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a4f7a" />
          <stop offset="100%" stopColor="#151d33" />
        </linearGradient>
        <radialGradient id="cam-glass" cx="36%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#bcd9ff" />
          <stop offset="38%" stopColor="#4a7fc4" />
          <stop offset="72%" stopColor="#16264a" />
          <stop offset="100%" stopColor="#070c18" />
        </radialGradient>
      </defs>

      {/* Zapata de flash */}
      <rect x="100" y="32" width="30" height="10" rx="1.5" fill="url(#cam-body)" stroke="url(#cam-edge)" strokeWidth="1.8" />
      <rect x="105" y="35" width="20" height="3.5" rx="1" fill="#6fa8ee" opacity="0.35" />

      {/* Joroba del visor, de perfil bajo */}
      <path d="M95 42h40l7 10v10H88V52z" fill="url(#cam-body)" stroke="url(#cam-edge)" strokeWidth="2.2" strokeLinejoin="round" />

      {/* Cuerpo */}
      <rect x="32" y="60" width="166" height="106" rx="14" fill="url(#cam-body)" stroke="url(#cam-edge)" strokeWidth="2.5" />

      {/* Objetivo RF montado, dominando el frontal */}
      <circle cx="115" cy="113" r="50" fill="url(#cam-barrel)" stroke="url(#cam-edge)" strokeWidth="2.5" />
      {/* Anillo de control RF, moleteado */}
      <circle cx="115" cy="113" r="42" fill="none" stroke="#6fa8ee" strokeWidth="5" opacity="0.26" strokeDasharray="2.5 4.5" />
      {/* Anillo de enfoque */}
      <circle cx="115" cy="113" r="34" fill="none" stroke="url(#cam-edge)" strokeWidth="2.2" opacity="0.75" />
      {/* Cristal frontal */}
      <circle cx="115" cy="113" r="27" fill="url(#cam-glass)" className="gallery-camera-glass" />
      <circle cx="115" cy="113" r="27" fill="none" stroke="#6fa8ee" strokeWidth="1.5" opacity="0.5" />
      {/* Reflejos de la lente */}
      <ellipse cx="103" cy="101" rx="8" ry="6" fill="#eaf4ff" opacity="0.45" transform="rotate(-35 103 101)" />
      <circle cx="126" cy="125" r="3.5" fill="#a8caf5" opacity="0.3" />

      {/* Botón de liberación del objetivo */}
      <circle cx="178" cy="113" r="6.5" fill="url(#cam-body)" stroke="url(#cam-edge)" strokeWidth="2" />
      {/* Luz de ayuda al enfoque */}
      <circle cx="54" cy="84" r="5" fill="#6fa8ee" className="gallery-camera-led" />
      {/* Rejilla de micrófono */}
      <path d="M45 140h14M45 149h9" stroke="#6fa8ee" strokeWidth="3" strokeLinecap="round" opacity="0.28" />
    </svg>
  )
}

function Lightbox({ index, onClose, onPrev, onNext }) {
  const touchStartX = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose, onPrev, onNext])

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 60) onPrev()
    if (delta < -60) onNext()
    touchStartX.current = null
  }

  return (
    <div
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Visor de fotografías"
      onClick={onClose}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
      onTouchEnd={handleTouchEnd}
    >
      <button className="gallery-lb-close" onClick={onClose} aria-label="Cerrar">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <button
        className="gallery-lb-nav gallery-lb-prev"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Anterior"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>

      <img
        className="gallery-lb-image"
        src={photos[index].src}
        alt=""
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="gallery-lb-nav gallery-lb-next"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Siguiente"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>

      <span className="gallery-lb-counter">{index + 1} / {photos.length}</span>
    </div>
  )
}

function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const gridRef = useRef(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(
    () => setLightboxIndex((i) => (i - 1 + photos.length) % photos.length),
    []
  )
  const next = useCallback(
    () => setLightboxIndex((i) => (i + 1) % photos.length),
    []
  )

  const open = () => {
    setIsOpen(true)
    requestAnimationFrame(() => {
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  if (photos.length === 0) return null

  return (
    <section id="gallery" className="gallery-section section-alt">
      <Container>
        <h2 className="section-title">{profile.gallery.headline}</h2>

        {!isOpen && (
          <button className="gallery-teaser" onClick={open}>
            <span className="gallery-teaser-glow" aria-hidden="true" />
            <CameraIcon />
            <span className="gallery-teaser-text">
              <span className="gallery-teaser-question">{profile.gallery.teaserText}</span>
              <span className="gallery-teaser-cta">
                {profile.gallery.teaserAction}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </span>
            </span>
          </button>
        )}

        {isOpen && (
          <div ref={gridRef} className="gallery-reveal">
            <p className="gallery-intro">{profile.gallery.description}</p>

            <div className="gallery-masonry">
              {photos.map((photo, i) => (
                <button
                  key={photo.id}
                  className="gallery-item"
                  style={{ animationDelay: `${Math.min(i, 12) * 70}ms` }}
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Ampliar fotografía ${i + 1}`}
                >
                  <img src={photo.src} alt="" loading="lazy" decoding="async" />
                  <span className="gallery-item-overlay" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M11 8v6M8 11h6M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>

            <button className="gallery-collapse" onClick={() => setIsOpen(false)}>
              Ocultar galería
            </button>
          </div>
        )}
      </Container>

      {lightboxIndex !== null && (
        <Lightbox index={lightboxIndex} onClose={closeLightbox} onPrev={prev} onNext={next} />
      )}
    </section>
  )
}

export default Gallery
