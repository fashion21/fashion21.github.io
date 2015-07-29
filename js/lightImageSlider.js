var fs = fs || {};
fs.imageSlider = function() {
    fs.productImageSlider();
};

fs.productImageSlider = function(){
    $('#product-img-slider').lightSlider({
        item: 5 ,
        auto: true,
        loop:true,
        enableDrag:true,
        responsive : [
            {
                breakpoint:1366,
                settings: {
                    item:4,
                    slideMargin:6
                }
            },
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMargin:6
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                }
            }
        ]
    });
    //$('#product-img-slider').lightSlider({
    //    item: 3,
    //    slideMargin: 20,
    //    auto: true,
    //    loop:true,
    //    enableDrag:true
    //});
};

$(function(){
    fs.imageSlider();
});