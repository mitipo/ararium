// DOM(HTML 태그 로딩 완료시 실행)
$(document).ready(function() {

});
// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function() {
  // AOS.init();
  new Swiper('.rightcontent .swiper', {    
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
      prevEl: '.rightcontent .fa-chevron-left',
      nextEl: '.rightcontent .fa-chevron-right',
    },
  });
});