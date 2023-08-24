// DOM(HTML 태그 로딩 완료시 실행)
$(document).ready(function() {
  $(".gnb > li").mouseover(function(){        
    $(this).find(".submenu").stop().slideDown();  
});

$(".gnb > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp();
});
});
// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function() {
  // 햄버거바 클릭하면 메뉴가 아래로 펼쳐짐
  const toggleBar = document.querySelector(".navbar_toggleBtn");
  let gnb = document.querySelector(".gnb");

  toggleBar.addEventListener("click", function() {
    gnb.classList.add("active");
  });
});