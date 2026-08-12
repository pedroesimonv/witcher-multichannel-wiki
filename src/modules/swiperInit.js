import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * MÓDULO: Inicialización del carrusel Swiper
 */
export function initSwiper() {
  const swiperElement = document.querySelector('.swiper');
  if (swiperElement) {
    try {
      new Swiper('.swiper', {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        autoplay: { delay: 3000 },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      });
    } catch (error) {
      console.error('Error al inicializar Swiper:', error);
    }
  }
}