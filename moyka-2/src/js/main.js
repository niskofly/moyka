import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});


window.onload = () => {
  let iframeName = document.getElementById("widget");
  let iframeContent = iframeName.contentDocument;
  iframeContent.body.innerHTML = iframeContent.body.innerHTML + "<style>.ew-list-layout__image{display: none !important;}</style>";
}
