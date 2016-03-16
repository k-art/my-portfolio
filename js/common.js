//check on resize

$(document).ready(function() {
  checkSize();
  $(window).resize(checkSize);
});

function checkSize(){
  if ($('.sandwich').css('display') == 'none') {
    $('.main-navigation').css({'display': 'block'});
  } else {
    $('.main-navigation').css({'display': 'none'});
  }
}

//sandwich-menu 
$('.sandwich').on('click', function() {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('.main-navigation').fadeIn(500);
  } else {
    $('.main-navigation').fadeOut(500);
  };
});

$('.main-navigation').on('click', 'a', function() {
  
});
