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
  // 어른
  const adultplus = document.querySelector(".adult .plus");
  const adultminus = document.querySelector(".adult .minus");
  const adultresult = document.querySelector(".adult .number");
  let adult = 0;
  adultplus.addEventListener("click", () => {
    adult++;
    adultresult.textContent = adult;
  });
  adultminus.addEventListener("click", () => {
    adult--;
    if(adult < 0) {
      alert("0 미만의 인원은 입력하실 수 없습니다.");
      adult = 0;
    }
    adultresult.textContent = adult;
  });
  // 청소년
  const teenagerplus = document.querySelector(".teenager .plus");
  const teenagerminus = document.querySelector(".teenager .minus");
  const teenagerresult = document.querySelector(".teenager .number");
  let teenager = 0;
  teenagerplus.addEventListener("click", () => {
    teenager++;
    teenagerresult.textContent = teenager;
  });
  teenagerminus.addEventListener("click", () => {
    teenager--;
    if(teenager < 0) {
      alert("0 미만의 인원은 입력하실 수 없습니다.");
      teenager = 0;
    }
    teenagerresult.textContent = teenager;
  });
  // 어린이
  const childplus = document.querySelector(".child .plus");
  const childminus = document.querySelector(".child .minus");
  const childresult = document.querySelector(".child .number");
  let child = 0;
  childplus.addEventListener("click", () => {
    child++;
    childresult.textContent = child;
  });
  childminus.addEventListener("click", () => {
    child--;
    if(child < 0) {
      alert("0 미만의 인원은 입력하실 수 없습니다.");
      child = 0;
    }
    childresult.textContent = child;
  });
  // tab
  const tabBtn = document.querySelectorAll(".tab-btn > ul > li");
  const tabCont = document.querySelectorAll(".tab-cont > div");

  tabCont.forEach(el => el.style.display = "none");
  tabCont[0].style.display = "block";

  tabBtn.forEach((tab, index) => {
      tab.addEventListener("click", () => {
          tabCont.forEach(cont => cont.style.display = "none");
          tabCont[index].style.display = "block";
          tabBtn.forEach(tab => tab.classList.remove("active"));
          tab.classList.add("active");
      });
    });
    // 예매하기 알림창
    const ticketingBtn = document.querySelectorAll(".ticketing-btn");

    ticketingBtn.forEach((item, index) => {
      item.addEventListener("click", () => {
        let result = confirm(`해당 날짜와 인원으로 예약하시겠습니까?`);

        if(result === true) {
          alert(`예약이 완료되었습니다.`);
          location.href = 'index.html';
        }
        else {
          alert(`예약이 취소되었습니다.`);
        }
      });
    });
});