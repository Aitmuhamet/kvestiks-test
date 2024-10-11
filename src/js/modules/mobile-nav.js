function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector(".mobile-nav-btn");
  const nav = document.querySelector(".mobile-nav");
  const menuIcon = document.querySelector(".nav-icon");
	let scrollbarWidth = null

  const getScrollbarWidth = () =>
    scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
	getScrollbarWidth();

	document.documentElement.style.setProperty('--scrollbarWidth', `${scrollbarWidth}px`);

  navBtn.onclick = function () {
    nav.classList.toggle("mobile-nav--open");
    menuIcon.classList.toggle("nav-icon--active");
    document.body.classList.toggle("no-scroll");
  };
}

export default mobileNav;
