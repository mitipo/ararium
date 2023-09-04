window.addEventListener("load", function () {
  var $slider;

  function buildSliderConfiguration() {
    var deviceWidth = $(window).width();

    /* 반응형으로 설정할 옵션 정의 */
    var slideNum;
    var slideMargin;

    /* 화면 사이즈별 슬라이드 갯수, 마진 설정, 기타 옵션도 설정 가능 */
    if (deviceWidth < 480) {
      slideNum = 1;
      slideMargin = 30;
      slideWidth = 100;
    } else if (deviceWidth < 760) {
      slideNum = 1;
      slideMargin = 30;
    } else if (deviceWidth < 800) {
      slideNum = 2;
      slideMargin = 30;
    } else if (deviceWidth < 1280) {
      slideNum = 3;
      slideMargin = 30;
    } else if (deviceWidth < 1600) {
      slideNum = 4;
      slideMargin = 30;
    } else {
      slideNum = 5;
      slideMargin = 30;
    }

    return {
      slideWidth: 280,
      autoControls: true,
      auto: true,
      autoHover: true,
      adaptiveHeight: true,
      pager: false,
      moveSlides: 1,
      slideMargin: slideMargin /*반응형 옵션*/,
      minSlides: slideNum /*반응형 옵션*/,
      maxSlides: slideNum /*반응형 옵션*/,
    };
  }

  function configureSlider() {
    var config = buildSliderConfiguration();

    if ($slider && $slider.reloadSlider) {
      $slider.reloadSlider(config);
    } else {
      $slider =
        $(".slide_list").bxSlider(
          config
        ); /* 슬라이더 클래스 또는 아이디 입력 */
    }
  }

  $(".slider-prev").click(function () {
    var current = $slider.getCurrentSlide();
    $slider.goToPrevSlide(current) - 1;
  });

  $(".slider-next").click(function () {
    var current = $slider.getCurrentSlide();
    $slider.goToNextSlide(current) + 1;
  });

  $(window).on("orientationchange resize", configureSlider);
  configureSlider();
});

// --------------------------
// --------------------------
// 이미지 클릭
$(function () {
  // 변수 선언
  var imageButton = $(".item-box .item-img a");
  var popup = $(".img-popup");
  var closeButton = popup.find("> .popup-inner > .close-btn");
  var htmlAndBody = $("html, body");
  var focusTarget;

  // 팝업 생성
  imageButton.on("click", function (e) {
    e.preventDefault();
    var popupImg = popup.find("> .popup-inner > img");
    var image = $(this).find("> img");
    var src = image.attr("src");
    var alt = image.attr("alt");
    focusTarget = $(this);
    popupImg.attr("src", src).attr("alt", alt);
    createPopup();
  });

  // 팝업 제거
  popup.on("click", function () {
    removePopup();
  });
  closeButton.on("click", function (e) {
    e.preventDefault();
    removePopup();
  });

  // 팝업창 검은배경과 닫기 버튼을 제외한 나머지 부분 클릭시 닫히지 않도록 하기
  popup.find("> .popup-inner").on("click", function (e) {
    e.stopPropagation();
  });

  // 팝업 생성 함수
  function createPopup() {
    popup.addClass("active");
    htmlAndBody.css("overflow-y", "visible");
    setTimeout(function () {
      closeButton.focus();
    }, 50);
  }
  // 팝업 제거 함수
  function removePopup() {
    popup.removeClass("active");
    focusTarget.focus();
    htmlAndBody.css("overflow-y", "visible");
  }
});

// --------------------------------자세히보기 팝업-------
//<![CDATA[

//]]>
// --------------------------------
$(function () {
  $("#contents2").click(function () {
    $("#popup").fadeIn();
  });

  $(".exit").click(function () {
    $("#popup").fadeOut();
  });
});

// jQuery 존재하는지 판단하여 없으면 스크립트 CDN 삽입
