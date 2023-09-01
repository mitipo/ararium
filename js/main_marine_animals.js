// DOM(HTML 태그 로딩 완료시 실행)
$(document).ready(function () {
  // 배경 물고기 이동
  $(".fishs > li").each(function () {
    $(this).css({
      top: random(0, 400),
    });
  });
  function random(minVal, maxVal, floatVal) {
    var randVal = minVal + Math.random() * (maxVal - minVal);
    return typeof floatVal == "undefined"
      ? Math.round(randVal)
      : randVal.toFixed(floatVal);
  }
  // 배경 해파리 이동
  $(".jellyfish > li").each(function () {
    $(this).css({
      top: random(0, 400),
    });
  });
  function random(minVal, maxVal, floatVal) {
    var randVal = minVal + Math.random() * (maxVal - minVal);
    return typeof floatVal == "undefined"
      ? Math.round(randVal)
      : randVal.toFixed(floatVal);
  }

  // 점버튼(.dot) 클릭시 동물소개, 동물이미지 생성
  $(".dot p").on("click", function () {
    var targetIndex = $(this).index();
    $(".ani1, .ani2, .ani3, .ani4").hide(0); // 모든 동물 요소를 먼저 숨김
    $(".marineanimal-ex").hide(0); // 모든 동물 설명을 먼저 숨김
    
    var marginLeftValue =
      targetIndex === 0 ? "3%" : targetIndex === 1 ? "15%" : "-40%";
      if (targetIndex === 1) { // ani2의 경우 이미지 이동 속도를 늦추는 조건 추가
        $(".ani" + (targetIndex + 1))
          .show(700)
          .animate({ marginLeft: marginLeftValue }, 1200); // 이미지 이동 속도를 늦춤
      } else {
        $(".ani" + (targetIndex + 1))
          .show(700)
          .animate({ marginLeft: marginLeftValue }, 700);
      }
    $(".marineanimal-ex.0" + (targetIndex + 1))
      .stop()
      .fadeIn(1000);

    var marginRightValue =
      targetIndex === 0 ? "3%" : targetIndex === 1 ? "5%" : "8%";
    $(".ani" + (targetIndex + 1))
      .show(700)
      .animate({ marginRight: marginRightValue }, 700);
  });
  $(".marineanimal-ex i.fa-xmark").on("click", function () {
    $(".ani1, .ani2, .ani3, .ani4")
      .hide(0)
      .css({ marginLeft: 0, marginRight: 0 }); // 모든 동물 요소를 숨김
    $(".marineanimal-ex").hide(0); // 모든 동물 설명을 숨김
  });
});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
  AOS.init();
  function clickEffect(e) {
    var d = document.createElement("div");
    d.className = "clickEffect";
    d.style.top = e.clientY + "px";
    d.style.left = e.clientX + "px";
    document.body.appendChild(d);
    d.addEventListener(
      "animationend",
      function () {
        d.parentElement.removeChild(d);
      }.bind(this)
    );
  }
  document.addEventListener("click", clickEffect);

  const itv = 500; // 물방울 생성 간격 || 단위 - ms
  const dur = 3000; // 물방울 속도 || 단위 - ms
  const byd = "100%"; // 물방울 올라가는 높이
  const sArray = [50, 56, 58, 50, 52]; // 물방울 크기 || 단위 - px

  function _0x4eee() {
    const _0x185aca = [
      "px;\x20height:",
      "7196178BXcsXP",
      "\x22\x20class=\x22bubble\x22\x20style=\x22left:\x20",
      "animate",
      "38904588mJxnKd",
      "6085701oTbffP",
      "length",
      "beforeend",
      "12XIKxQC",
      "DOMContentLoaded",
      "10IuyuMd",
      "2654968plDWOG",
      "1282SwOqdg",
      "3728430NScZtZ",
      ".bubbles",
      "clientWidth",
      "px;\x20width:\x20",
      "querySelector",
      "push",
      "21aLRykk",
      "<div\x20id=\x22",
      "157iSmmjP",
      "floor",
      "0.2",
      "insertAdjacentHTML",
      "11lVeIUU",
      "2106505hVIudK",
    ];
    _0x4eee = function () {
      return _0x185aca;
    };
    return _0x4eee();
  }
  function _0xb037(_0xbba905, _0x5ebf77) {
    const _0x4eee99 = _0x4eee();
    return (
      (_0xb037 = function (_0xb03745, _0x3f90db) {
        _0xb03745 = _0xb03745 - 0x139;
        let _0x2c55a1 = _0x4eee99[_0xb03745];
        return _0x2c55a1;
      }),
      _0xb037(_0xbba905, _0x5ebf77)
    );
  }
  const _0x37d759 = _0xb037;
  (function (_0x3edff4, _0x29fc0c) {
    const _0x1d2e07 = _0xb037,
      _0x2a1156 = _0x3edff4();
    while (!![]) {
      try {
        const _0x2c1f71 =
          (-parseInt(_0x1d2e07(0x149)) / 0x1) *
            (parseInt(_0x1d2e07(0x140)) / 0x2) +
          parseInt(_0x1d2e07(0x141)) / 0x3 +
          (-parseInt(_0x1d2e07(0x13c)) / 0x4) *
            (-parseInt(_0x1d2e07(0x14e)) / 0x5) +
          parseInt(_0x1d2e07(0x150)) / 0x6 +
          (parseInt(_0x1d2e07(0x147)) / 0x7) *
            (parseInt(_0x1d2e07(0x13f)) / 0x8) +
          (parseInt(_0x1d2e07(0x139)) / 0x9) *
            (-parseInt(_0x1d2e07(0x13e)) / 0xa) +
          (parseInt(_0x1d2e07(0x14d)) / 0xb) *
            (-parseInt(_0x1d2e07(0x153)) / 0xc);
        if (_0x2c1f71 === _0x29fc0c) break;
        else _0x2a1156["push"](_0x2a1156["shift"]());
      } catch (_0x45b239) {
        _0x2a1156["push"](_0x2a1156["shift"]());
      }
    }
  })(_0x4eee, 0xa6b3e),
    document["addEventListener"](_0x37d759(0x13d), function () {
      const _0x297bde = _0x37d759;
      let _0x37bc5d = [],
        _0x5abb75 = document[_0x297bde(0x145)](_0x297bde(0x142))[
          _0x297bde(0x143)
        ];
      for (let _0x1063b0 = 0x0; _0x1063b0 < _0x5abb75; _0x1063b0++) {
        _0x37bc5d[_0x297bde(0x146)](_0x1063b0);
      }
      function _0x56e090(_0x52005b) {
        const _0x46758b = _0x297bde;
        return _0x52005b[
          Math[_0x46758b(0x14a)](Math["random"]() * _0x52005b[_0x46758b(0x13a)])
        ];
      }
      setInterval(function () {
        const _0x2305c5 = _0x297bde;
        let _0x3dea2a = _0x56e090(sArray),
          _0x1ac175 = "t" + _0x56e090(_0x37bc5d);
        document[_0x2305c5(0x145)](_0x2305c5(0x142))[_0x2305c5(0x14c)](
          _0x2305c5(0x13b),
          _0x2305c5(0x148) +
            _0x1ac175 +
            _0x2305c5(0x151) +
            _0x56e090(_0x37bc5d) +
            _0x2305c5(0x144) +
            _0x3dea2a +
            _0x2305c5(0x14f) +
            _0x3dea2a +
            "px;\x22></div>"
        ),
          document["querySelector"]("#" + _0x1ac175)[_0x2305c5(0x152)](
            { bottom: byd, opacity: _0x2305c5(0x14b) },
            dur
          ),
          setTimeout(function () {
            const _0x5b8622 = _0x2305c5;
            document[_0x5b8622(0x145)]("#" + _0x1ac175)["remove"]();
          }, dur);
      }, itv);
    });

  // jelly 팝업창 둥둥떠다니는 효과
  // 범위 랜덤 함수(소수점 2자리까지)
  function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  }

  function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션)
    gsap.to(selector, random(1.5, 2.5), {
      y: size,
      repeat: -1, // -1 무한반복
      yoyo: true, // 애니메이션 되돌아오기(설정안할 시 끈킴)
      ease: Power1.easeInOut, // 타이밍함수
      delay: random(0, delay), // 지연시간
    });
  }
  floatingObject(".jelly", 1, 15);
});
