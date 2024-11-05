const swiperTop = new Swiper('.top__swiper', {
  // Optional parameters
  effect: 'fade',
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});