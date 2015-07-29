var fs = fs || {};
fs.navbar = function() {
    fs.navbarScroll();
};

//nav.navbar-default .container .navbar-nav li a img

fs.navbarScroll = function() {
    var navbarDefault = $('nav.navbar-default');
    var navbarNav = $('.navbar-nav');
    var navbarImg = $('.navbar-nav li a').find('img');
    $(window).scroll(function () {
        if($(window).scrollTop() >= $('nav').outerHeight() + 100){
            navbarDefault.css('height','65px');
            navbarNav.css('margin-top','26px');
            navbarImg.css({
                'height': '30px',
                'margin-top': '-11px'
            });
        }
        else if($(window).scrollTop() <= $('nav').outerHeight() + 100){
            navbarDefault.css('height', '87px');
            navbarNav.css('margin-top','37px');
            navbarImg.css({
                'height': '40px',
                'margin-top': '-15px'
            });
        }
    });
};

$(function(){
    fs.navbar();
});
