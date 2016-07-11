var fs = fs || {};
fs.init = function() {
    fs.navbarToggle();
};

fs.navbarToggle = function(){
    $('.navbar-mobile').on('click','button,a', function() {
        var categoryButton = $("#category-button");
        var categoryCollapse = $("#navbar-category-collapse");
        var menuButton = $("#menu-button");
        var menuCollapse = $("#navbar-menu-collapse");
        if($(this)[0] == categoryButton[0]){
            if(menuCollapse.hasClass("navbar-collapse collapse in")){
                menuCollapse.collapse("hide")
            }
        }
        else if($(this)[0] == menuButton[0]){
            if(categoryCollapse.hasClass("navbar-collapse collapse in")){
                categoryCollapse.collapse("hide");
            }
        }
    });

};

$(function(){
    fs.init();
});