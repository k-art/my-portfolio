// Фиксированная шапка при скролле

$(document).ready(function() {
  
  checkSize();
  $(window).resize(checkSize);
  
  $(".main-navigation").removeClass("main-navigation_fixed");
  
  function checkSize() {
  
    if (window.matchMedia('(min-width: 480px)').matches) {

      $(window).scroll(function() {

        if ($(this).scrollTop() > 82) {
            $(".main-navigation").addClass("main-navigation_fixed").fadeIn('fast');
        } else {
            $(".main-navigation").removeClass("main-navigation_fixed").fadeOUt('fast');
        };
      });
    } else {
      $(".main-navigation").removeClass("main-navigation_fixed");
    };
  };
});