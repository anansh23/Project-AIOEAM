import { openPopup } from "./registration";
import { closePopup } from "./registration";

let button = document.querySelector('.button');
let search = document.querySelector('#search-bar');
let searchbox = document.querySelector('.search-box');
let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.navbar');

button.onclick = () => {
  button.classList.toggle('show');
}
search.onclick = () => {
    searchbox.classList.toggle('active');
}
menubar.onclick = () => {
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}



/*card slider*/
var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination-bullet",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-swiper-navBtn",
      prevEl: ".swiper-button-prev-swiper-navBtn",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
});