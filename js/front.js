var rd = rd || {};
  rd.init = function() {
    rd.initNavbar();
    rd.initWork();
    rd.scrollReveal();
    rd.initResetScroll();
  }

rd.initNavbar = function () {
  $(document).on('click', '.navbar-nav li a', function(e){
      e.preventDefault();
      var target = $($(this).attr('href'));
      var top = target.offset().top;
      $('html, body').animate({scrollTop: top - 68 }, 'easeInOutExpo', function(){
          var adjustedTop = target.offset().top;
          $('html, body').animate({scrollTop: adjustedTop - 68 });
      });
  });
};
 
rd.initWork = function () {
  $('.work-image').hover(
      function(){
          $(this).find('.caption').show();
      },
      function(){
          $(this).find('.caption').hide();
      }
  );
};

rd.initResetScroll = function(){
    setTimeout(function(){
        $(document).scrollTop(0);
    }, 300);
};

rd.scrollReveal = function(){
  window.sr = new scrollReveal();
}

$(function(){
    rd.init();
});