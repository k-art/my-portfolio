//sandwich-menu


$(".sandwich").click(function() {
  $(".sandwich").toggleClass("active");
  
  if ($(".sandwich").hasClass("active")) {
    $(".main-navigation_min").fadeIn(500);
  } else {
    $(".main-navigation_min").fadeOut(500);
  };
  
});




//  $(".sandwich").click(function() {
//    if ($(".main-navigation").hasClass("main-//navigation_min")) {
//      $(".main-//navigation").removeClass("main-//navigation_min").fadeOut(500);
//    } else {
//      $(".main-navigation").addClass("main-//navigation_min").fadeIn(500);
//    };
//  });

