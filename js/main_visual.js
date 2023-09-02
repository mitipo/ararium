// DOM(HTML 태그 로딩 완료시 실행)
$(document).ready(function() {

});
// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function() {
  new Swiper('.animalintro .swiper', {    
    autoplay: {
      delay: 5000,
    },
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
      el: '.promotion .swiper-pagination',
      clickable: true,
    },
    
    navigation: {
      prevEl: '.animalintro .fa-chevron-left',
      nextEl: '.animalintro .fa-chevron-right',
    },
  });
});