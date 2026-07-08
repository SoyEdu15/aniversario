# Despliegue en GitHub Pages

Este proyecto puede publicarse de forma sencilla en GitHub Pages porque está compuesto por archivos estáticos: HTML, CSS, JS, imágenes y videos.

## Pasos recomendados

1. Crea o entra a un repositorio en GitHub.
2. Sube todos los archivos del proyecto.
3. Entra a Settings > Pages.
4. Selecciona la opción "GitHub Actions" como fuente de despliegue.
5. Confirma que la rama principal es `main`.
6. Espera a que el workflow termine.

## Qué incluye este proyecto para Pages

- `index.html` en la raíz del repositorio
- Archivos estáticos accesibles directamente
- Workflow de despliegue automático en `.github/workflows/deploy-pages.yml`
- Archivo `.nojekyll` para evitar problemas de procesamiento

## URL final

Tras el despliegue, la URL será:

```text
https://<tu-usuario>.github.io/<nombre-del-repositorio>/
```
