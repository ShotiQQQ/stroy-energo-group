"use strict";var swiperRealized=new Swiper(".realized__swiper",{navigation:{nextEl:".realized__button--prev",prevEl:".realized__button--next"},pagination:{el:".realized__pagination"},loop:!0,speed:750}),swiperPartners=new Swiper(".partners__swiper",{navigation:{nextEl:".partners__button--next",prevEl:".partners__button--prev"},slidesPerView:"auto",loop:!0,speed:750});document.querySelectorAll("form").forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()}))}));var burger=document.querySelector(".header__burger"),menu=document.querySelector(".header__container"),links=document.querySelectorAll(".header__link");burger.addEventListener("click",(function(){menu.classList.toggle("header__container-mobile--active"),burger.classList.toggle("header__burger--active")})),links.forEach((function(e){e.addEventListener("click",(function(){menu.classList.remove("header__container-mobile--active"),burger.classList.remove("header__burger--active")}))}));var cards=document.querySelectorAll(".directions__card"),close=document.querySelector(".popup__close"),popup=document.querySelector(".popup"),popupContainer=document.querySelector(".popup__container"),form=document.querySelector("#form");function clearPopupContainer(){for(;popupContainer.firstChild;)popupContainer.removeChild(popupContainer.firstChild)}function makePopup(e){var r=e.currentTarget.querySelector(".directions__img").cloneNode(!0),t=e.currentTarget.querySelector(".directions__subtitle").cloneNode(!0),o=e.currentTarget.querySelector(".directions__descr-full").cloneNode(!0);r.src=r.src.slice(0,-4)+"-720.jpg",r.classList.add("popup__img"),t.classList.add("popup__title"),o.classList.add("popup__descr"),popupContainer.append(r,t,o,form.cloneNode(!0)),popup.classList.add("popup--active"),document.body.style.zIndex="-10"}cards.forEach((function(e){e.addEventListener("click",(function(e){clearPopupContainer(),makePopup(e)}))})),close.addEventListener("click",(function(){popup.classList.remove("popup--active"),clearPopupContainer()}));