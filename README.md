# ⚔️ Witcher Saga - Modern Refactor

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

Este proyecto representa la evolución técnica de una práctica académica de primer año de **DAM (Desarrollo de Aplicaciones Multiplataforma)**. El objetivo principal ha sido la refactorización de una estructura estática y rudimentaria hacia una arquitectura moderna, modular y basada en datos.

---

## 🚀 Evolución del Proyecto

Este repositorio es la segunda iteración de la asignatura **Lenguajes de Marca**. 

### **Antes (Legacy)**
* HTML no semántico y redundante.
* Estilos CSS básicos con alta especificidad.
* Datos "quemados" (hardcoded) en el HTML.
* Diseño no responsive.

### **Ahora (Refactored)**
* **Arquitectura de Datos**: Uso de archivos **JSON** para desacoplar el contenido de la estructura.
* **Componentización**: Inyección dinámica de `Header` y `Footer` mediante JavaScript para evitar redundancia.
* **UI/UX Temática**: Diseño inspirado en el universo de *The Witcher* utilizando **Tailwind CSS v4**.
* **Interactividad**: Implementación de **Swiper.js** para carruseles y efectos de *hover* avanzados en "Gwent Cards".

---

## ✨ Características Principales

*   **Gwent Character Cards**: Sección de personajes que rinde homenaje al juego de cartas de la saga, con efectos de transparencia y filtros CSS.
*   **Witcher Contract Form**: Formulario de contacto rediseñado con estética de "tablón de anuncios" medieval.
*   **Streaming-Style Catalog**: Organización dinámica de adaptaciones (series, pelis, juegos) mediante renderizado condicional.
*   **Performance**: Imágenes optimizadas en formato `.webp` y build optimizado con **Vite**.

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
| :--- | :--- |
| **Vite** | Bundler y entorno de desarrollo rápido. |
| **Tailwind CSS v4** | Framework de estilos utilitarios con variables CSS modernas. |
| **JavaScript (ES6+)** | Lógica de renderizado dinámico y carga de componentes. |
| **Swiper.js** | Motor de carrusel táctil y responsive. |
| **JSON** | Almacenamiento local de datos del lore y adaptaciones. |

---

## 📂 Estructura del Proyecto
```text
├── src/
│   ├── componentes/    # Fragmentos HTML inyectables (Header/Footer)
│   ├── data/           # Archivos JSON (libros, personajes, adaptaciones)
│   ├── styles/         # Configuración de Tailwind v4 y estilos base
│   └── main.js         # Lógica central: renderizado y componentes
├── public/
│   └── media/          # Assets optimizados (imágenes .webp)
├── index.html          # Punto de entrada principal
└── vite.config.js      # Configuración del motor de compilación

---

## ✒️ Autor

* **Pedro Simón** - *Refactorización y Desarrollo* - [LinkedIn](https://www.linkedin.com/in/pedro-simon-8a3764171)

---
