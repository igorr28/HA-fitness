import '../vendor/swiper.js';

console.log('slider');

const slider = document.querySelector('.swiper');
console.log(slider);

let mySwiper = new Swiper(slider, {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
