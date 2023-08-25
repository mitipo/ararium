// DOM(HTML 태그 로딩 완료시 실행)
// $(document).ready(function() {

// });
// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
  AOS.init({
    offset: 220,
    delay: 5000,
    duration: 800,
  });
});
//
// 버튼 슬라이드
window.addEventListener(function () {
  const sliderWrap = document.querySelector(".swiper-box");
  const sliderImg = document.querySelector(".swiper-box-inner"); //보여지는 영역
  const sliderInner = document.querySelector(".mySwiper"); //움직이는 영역
  const slider = document.querySelectorAll(".card"); //개별 이미지
  const sliderBtn = document.querySelector(".slide_btn_box"); //버튼
  const sliderBtnPrev = document.querySelector(".slide_btn_prev"); //왼쪽버튼
  const sliderBtnNext = document.querySelector(".slide_btn_next"); //오른쪽버튼

  let currentIndex = 0; //현재 이미지
  let sliderCount = slider.length; //이미지 갯수
  let sliderWidth = sliderImg.offsetWidth; //이미지 가로값

  // 이미지 총 길이 넣기
  sliderInner.style.width = sliderWidth * sliderCount + "px";

  // 이미지 움직이는 영역
  function gotoSlider(num) {
    sliderInner.style.transition = "all 400ms";
    sliderInner.style.transform = "translateX(" + -sliderWidth * num + "px)";
    console.log(-sliderWidth * num);
    currentIndex = num;
    console.log(num);
    console.log(currentIndex);
  }

  // 왼쪽버튼 클릭
  sliderBtnPrev.addEventListener("click", () => {
    let nextIndex = (currentIndex + sliderCount - 1) % sliderCount;
    gotoSlider(nextIndex);
    console.log(nextIndex);
    // 43210 43210
  });
  // 오른쪽버튼 클릭
  sliderBtnNext.addEventListener("click", () => {
    let nextIndex = (currentIndex + 1) % sliderCount;
    gotoSlider(nextIndex);
    console.log(nextIndex);
  });

  console.log((currentIndex + sliderCount - 1) % sliderCount);
});
//
// 이미지 움직임
const angle = 20;
const rotateCard = window;
const lerp = (start, end, amount) => {
  return (1 - amount) * start + amount * end;
};
const remap = (value, oldMax, newMax) => {
  const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
  return Math.min(Math.max(newValue, -newMax), newMax);
};
window.addEventListener("DOMContentLoaded", (event) => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((e) => {
    e.addEventListener("mousemove", (event) => {
      const rect = e.getBoundingClientRect();
      const centerX = (rect.left + rect.right) / 2;
      const centerY = (rect.top + rect.bottom) / 2;
      const posX = event.pageX - centerX;
      const posY = event.pageY - centerY;
      const x = remap(posX, rect.width / 2, angle);
      const y = remap(posY, rect.height / 2, angle);
      e.dataset.rotateX = x;
      e.dataset.rotateY = -y;
    });

    e.addEventListener("mouseout", (event) => {
      e.dataset.rotateX = 0;
      e.dataset.rotateY = 0;
    });
  });

  const update = () => {
    cards.forEach((e) => {
      let currentX = parseFloat(
        e.style.getPropertyValue("--rotateY").slice(0, -1)
      );
      let currentY = parseFloat(
        e.style.getPropertyValue("--rotateX").slice(0, -1)
      );
      if (isNaN(currentX)) currentX = 0;
      if (isNaN(currentY)) currentY = 0;
      const x = lerp(currentX, e.dataset.rotateX, 0.06);
      const y = lerp(currentY, e.dataset.rotateY, 0.06);
      e.style.setProperty("--rotateY", x + "deg");
      e.style.setProperty("--rotateX", y + "deg");
    });
  };
  setInterval(update, 1000 / 100);
});
//
