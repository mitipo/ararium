window.addEventListener("load", function () {
  // 마크 불러오기
  let mark1 = document.querySelector(".deepseafish-mark1");
  let mark2 = document.querySelector(".deepseafish-mark2");
  let mark3 = document.querySelector(".deepseafish-mark3");
  console.log(mark1);
  // 컨텐츠 불러오기
  let content1 = document.querySelector("#deepseafish1");
  let content2 = document.querySelector("#deepseafish2");
  let content3 = document.querySelector("#deepseafish3");

  // 취소버튼 불러오기
  let closebtn1 = document.querySelector(".deepseafish-content-close1");
  let closebtn2 = document.querySelector(".deepseafish-content-close2");
  let closebtn3 = document.querySelector(".deepseafish-content-close3");

  // 마크를 눌렀을 때 컨텐츠 보이게 하기
  mark1.addEventListener("click", function () {
    content1.style.display = "block";
  });
  mark2.addEventListener("click", function () {
    content2.style.display = "block";
  });
  mark3.addEventListener("click", function () {
    content3.style.display = "block";
  });

  // 취소버튼 눌렀을 때 컨텐츠 사라지게 하기
  closebtn1.addEventListener("click", function () {
    content1.style.display = "none";
  });
  closebtn2.addEventListener("click", function () {
    content2.style.display = "none";
  });
  closebtn3.addEventListener("click", function () {
    content3.style.display = "none";
  });
});
