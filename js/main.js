const swiper = new Swiper('.swiper', {
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