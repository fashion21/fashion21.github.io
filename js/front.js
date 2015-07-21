var fs = fs || {};
  fs.init = function() {
      fs.addActiveClass();
      fs.carouselImg();
      fs.categoryItems();
  }

fs.addActiveClass = function () {
  var $navbarMenu = $('.navbar-nav>li a');
  $navbarMenu.on('click', function(){
    $navbarMenu.removeClass('active');
    $(this).addClass('active');
  });
};

fs.carouselImg = function(){
    $('.carousel').carousel({
        interval: 3000

    });
    $('.carousel-indicators').find('li').css('display','none');
    $('.carousel-inner .item:first-child').addClass('active');
};

fs.categoryItems = function(){
    var containerHeight = $(document).height();
    $('.cover-items').find('.category-items').css('height','containerHeight');
};

$(function(){
    fs.init();
});