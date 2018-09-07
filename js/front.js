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
        loop: true,
        autoplay: {
            delay: 8000,
            disableOnInteraction: true
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev'
        // }
    });

    var swiper2 = new Swiper('#promo-slider', {
        slidesPerView: 3,
        spaceBetween: 5,
        loop: true,
        preloadImages: false,
        lazy: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: true
        },

        breakpoints: {
            1200: {
                slidesPerView: 2
            },
            991: {
                slidesPerView: 1
            }
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });

});

$(window).on("load",function () {
    //Instagram Feed
    var feed = new Instafeed({
        get: 'user',
        userId: '1689161645',
        clientId: 'd32935f4eb1d4a2aa7ce432cbcfa9bee',
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
                    }
                }
            });
        }

    });
    feed.run();

    var categoryLink = $(".category-link");
    categoryLink.on("mouseenter", function () {
        console.log("MOUSE ENTER");
        categoryLink.not(this).find(".bg-overlay").css('opacity','1');
    });
    categoryLink.on("mouseout", function () {
        console.log("MOUSE OUT");
        $(this).find(".bg-overlay").css('opacity','0');
        categoryLink.not(this).find(".bg-overlay").css('opacity','0');
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

    //video on click
    var videoButton = $('.video-button');
    var videoContainer = $('#video-bg');
    var videoIframeContainer = $('#iframe-video');
    var videoMenuContainer = $("#video .content-container #video-bg .video-content-container");
    var videoOverlay = $("#video .content-container #video-bg .video-overlay");

    videoButton.on('click', function(){
        videoContainer.css('display','none');
        videoOverlay.css('display','none');
        videoMenuContainer.css('display','none');
        videoIframeContainer.css('display','block');
        videoIframeContainer.append('<iframe src="https://www.youtube.com/embed/fixogdOAF8g?autoplay=1&fs=0&rel=0&showinfo=0" allowfullscreen="allowfullscreen" width="100%" height="100%" frameborder="0"></iframe> ');
    });





});