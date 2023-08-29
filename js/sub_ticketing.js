// DOM(HTML 태그 로딩 완료시 실행)
$(document).ready(function() {

});
// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function() {
  // 날짜 선택
  const date = document.querySelectorAll(".date li");
  date.forEach((item, index) => {
    item.addEventListener("click", () => {
      date.forEach(item => item.classList.remove("active"));
      item.classList.add("active");
    });
  });
  // 인원 증감
  
  // tab
  const tabBtn = document.querySelectorAll(".tab-btn > ul > li");
  const tabCont = document.querySelectorAll(".tab-cont > div");

  tabCont.forEach(el => el.style.display = "none");
  tabCont[0].style.display = "block";

  tabBtn.forEach((tab, index) => {
      tab.addEventListener("click", () => {
          tabCont.forEach(cont => cont.style.display = "none");
          tabCont[index].style.display = "block";
      });
    });
});