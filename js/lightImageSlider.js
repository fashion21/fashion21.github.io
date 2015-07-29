var fs = fs || {};
fs.init = function() {
    fs.productImageSlider();
};

fs.productImageSlider = function(){
    $('#product-img-slider').lightSlider({
        item:3,
        slideMargin:10,
        auto: true,
        loop:true,
        enableDrag:true
    });
};

$(function(){
    fs.init();
});