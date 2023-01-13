const swiperRealized = new Swiper('.realized__swiper', {
  navigation: {
    nextEl: '.realized__button--prev',
    prevEl: '.realized__button--next',
  },
  pagination: {
    el: '.realized__pagination'
  },
  loop: true,
  speed: 750
});

const swiperPartners = new Swiper('.partners__swiper', {
  navigation: {
    nextEl: '.partners__button--next',
    prevEl: '.partners__button--prev',
  },
  slidesPerView: 'auto',
  loop: true,
  speed: 750
});


document.querySelectorAll('form').forEach((e) => {
  e.addEventListener('submit', (e) => {
    e.preventDefault();
  })
})
// mobile menu
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__container');
const links = document.querySelectorAll('.header__link');

burger.addEventListener('click', () => {
  menu.classList.toggle('header__container-mobile--active');
  burger.classList.toggle('header__burger--active');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('header__container-mobile--active');
    burger.classList.remove('header__burger--active');
  })
})

//popup
const cards = document.querySelectorAll('.directions__card');
const close = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
cards.forEach((card) => {
  card.addEventListener('click', () => {
    popup.classList.add('popup--active');
  })
});

close.addEventListener('click', () => {
  popup.classList.remove('popup--active');
})