var fs = fs || {};
fs.init = function() {
    fs.loadStoreLocatorMap();
    fs.mobileAddressScroller();
    fs.resetMap();
};

fs.loadStoreLocatorMap = function(){

};

fs.resetMap = function(){
    $("#reset-map").click(function(){
        $("#bh-sl-address").val("");
    });
};

fs.mobileAddressScroller = function(){
    if ($('#auto-scroll-mobile').is(':hidden')) {
        $(".bh-sl-loc-list").on('click', 'ul', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $("#bh-sl-map").offset().top - 98
            },'slow');
        });
    }
};

$(function(){
    fs.init();
});