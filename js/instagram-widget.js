var fs = fs || {}
    fs.instagram = function(){
        fs.runInstagramFeed();
    };

fs.runInstagramFeed = function () {
    $.getScript('/js/instafeed.min.js', function () {
        if (Instafeed) {
            new Instafeed({
                accessToken: 'IGQVJXbjg2UFpJQUphMmVfT1gxbUxISUVzNU1aZAklsX1Y4QUs3dGJycUdfMVoyME1YWTJERVB6c1g2dXFsVEp6eEFSNFRZAOENtbzBUdEE0MUl0c1FOcHAydG84MFk4bkpYQnkzcHB4NVQ5MmhRYWlnRgZDZD',
                limit: 8,
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