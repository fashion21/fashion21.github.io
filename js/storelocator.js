var fs = fs || {};
fs.init = function() {
    fs.loadStoreLocatorMap();
    fs.mobileAddressScroller();
};

fs.loadStoreLocatorMap = function(){
    $('#map-container').storeLocator({
        'fullMapStart' : true,
        'dataType': 'json',
        'dataLocation': 'data/locations.json',
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