window.addEventListener("load", function () {
  $(function () {
    $(".slide_list").bxSlider({
      auto: true,
      pager: true,
      speed: 3900,
      controls: true,
      moveSlides: 1,
      maxSlides: 5,
      minSlides: 1,
      slideWidth: 280,
      slideMargin: 30,
      autoHover: false,
      autoControls: true,
      adaptiveHeight: true,
    });
  });

  var $slider;

  function buildSliderConfiguration() {
    var deviceWidth = $(window).width();

    /* 반응형으로 설정할 옵션 정의 */
    var slideNum;
    var slideMargin;

    /* 화면 사이즈별 슬라이드 갯수, 마진 설정, 기타 옵션도 설정 가능 */
    if (deviceWidth < 480) {
      slideNum = 1;
      slideMargin = 20;
    } else if (deviceWidth < 760) {
      slideNum = 2;
      slideMargin = 30;
    } else if (deviceWidth < 1024) {
      slideNum = 3;
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
