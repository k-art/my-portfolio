var viewportWidth = Math.max( $(window).width(), window.innerWidth);

$(document).ready(function() {

  if (viewportWidth <= 480) {
    $(".main-navigation").addClass("main-navigation_min");
  } else {
      $(".main-navigation").removeClass("main-navigation_min");
    };
});


$(window).on('load, resize', function mobileViewUpdate() {
    
    if (viewportWidth <= 480) {
        $(".main-navigation").addClass("main-navigation_min");
      
      $(".sandwich").click(function() {

        $(".sandwich").toggleClass("active");

        if ($(".sandwich").hasClass("active")) {
          $(".main-navigation_min").fadeIn(500);
        } else {
          $(".main-navigation").fadeOut(500);
        };
      });

      $("a").click(function() {
        $(".main-navigation_min").fadeOut(500);
        $(".sandwich").removeClass("active");
      });      
      
    } else {
      $(".main-navigation").removeClass("main-navigation_min");
    };
});