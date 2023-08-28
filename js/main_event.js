// DOM(HTML 태그 로딩 완료시 실행)
$(document).ready(function() {

});
// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function() {
  // AOS.init();
  new Swiper('.swiper', {    
    autoplay: {
      delay: 5000,
    },
    loop: true,
    slidesPerView: 1,
    // spaceBetween: 10,
    autoHeight: true,
    pagination: {
      el: '.promotion .swiper-pagination',
      clickable: true,
    },
    
    navigation: {
      prevEl: '.event .swiper-button-prev',
      nextEl: '.event .swiper-button-next',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      760: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1680: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
});