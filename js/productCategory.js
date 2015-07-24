var fs = fs || {};
fs.init = function() {
    fs.navbarToggle();
};

fs.navbarToggle = function(){
    $('.navbar-header').on('click','button', function() {
        //if($('#navbar-category-collapse .navbar-collapse .collapse').hasClass('in')){
        //    alert('meow');
        //    $('#navbar-menu-collapse .navbar-collapse .collapse.in').removeClass('in');
        //}
        //else if($('#navbar-menu-collapse .navbar-collapse .collapse').hasClass('in')){
        //    $('#navbar-category-collapse .navbar-collapse .colapse.in').removeClass('in');
        //    alert('meow');
        //}
        var categoryButton = $("#category-button");
        var menuButton = $("#menu-button");
        if($(this)[0] == categoryButton[0]){
            if($("#navbar-menu-collapse").hasClass("navbar-collapse collapse in")){
                menuButton.click();
            }
        }
        else if($(this)[0] == menuButton[0]){
            if($("#navbar-category-collapse").hasClass("navbar-collapse collapse in")){
                categoryButton.click();
            }
        }
    });

};


$(function(){
    fs.init();
});