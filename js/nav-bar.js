const activePage = window.location.pathname;
const navLinkEls = document.querySelectorAll('.nav_link');

navLinkEls.forEach(navLinkEls => {
  if (navLinkEls.href.includes(activePage)) {
    navLinkEls.classList.add('active');
  }
});