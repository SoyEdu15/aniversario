# Nuestro Aniversario

Este proyecto es una página web especial para celebrar un aniversario con una experiencia visual y emocional: hero section, video, galería, contador, carta interactiva y motivos románticos.

## Características

- Diseño responsive y elegante
- Hero section con animaciones suaves
- Video principal con portada
- Galería dinámica de imágenes y videos
- Contador de tiempo juntos
- Carta interactiva con efecto de sobre
- Generador de razones románticas

## Estructura del proyecto

- `index.html`: estructura principal de la landing page
- `styles.css`: estilos visuales y responsive
- `script.js`: interactividad y galería dinámica
- `server.js`: servidor local para pruebas
- `img/`: imágenes del proyecto
- `video/`: vídeos del proyecto

## Ejecutar localmente

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor local:
   ```bash
   npm start
   ```
3. Abre en tu navegador:
   ```text
   http://localhost:3000
   ```

## Publicar en GitHub Pages

El proyecto ya está preparado para desplegarse en GitHub Pages.

### Opción recomendada: despliegue automático

1. Sube este repositorio a GitHub.
2. En tu repositorio, ve a Settings > Pages.
3. En Source selecciona "GitHub Actions".
4. El workflow incluido en `.github/workflows/deploy-pages.yml` se encargará de publicar la página automáticamente cada vez que hagas push a la rama `main`.

### URL pública

Una vez desplegado, GitHub Pages te dará una URL similar a:

```text
https://<tu-usuario>.github.io/<nombre-del-repositorio>/
```

## Notas

- La página es completamente estática, por lo que GitHub Pages la puede servir sin problema.
- Se agregó el archivo `.nojekyll` para evitar interferencias con el despliegue.
