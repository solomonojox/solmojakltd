const activePage = window.location.pathname;
const navLinkEls = document.querySelectorAll('.nav_link');

// navLinkEls.forEach(navLinkEls => {
//   if (navLinkEls.href.includes(activePage)) {
//     navLinkEls.classList.add('active');
//   }
// });

navLinkEls.forEach(navLinkEls => {
  const navlinkPathname = new URL(navLinkEls.href).pathname;

  if ((activePage === navlinkPathname) || (activePage === '/index.html' && navlinkPathname === '/')) {
    navLinkEls.classList.add('active');
  }
})