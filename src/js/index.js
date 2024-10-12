import "./../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import swiper from "./modules/customer-reviews.js";
import mobileNav from "./modules/mobile-nav.js";
mobileNav();

// let lastScrollTop = 0;
// const header = document.querySelector(".header");
// const paymentOptions = document.querySelector("#payment-options");

// window.addEventListener("scroll", function () {
//   const scrollTop = window.scrollY || document.documentElement.scrollTop;

//   console.log(`${scrollTop} - ${lastScrollTop}`);

//   setTimeout(() => {
//     if (scrollTop < lastScrollTop) {
//       // Прокрутка вниз — скрываем хедер
//       header.classList.add("header--hidden");
//       document.body.classList.add("p-0");
//     } else if (scrollTop > lastScrollTop) {
//       // Прокрутка вверх — показываем хедер
//       header.classList.remove("header--hidden");
//       document.body.classList.remove("p-0");
//     }
//   }, 200);

//   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Не позволяем значению стать отрицательным
// });
