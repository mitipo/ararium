// DOM(HTML 태그 로딩 완료시 실행)
$(document).ready(function () {
  // dot 클릭시 동물소개, 이미지 생성
  $(".dot_1").on("click", function () {
    $(".ani1").show(700);
    // $(".marineanimal-ex1").show(1000);
    $(".ani1").animate({ marginLeft: 13 + "%" }, 600);
    setTimeout(function () {
      $(".marineanimal-ex.01").stop().fadeIn();
    }, 1000);
  });
  $(".dot_2").on("click", function () {
    $(".ani2").show(700);
    // $(".marineanimal-ex1").show(1000);
    $(".ani2").animate({ marginLeft: 20 + "%" }, 600);
    setTimeout(function () {
      $(".marineanimal-ex.02").stop().fadeIn();
    }, 1000);
  });

  // 닫기 클릭시 동물소개 숨기기
  $("#marineanimal-x").on("click", function () {
    $(".ani1").hide(500);
    $(".marineanimal-ex.01").hide(500);
  });
  $("#marineanimal-x").on("click", function () {
    $(".ani2").hide(500);
    $(".marineanimal-ex.02").hide(500);
  });
});
// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
  AOS.init();
});
