import { SwiperOptions } from 'swiper/types';

export const swiperConfig: SwiperOptions = {
  navigation: true,
  slidesPerGroup: 1,
  slidesPerView: 1,
  pagination: {
    clickable: true
  },
  autoplay: {
    delay: 6000
  },
  effect: 'fade',
  loop: true,
  injectStyles: [`
    .swiper-pagination-bullet {
      width: 0.6rem;
      height: 0.6rem;
      opacity: 1;
      background: #ffffff;
    }
    .swiper-pagination-bullet-active {
      background: var(--makro-primary);
    }
  `]
};
