const swiperTop = new Swiper('.top__swiper', {
  // Optional parameters
  effect: 'fade',
  // loop: true,
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
  spaceBetween: 20,
  freeMode: true,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.querySelectorAll('.accordeon__triger').forEach((item) => {
  item.addEventListener('clic', () => {
    item.parentNode.classList.toggle('accordeon__item--active')
  })
});
