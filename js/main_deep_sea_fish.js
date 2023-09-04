window.addEventListener("load", function () {
  // 설명 모달창 이미지 불러오기
  let blobfish = document.querySelector(".deepseafish-modal-img");

  // 설명 모달창 내용 불러오기
  let blobfishTxt = document.querySelector(".deepseafish-modal-txt");

  // 설명 모달창 취소 버튼 불러오기
  let blobfishCloseBtn = document.querySelector("#deepseafish-modal-close");

  // 물고기 불러오기
  let mark1 = document.querySelector(".deepseafish-mark1");
  let mark2 = document.querySelector(".deepseafish-mark2");
  let mark3 = document.querySelector(".deepseafish-mark3");
  let mark4 = document.querySelector(".deepseafish-mark4");
  let mark5 = document.querySelector(".deepseafish-mark5");

  let markArr = [mark1, mark2, mark3, mark4, mark5];

  // 컨텐츠 불러오기
  let content1 = document.querySelector("#deepseafish1");
  let content2 = document.querySelector("#deepseafish2");
  let content3 = document.querySelector("#deepseafish3");
  let content4 = document.querySelector("#deepseafish4");
  let content5 = document.querySelector("#deepseafish5");

  let contentArr = [content1, content2, content3, content4, content5];

  // 취소버튼 불러오기
  let closeBtn1 = document.querySelector(".deepseafish-content-close1");
  let closeBtn2 = document.querySelector(".deepseafish-content-close2");
  let closeBtn3 = document.querySelector(".deepseafish-content-close3");
  let closeBtn4 = document.querySelector(".deepseafish-content-close4");
  let closeBtn5 = document.querySelector(".deepseafish-content-close5");

  let closeBtnArr = [closeBtn1, closeBtn2, closeBtn3, closeBtn4, closeBtn5];

  // 내용안의 사진
  let img1 = document.querySelector(".deepseafish-img1");
  let img2 = document.querySelector(".deepseafish-img2");
  let img3 = document.querySelector(".deepseafish-img3");
  let img4 = document.querySelector(".deepseafish-img4");
  let img5 = document.querySelector(".deepseafish-img5");

  let imgBtArr = [img1, img2, img3, img4, img5];

  // 사진을 눌렀을 때 나올 큰 사진
  let bigImg1 = document.querySelector(".deepseafish-img-big1");
  let bigImg2 = document.querySelector(".deepseafish-img-big2");
  let bigImg3 = document.querySelector(".deepseafish-img-big3");
  let bigImg4 = document.querySelector(".deepseafish-img-big4");
  let bigImg5 = document.querySelector(".deepseafish-img-big5");

  let bigImgArr = [bigImg1, bigImg2, bigImg3, bigImg4, bigImg5];
  console.log(bigImgArr);

  // 큰 사진 취소버튼 불러오기
  let closeBtnBig1 = document.querySelector(".deepseafish-content-close1-1");
  let closeBtnBig2 = document.querySelector(".deepseafish-content-close2-1");
  let closeBtnBig3 = document.querySelector(".deepseafish-content-close3-1");
  let closeBtnBig4 = document.querySelector(".deepseafish-content-close4-1");
  let closeBtnBig5 = document.querySelector(".deepseafish-content-close5-1");

  let closeBtnBigArr = [
    closeBtnBig1,
    closeBtnBig2,
    closeBtnBig3,
    closeBtnBig4,
    closeBtnBig5,
  ];

  // 모달창 제어하기 (true / false)
  let popActive = true;
  window.addEventListener("resize", function () {
    const w = window.innerWidth;
    // console.log(w);

    if (w <= 830) {
      // 큰이미지 클릭 막기
      popActive = false;
      // 큰이미지를 모두 보이지않게 처리
      bigImgArr.forEach((item) => {
        item.classList.remove("deepseafish-show");
      });
    } else {
      // 큰이미지 클릭 가능
      popActive = true;
    }
  });

  //  모달창 켜기
  blobfish.addEventListener("click", function () {
    blobfishTxt.style.opacity = 1;
    blobfishTxt.style.visibility = "visible";
  });
  blobfishCloseBtn.addEventListener("click", function () {
    blobfishTxt.style.opacity = 0;
    blobfishTxt.style.visibility = "hidden";
  });
  markArr.forEach((item, index) => {
    item.addEventListener("click", function () {
      console.log("item", item);
      // 모든 컨텐츠와 큰 사진 숨기기
      contentArr.forEach((content) => {
        content.classList.remove("deepseafish-show");
      });

      // 해당 마크에 대응하는 컨텐츠 보이기
      contentArr[index].classList.add("deepseafish-show");

      // 모든 큰 사진 숨기기
      bigImgArr.forEach((bigImg) => {
        bigImg.classList.remove("deepseafish-show");
      });
    });
  });

  // 섬네일 눌러서 큰창 보기
  imgBtArr.forEach((item, index) => {
    item.addEventListener("click", function () {
      // 모든 큰 사진 숨기기
      bigImgArr.forEach((bigImg) => {
        bigImg.classList.remove("deepseafish-show");
      });
      // 해당 마크에 대응하는 큰 사진 보이기
      if (popActive) {
        bigImgArr[index].classList.add("deepseafish-show");
      }
    });
  });

  // 큰창 모달닫기 버튼
  closeBtnBigArr.forEach((item, index) => {
    item.addEventListener("click", function () {
      // 모든 큰 사진 숨기기
      bigImgArr.forEach((bigImg) => {
        bigImg.classList.remove("deepseafish-show");
      });
    });
  });

  // 취소버튼 눌렀을 때 컨텐츠와 큰 사진 숨기기
  closeBtnArr.forEach((item, index) => {
    item.addEventListener("click", function () {
      contentArr[index].classList.remove("deepseafish-show");
      bigImgArr[index].classList.remove("deepseafish-show");
    });
  });
});