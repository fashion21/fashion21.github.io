var fs = fs || {};
  fs.init = function() {
      fs.addActiveClass();
      fs.carouselImg();
      fs.categoryItems();
      fs.facebookPageWidget();
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

fs.facebookPageWidget = function(){
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
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