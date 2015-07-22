var fs = fs || {};
  fs.init = function() {
      fs.addActiveClass();
      fs.carouselImg();
      fs.categoryItems();
      fs.facebookPageWidget();
      fs.facebookLikeWidget();
      fs.instagramWidget();
      fs.categoryItemHover();
  }

fs.categoryItemHover = function(){
    $('.category-container .category-title').on('mouseenter', function(){
        $(this).css('opacity', '1');
    });
    $('.category-container .category-title').on('mouseleave', function(){
        $(this).css('opacity','0');
    });

};



fs.instagramWidget = function(){
    $.getScript('http://instagramfollowbutton.com/components/instagram/v2/js/ig-follow.js', function(d,t){
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        s.parentNode.insertBefore(g,s);
    }(document,"script"));
};

fs.facebookLikeWidget = function(){
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
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