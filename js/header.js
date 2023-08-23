// DOM(HTML 태그 로딩 완료시 실행)
$(document).ready(function() {

});
// 멀티미디어 리소스 로딩 완료 후 실행
window.onload = function() {
  let navList = document.querySelectorAll(".gnb > li");
    
  navList.forEach(function(navItem){
    navItem.addEventListener("mouseover", function(){
      this.querySelector(".submenu").style.height = "250px";
    });
  });
  navList.forEach(function(navItem){
    navItem.addEventListener("mouseout", function(){
      this.querySelector(".submenu").style.height = "0px";
    });
  });
};