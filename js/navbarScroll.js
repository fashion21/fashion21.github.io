var fs = fs || {};
fs.navbar = function() {
    fs.navbarScroll();
};

//nav.navbar-default .container .navbar-nav li a img

fs.navbarScroll = function() {
    $(window).scroll(function () {
        if($(window).scrollTop() >= $('#video').offset().top - 465){
            //alert('MEOW');
            $('nav.navbar-default').css('height','65px');
            $('.navbar-nav').css('margin-top','26px');
            $('.navbar-nav li a').find('img').css({
                'height': '30px',
                'margin-top': '-11px'
            });


        }
        else if($(window).scrollTop() <= $('#video').offset().top - 465){
            $('nav.navbar-default').css('height', '87px');
            $('.navbar-nav').css('margin-top','37px');
            $('.navbar-nav li a').find('img').css({
                'height': '40px',
                'margin-top': '-15px'
            });
        }
    });
};

$(function(){
    fs.navbar();
});
