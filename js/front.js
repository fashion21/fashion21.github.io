$(document).ready(function () {
    //navbar on scroll
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });

    //Landing page carousel
    var swiper1 = new Swiper('#cover-slider',{
        autoplay: {
            delay: 6000,
            disableOnInteraction: false
        },
        speed: 300,
        grabCursor: false,
        preventInteractionOnTransition: true,
        noSwiping: true,
        noSwipingSelector: "#cover-slider",
        loop: true
    });

    var swiper2 = new Swiper('#promo-slider', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        preloadImages: false,
        lazy: true,
        autoplay: {
            delay: 8000,
            disableOnInteraction: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

});

$(window).on("load",function () {




    //Instagram Feed
    var feed = new Instafeed({
        get: 'user',
        userId: '1162756535',
        clientId: '0cd51b94022a49f0be1e4b114f24a9ea',
        accessToken: '1162756535.0cd51b9.7b8b57dd36494ff08f9e4e5c976742b7',
        sortBy: 'most-recent',
        limit: 20,
        template: '<div class="swiper-slide"><a href="{{link}}" target="_blank"><img class="img-responsive center-block" src="{{image}}" /></a></div>',
        resolution: 'standard_resolution',
        after: function () {
            var swiper3 = new Swiper('.instagram-slider', {
                slidesPerView: 6,
                spaceBetween: 0,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: true
                }
            });
        }
    });
    feed.run();

    //Best seller on hover
    var bestSellerLink = $(".best-seller-link");

    bestSellerLink.on("mouseover",function () {
        $(this).find(".bg-overlay").css("opacity","1");
    });

    bestSellerLink.on("mouseout",function () {
        $(this).find(".bg-overlay").css("opacity","0");
    });


    // Initialize
    var bLazy = new Blazy();




});