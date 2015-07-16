var fs = fs || {};
  fs.init = function() {
      fs.addActiveClass();
  }

fs.addActiveClass = function () {
  var $navbarMenu = $('.navbar-nav>li a');
  $navbarMenu.on('click', function(){
    $navbarMenu.removeClass('active');
    $(this).addClass('active');
  });
};

$(function(){
    fs.init();
});