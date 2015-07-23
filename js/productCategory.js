var fs = fs || {};
fs.init = function() {
    fs.navbarToggle();
};

fs.navbarToggle = function(){
    $('.navbar-header').on('click','button', function() {
        alert('meow');
        //$navbarGroup.find('.collapse.in').collapse('hide');
    });

};



$(function(){
    fs.init();
});