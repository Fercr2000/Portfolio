import { useEffect, useRef, useState } from 'react'

/**
 * Detecta cuándo un elemento entra en el viewport (visible en pantalla).
 * Devuelve [ref, isInView]:
 *   - ref: pásalo al elemento que quieres observar
 *   - isInView: true cuando el elemento es visible, false cuando no
 *
 * Por defecto, una vez que el elemento se ha visto, se queda en true
 * (la animación se ejecuta una sola vez, no cada vez que haces scroll arriba/abajo).
 */
export function useInView({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, isInView]
}