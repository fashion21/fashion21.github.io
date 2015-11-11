var fs = fs || {}
    fs.instagram = function(){
        fs.runInstagramFeed();
    };

fs.runInstagramFeed = function () {
    $.getScript('/js/instafeed.min.js', function () {
        if (Instafeed) {
            new Instafeed({
                get: 'tagged',
                tagName: 'fashion21_cosmetics',
                clientId: '9ac414ea8c2742ceab562dd493eac687',
                limit: 8,
                sortBy: 'most-recent',
                template: '<a href="{{link}}" target="_blank" class="col-md-2 col-sm-2 col-xs-6"><img src="{{image}}" /></a>',
                resolution: 'low_resolution',
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