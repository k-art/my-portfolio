//scroll

$(document).ready(function(){
  $('a[href^="#"], a[href^="."]').on('click', function() { // если в href начинается с # или ., то ловим клик
    
    //sandwich-show-hide
    if ($('.sandwich').css('display') == 'block') {
      if ($('.main-navigation').css({'display': 'block'})) {
          $('.main-navigation').fadeOut(500);
          $('.sandwich').removeClass('active');
          }
    }

    
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
    
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700); // анимируем скроолинг к элементу scroll_el
    }
    
    return false; // выключаем стандартное действие
  });
});