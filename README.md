# ⚔️ Witcher Multichannel Wiki - Modern Refactor

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

<!-- ESPACIO PARA EL HERO GIF (Demostración del carrusel Swiper.js y el diseño del Header dinámico) -->
![Hero Demo](/public/media/witcher-hero-demo.gif)
*Arquitectura estática vitaminada: Carruseles táctiles e inyección de componentes globales.*

> Evolución técnica de un proyecto académico hacia una arquitectura web moderna, modular y basada en datos. Esta wiki y portafolio interactivo rinde homenaje al universo de *The Witcher*, priorizando el rendimiento, la accesibilidad (WCAG) y la separación estricta entre la lógica de negocio y el contenido estático.

## 📖 El Concepto y Refactorización (Legacy vs Modern)
El objetivo de este proyecto fue erradicar la deuda técnica de una base de código rudimentaria (datos "quemados" en el HTML, CSS monolítico y falta de semántica) para construir un sistema escalable. El resultado es un motor de renderizado en Vanilla JavaScript que consume archivos JSON locales, eliminando la redundancia mediante inyección dinámica de componentes.

## 🚀 Características y UX (Features)

- **Gwent Character Cards:** Sección de personajes que rinde homenaje al juego de cartas de la saga, renderizando datos dinámicamente con efectos de transparencia y filtros CSS.
- **Witcher Contract Form:** Rediseño del tradicional formulario de contacto adoptando la estética de un "tablón de anuncios" medieval interactivo.
- **Streaming-Style Catalog:** Organización dinámica de adaptaciones (series, películas, videojuegos) implementando `Swiper.js` para navegación táctil fluida.
- **Resiliencia Visual (Anti-CLS):** Implementación de *fallbacks* en el DOM (`onerror`) que inyectan *placeholders* automáticos si un *asset* falla, garantizando la estabilidad visual de la interfaz.

<!-- ESPACIO PARA LA CAPTURA DE LAS CARTAS GWENT / TABLÓN DE CONTRATOS -->
![UI The Witcher](/public/media/witcher-gwent-ui.png)
*Renderizado dinámico de tarjetas de personajes consumiendo datos desde JSON.*

## 🏗️ Arquitectura y Decisiones Técnicas

- **Core y Modularidad:** HTML5 semántico y JavaScript Vanilla (ES6+). El sistema `componentsLoader.js` inyecta dinámicamente el *header* y el *footer* en todas las vistas.
- **Separación de Lógica y Datos:** El motor `renderers.js` aísla la lógica de las vistas, consumiendo catálogos locales (`personajes.json`, `libros.json`) para facilitar actualizaciones sin tocar el código fuente.
- **Estilos:** Tailwind CSS v4 con enfoque *Mobile-First*, utilizando variables modernas y utilidades atómicas.
- **Build Tooling e Infraestructura:** Vite como empaquetador para optimización de *assets* y recarga en caliente. Despliegue automatizado en Vercel (CI/CD).

## 🗺️ Roadmap y Escalabilidad (Fases Futuras)

1. **Fase 1 (Modelo de Datos):** Normalización de entidades JSON (origen: `libros` | `juegos`) para implementar un sistema de filtrado cruzado en las vistas dinámicas.
2. **Fase 2 (Identidad Visual):** Mapeo de enlaces verificados de Andrzej Sapkowski e integración exclusiva de *assets* en alta fidelidad (`.webp`).
3. **Fase 3 (Stack Evolutivo):** Integración de animaciones GSAP (Scroll Storytelling), modelos WebGL 3D (Three.js) y refactorización final hacia una *Single Page Application* declarativa con React.

## 🛠️ Instalación y Entorno Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/pedroesimonv/witcher-multichannel-wiki