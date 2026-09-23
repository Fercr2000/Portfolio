// Convierte a WebP las fotos nuevas de src/assets/gallery/ y archiva los
// originales en fotos-originales/ (fuera del repo).
// Uso: npm run fotos
import { execFileSync } from 'node:child_process'
import { readdirSync, mkdirSync, renameSync, statSync } from 'node:fs'
import { join, parse } from 'node:path'

const GALERIA = 'src/assets/gallery'
const ORIGINALES = 'fotos-originales'
const LADO_MAXIMO = 2000
const CALIDAD = 82

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1)

const pendientes = readdirSync(GALERIA).filter((f) =>
  /\.(jpe?g|png|tiff?)$/i.test(f)
)

if (pendientes.length === 0) {
  console.log('No hay fotos nuevas que convertir.')
  process.exit(0)
}

mkdirSync(ORIGINALES, { recursive: true })

let antes = 0
let despues = 0

for (const archivo of pendientes) {
  const origen = join(GALERIA, archivo)
  const destino = join(GALERIA, `${parse(archivo).name}.webp`)

  const pesoOriginal = statSync(origen).size
  antes += pesoOriginal

  // -auto-orient aplica la rotación EXIF; -strip borra metadatos, incluido el GPS
  execFileSync('magick', [
    origen,
    '-auto-orient',
    '-resize', `${LADO_MAXIMO}x${LADO_MAXIMO}>`,
    '-strip',
    '-quality', String(CALIDAD),
    destino,
  ])

  const pesoNuevo = statSync(destino).size
  despues += pesoNuevo

  renameSync(origen, join(ORIGINALES, archivo))
  console.log(`  ${archivo}  ${mb(pesoOriginal)} MB → ${mb(pesoNuevo)} MB`)
}

console.log(
  `\n${pendientes.length} fotos: ${mb(antes)} MB → ${mb(despues)} MB` +
  `  (${Math.round((1 - despues / antes) * 100)}% menos)`
)
console.log(`Originales guardados en ${ORIGINALES}/`)
