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
const popupContainer = document.querySelector('.popup__container');
const form = document.querySelector('#form');

function clearPopupContainer() {
  while (popupContainer.firstChild) {
    popupContainer.removeChild(popupContainer.firstChild);
  }
}

function makePopup(e) {
  const img = e.currentTarget.querySelector('.directions__img').cloneNode(true);
  const title = e.currentTarget.querySelector('.directions__subtitle').cloneNode(true);
  const descr = e.currentTarget.querySelector('.directions__descr-full' ).cloneNode(true);

  img.src = img.src.slice(0, -4) + '-720.jpg';

  img.classList.add('popup__img');
  title.classList.add('popup__title');
  descr.classList.add('popup__descr');

  popupContainer.append(img, title, descr, form.cloneNode(true));
  popup.classList.add('popup--active');
  document.body.style.zIndex = '-10';
}

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    clearPopupContainer();
    makePopup(e);
  })
});

close.addEventListener('click', () => {
  popup.classList.remove('popup--active');
  setTimeout(clearPopupContainer, 500);
})

