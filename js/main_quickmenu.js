window.addEventListener("load", function() {
  $(window).scroll(function(){
    var sec3Top = $(".sea").offset().top;
    if($(this).scrollTop() > sec3Top){
      $('.fixedmenu a').addClass("active");
    }else{
      $('.fixedmenu a').removeClass("active");
    }
  });
});