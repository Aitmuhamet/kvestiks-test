import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/bundle";

const swiperContainer = document.querySelector(".content-container");
const swiperSlides = document.querySelectorAll(".swiper-slide");
const slidesNumber = document.querySelector(".slider-info__total");

const currentSlideIndex = document.querySelector(".slider-info__current");

console.log(swiperSlides.length);
slidesNumber.innerHTML = swiperSlides.length;

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  centeredSlides: false,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1.6,
      // spaceBetween: 20,
    },
    550: {
      slidesPerView: 1.8,
      // spaceBetween: 50,
    },
  },
});

// Получаем все кнопки пагинации
const paginationButtons = document.querySelectorAll(
  ".swiper-pagination-bullet"
);

// Для каждой кнопки добавляем обработчик клика
paginationButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Прокручиваем слайдер так, чтобы выбранный слайд стал первым
    swiper.slideTo(index, 200);
    currentSlideIndex.innerHTML = index + 1; // 500 - это длительность анимации
  });
});

export default swiper;
