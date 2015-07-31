var fs = fs || {};
fs.imageSlider = function() {
    fs.productImageSlider();
};

fs.productImageSlider = function(){
    var autoPlaySlider = $('#product-img-slider').lightSlider({
        item: 5,
        controls: true,
        speed: 2000,
        pause: 4000,
        auto: true,
        loop:true,
        enableDrag:false,
        responsive : [
            {
                breakpoint:1366,
                settings: {
                    item:4,
                }
            },
            {
                breakpoint:800,
                settings: {
                    item:3,
                    enableDrag:true
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    enableDrag:true
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
    fs.imageSlider();
});