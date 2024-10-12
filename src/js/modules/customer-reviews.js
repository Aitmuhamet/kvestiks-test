import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/bundle";

const swiperSlides = document.querySelectorAll(".swiper-slide");
const slidesNumber = document.querySelector(".slider-info__total");
const slideCount = swiperSlides.length;
const fraction = document.getElementById("fraction");
fraction.textContent = `1 / ${slideCount}`

slidesNumber.innerHTML = slideCount;

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  centeredSlides: false,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    360: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
  },
  on: {
    slideChange: () => {
      fraction.textContent = `${swiper.realIndex + 1} / ${slideCount}`;
    },
  },
});


export default swiper;
