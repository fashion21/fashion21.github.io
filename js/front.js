var fs = fs || {};
  fs.init = function() {
      fs.addActiveClass();
      fs.carouselImg();
      fs.categoryItems();
      fs.categoryItemHover();
  };

fs.categoryItemHover = function(){
    $('.category-container .category-title').on('mouseenter', function(){
        $(this).css('background', 'rgba(0,0,0,0.3');
        $(this).find('h3').css('opacity','0');
        $(this).find('p').css('opacity','1');
    });
    $('.category-container .category-title').on('mouseleave', function(){
        $(this).css('background', 'rgba(0,0,0,0.7');
        $(this).find('p').css('opacity','0');
        $(this).find('h3').css('opacity','1');
    });
};

fs.addActiveClass = function () {
  var $navbarMenu = $('.navbar-nav>li a');
  $navbarMenu.on('click', function(){
    $navbarMenu.removeClass('active-text');
    $(this).addClass('active-text');
  });
};

fs.carouselImg = function(){
    $('.carousel').carousel({
        interval: 3000
    });
    //$('.carousel-indicators').find('li').css('display','none');
    $('.carousel-inner .item:first-child').addClass('active');
};

fs.categoryItems = function(){
    var containerHeight = $(document).height();
    $('.cover-items').find('.category-items').css('height',containerHeight);
};

$(function(){
    fs.init();
});