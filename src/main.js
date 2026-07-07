import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'; // Aseguramos que cargue el CSS
import librosData from './data/libros.json';
import personajesData from './data/personajes.json';

/**
 * FUNCIÓN PARA CARGAR COMPONENTES (Header/Footer)
 * Esto busca elementos con id="header-slug" y mete el HTML
 */
async function cargarComponentes() {
  const headerContainer = document.querySelector('#navbar-container');
  const footerContainer = document.querySelector('#footer-container');

  if (headerContainer) {
    const resp = await fetch('/componentes/header.html');
    headerContainer.innerHTML = await resp.text();
  }

  if (footerContainer) {
    const resp = await fetch('/componentes/footer.html');
    footerContainer.innerHTML = await resp.text();
  }
}

/**
 * INICIALIZACIÓN DE SWIPER
 */
function initSwiper() {
  const swiperElement = document.querySelector('.swiper');
  if (swiperElement) {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      autoplay: { delay: 3000 },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });
  }
}

/**
 * RENDERIZADO DE LIBROS (JSON)
 */
function renderLibros() {
  const container = document.querySelector('#libros-container');
  if (container) {
    container.innerHTML = librosData.map(libro => `
      <article class="bg-zinc-900 border-l-4 border-red-700 p-6 hover:bg-zinc-800 transition-all shadow-xl rounded-r-lg">
        <span class="text-[10px] text-red-500 uppercase font-bold tracking-[0.2em]">${libro.tipo}</span>
        <h3 class="text-2xl font-serif text-white mt-1 uppercase">${libro.titulo}</h3>
        <p class="mt-4 text-zinc-400 text-sm leading-relaxed antialiased">${libro.resumen}</p>
        <div class="mt-4 pt-4 border-t border-zinc-800 text-xs italic text-zinc-500">
          ${libro.importancia}
        </div>
      </article>
    `).join('');
  }
}

// Ejecutamos todo al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  cargarComponentes();
  initSwiper();
  renderLibros();
});

function renderPersonajes() {
  const container = document.querySelector('#personajes-container');
  if (container) {
    container.innerHTML = personajesData.map(pj => `
      <div class="group relative aspect-[2/3] w-full max-w-[300px] mx-auto bg-zinc-900 border-4 border-zinc-800 rounded-xl overflow-hidden shadow-2xl hover:border-red-700 transition-all duration-500 hover:-translate-y-4">
        
        <div class="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" style="background-image: url('${pj.imagen}')"></div>
        
        <div class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

        <div class="absolute top-3 left-3 w-12 h-12 bg-red-800 border-2 border-zinc-200 rounded-full flex items-center justify-center shadow-lg z-20">
          <span class="text-white font-bold text-xl">${pj.poder}</span>
        </div>

        <div class="absolute bottom-0 left-0 right-0 p-5 z-10">
          <p class="text-[10px] text-red-500 uppercase tracking-widest font-bold mb-1">${pj.faccion}</p>
          <h3 class="text-xl font-serif text-white uppercase leading-none mb-2">${pj.nombre}</h3>
          
          <div class="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500">
             <p class="text-[11px] text-zinc-300 italic mb-3">${pj.descripcion}</p>
             <div class="flex flex-wrap gap-1">
                ${pj.habilidades.map(h => `<span class="text-[9px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded border border-zinc-700">${h}</span>`).join('')}
             </div>
          </div>
        </div>

        <div class="absolute inset-0 border border-white/10 rounded-lg pointer-events-none"></div>
      </div>
    `).join('');
  }
}

// Asegúrate de llamarla en el DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // ... cargarComponentes(), initSwiper(), etc.
  renderPersonajes(); 
});

import adaptacionesData from './data/adaptaciones.json';

function renderAdaptaciones() {
  const container = document.querySelector('#adaptaciones-grid');
  if (!container) return;

  // 1. Agrupar por categoría
  const categorias = [...new Set(adaptacionesData.map(item => item.categoria))];

  container.innerHTML = categorias.map(cat => `
    <div class="mb-16">
      <h2 class="text-2xl font-serif text-white uppercase tracking-widest mb-8 border-b border-zinc-800 pb-2">${cat}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${adaptacionesData
          .filter(item => item.categoria === cat)
          .map(item => `
            <div class="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-red-600 transition-all">
              <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">${item.titulo}</h3>
                <p class="text-sm text-zinc-400 mb-6 line-clamp-2">${item.descripcion}</p>
                
                <div class="flex flex-wrap gap-3">
                  ${item.links.map(link => `
                    <a href="${link.url}" target="_blank" class="text-xs bg-zinc-800 hover:bg-red-700 text-zinc-300 hover:text-white px-3 py-1.5 rounded transition-colors border border-zinc-700">
                      ${link.tag} →
                    </a>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
      </div>
    </div>
  `).join('');
}

// Y la llamas en el DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // ... resto de funciones
  renderAdaptaciones();
});