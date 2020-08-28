var fs = fs || {}
    fs.instagram = function(){
        fs.runInstagramFeed();
    };

fs.runInstagramFeed = function () {
    $.getScript('/js/instafeed.min.js', function () {
        if (Instafeed) {
            new Instafeed({
                accessToken: 'IGQVJYRjVqSWQyUmxLUDNZAVFlwaTRLSEFCalc5ZAGZAJZAFEwM0FpSk9VYXNzZA3NpSTZAXU3NCaGc1dC1VZAmxEc2wxNTZA6TEFqOC00bnpSdmVoLUdkYmVpX1ZAxUVdQYnZAFUG14cThSNFV5NEpmN3k2ekZAXdQZDZD',
                limit: 8,
                sortBy: 'most-recent',
                template: '<a href="{{link}}" target="_blank" class="col-md-2 col-sm-2 col-xs-6"><img src="{{image}}" /></a>',
                success: function(feed){
                    var data = feed.data.reverse();
                    $('.placeholder').each(function(index, placeholder){
                        var model = data.pop();
                        $(placeholder).html('<a href="'+ model.link +'" target="_blank">'
                            + '<img src="'+ model.images.low_resolution.url +'" /></a>').hide().fadeIn();
                    });
                }
            }).run();
        }
    });
};

$(function(){
    fs.instagram();
});