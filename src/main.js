import './style.css'; // Estilos globales

// Importación de módulos
import { cargarComponentes } from './modules/componentsLoader.js';
import { renderLibros, renderPersonajes, renderAdaptaciones } from './modules/renderers.js';
import { initSwiper } from './modules/swiperInit.js';
import { initContactoForm } from './modules/contactForm.js';

// Orquestador principal
document.addEventListener('DOMContentLoaded', async () => {
  await cargarComponentes();
  initSwiper();
  renderLibros();
  renderPersonajes();
  renderAdaptaciones();
  initContactoForm();
});
