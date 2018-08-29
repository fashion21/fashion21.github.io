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
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // },
        speed: 300,
        grabCursor: false,
        preventInteractionOnTransition: true,
        noSwiping: true,
        noSwipingSelector: "#cover-slider",
        loop: true
        // autoplay: {
        //     delay: 6000,
        //     disableOnInteraction: true
        // }
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev'
        // }
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
        userId: '1689161645',
        clientId: '9ac414ea8c2742ceab562dd493eac687',
        accessToken: '1689161645.1677ed0.ea65a8b02aff46c996485bc1aceeb6ad',
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
                    delay: 4000,
                    disableOnInteraction: true
                },
                breakpoints: {
                    1280: {
                        slidesPerView: 5
                    },
                    1024:{

                        slidesPerView: 4
                    },
                    768: {
                        slidesPerView: 3
                    },
                    640: {
                        slidesPerView: 2
                    },
                    320: {
                        slidesPerView: 1
                    }
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
    var blazy = new Blazy({
        breakpoints: [{
            src: 'data-src'
        }],
        success: function(element){
            setTimeout(function(){
                var parent = element.parentNode;
                parent.className = parent.className.replace(/\bloading\b/,'');
            }, 200);
        }
    });



});