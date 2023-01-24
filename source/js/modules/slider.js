import '../vendor/swiper.js';


const sliderCoaches = document.querySelector('.coaches__slider');

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

  // loop: true,

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
})
