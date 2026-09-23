# Portfolio Personal

Personal portfolio built with React, Vite and Bootstrap.

## 🚀 Demo

https://portfolio-seven-cyan-65.vercel.app/

## 🛠️ Tech Stack

- React
- Vite
- Bootstrap

## 📷 Añadir fotos a la galería

1. Deja las fotos en `src/assets/gallery/`, tal cual salgan de la cámara. No hace falta tocarlas ni renombrarlas.
2. Ejecuta el conversor:

   ```bash
   npm run fotos
   ```

3. Comprueba cómo han quedado con `npm run dev`.
4. Commit y push. Vercel despliega solo.

No hay que tocar código en ningún momento: la galería lee la carpeta sola.

### Qué hace `npm run fotos`

- Convierte cada foto a **WebP**, con un máximo de 2000 px de lado y calidad 82. Una foto de 15 MB se queda en unos 300 KB sin diferencia visible en pantalla.
- **Borra los metadatos EXIF**, incluida la ubicación GPS. Importante: si no, estarías publicando las coordenadas de dónde tomaste cada foto.
- Aplica la rotación EXIF, para que ninguna salga tumbada.
- **Mueve los originales** a `fotos-originales/`, que está fuera del repositorio. No se borra nada: tus archivos de cámara siguen ahí.

Solo procesa las fotos nuevas, así que puedes ejecutarlo tantas veces como quieras.

> **No subas nunca los JPEG originales al repositorio.** Diez fotos de la R6 son unos 95 MB: reventarías el repo y el despliegue de Vercel. Pásalas siempre por `npm run fotos`.

### Detalles de la galería

- **Orden**: alfabético por nombre de archivo. Si quieres uno concreto, ponles delante `01-`, `02-`, etc.
- **Sin títulos**: solo se muestran las imágenes.
- Si vacías la carpeta, la sección desaparece de la web en lugar de romperse.
- El número recomendado son **9-15 fotos**, mezclando verticales y horizontales: el mosaico se apoya en esa variedad de formatos.

## 📫 Contact

- GitHub: Fercr2000
- Email: fernandojosecamachorizquez@gmail.com
