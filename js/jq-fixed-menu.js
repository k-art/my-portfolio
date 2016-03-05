// Фиксированная шапка при скролле

$(document).ready(function() {
  
  $(".main-navigation").removeClass("main-navigation_fixed");
  
  $(window).scroll(function() {
    
    if ($(this).scrollTop() > 82) {
        $(".main-navigation").addClass("main-navigation_fixed").fadeIn('fast');
    } else {
        $(".main-navigation").removeClass("main-navigation_fixed").fadeIn('fast');
    };
  });
});