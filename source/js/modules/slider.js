import '../vendor/swiper.js';

const sliderCoaches = document.querySelector('.coaches__slider');
const sliderComments = document.querySelector('.comments__slider');

// eslint-disable-next-line no-undef
let swiperCoaches = new Swiper(sliderCoaches, {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  loop: true,

  navigation: {
    nextEl: '.coaches__button--prev',
    prevEl: '.coaches__button--next',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide: 2,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      initialSlide: 0,
    },
  },
});

// eslint-disable-next-line no-undef
let swiperComments = new Swiper(sliderComments, {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  navigation: {
    nextEl: '.comments__button--prev',
    prevEl: '.comments__button--next',
  },

  autoHeight: true,
  initialSlide: 0,
  slidesPerView: 1,
});

swiperCoaches.changeDirection('horizontal', false);
swiperComments.changeDirection('horizontal', false);
