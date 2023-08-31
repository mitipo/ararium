window.addEventListener("load", function() {
  $(window).scroll(function(){
    var sec3Top = $(".visual").offset().top;
    var sec3Bottom = sec3Top + $(".visual").height();
    if($(this).scrollTop() > sec3Top && $(this).scrollTop() < sec3Bottom){
      $('.fixedmenu a').addClass("active");
    }else{
      $('.fixedmenu a').removeClass("active");
    }
  });
});