"use strict";

var swiperRealized = new Swiper('.realized__swiper', {
  navigation: {
    nextEl: '.realized__button--prev',
    prevEl: '.realized__button--next'
  },
  loop: true,
  speed: 750
});
var swiperPartners = new Swiper('.partners__swiper', {
  navigation: {
    nextEl: '.partners__button--next',
    prevEl: '.partners__button--prev'
  },
  slidesPerView: 'auto',
  loop: true,
  speed: 750
});
document.querySelectorAll('form').forEach(function (e) {
  e.addEventListener('submit', function (e) {
    e.preventDefault();
  });
});