var fs = fs || {};
fs.productItem = function() {
    fs.categoryNav();
    fs.productImageSlider();
    fs.colorPicker();
};

fs.colorPicker = function() {
    var biggestHeight = "0";
    var biggestWidth = "0";
    $(".color-picker-container *").each(function(){
        if ($(this).height() > biggestHeight ) {
            biggestHeight = $(this).height()
        }
        if ($(this).width() > biggestWidth ) {
            biggestWidth = $(this).width()
        }
    });

    $(".color-picker-container").height(biggestHeight);
    $(".color-picker-container").width(biggestWidth);
    console.log("big h: " + biggestHeight);
    console.log("big : " + biggestWidth);

    var colorOptions = $(".swatches .swatch");
    var previewColor = $("#preview-color");

    colorOptions.on('click', function(){
        previewColor.css('background-color', $(this).css('background-color'))
    });

    colorOptions.popover({
        trigger: 'hover',
        placement: 'bottom'
    })
};

fs.categoryNav = function() {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });
};

fs.productImageSlider = function(){
    var autoPlaySlider = $('#product-img-slider').lightSlider({
        item: 5,
        controls: false,
        speed: 2000,
        pause: 4000,
        auto: true,
        loop:true,
        enableDrag:true,
        responsive : [
            {
                breakpoint:1366,
                settings: {
                    item:3,
                }
            },
            //{
            //    breakpoint:800,
            //    settings: {
            //        item:3,
            //    }
            //},
            {
                breakpoint:480,
                settings: {
                    item:1,
                }
            }
        ]
    });
    $('#product-img-slider').on('mouseenter',function(){
        autoPlaySlider.pause();
    });
    $('#product-img-slider').on('mouseleave',function(){
        autoPlaySlider.play();
    });
};


$(function(){
    fs.productItem();
})