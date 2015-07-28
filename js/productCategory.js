var fs = fs || {};
fs.init = function() {
    fs.navbarToggle();
};

fs.navbarToggle = function(){
    $('.navbar-mobile').on('click','button,a', function() {
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