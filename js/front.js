var rd = rd || {};
  rd.init = function() {
      rd.addActiveClass();
  }

rd.addActiveClass = function () {
  $(".navbar-nav>li").on('click', "a", function(){
    $(".navbar-nav .active").removeClass("active");
    $(this).addClass("active");
  });
};

//$(document).ready(function () {
//    $("ul.art-hmenu>li").on("click", "a", function (event) {
//        debugger;
//        $("#menu_wrapper .active").removeClass("active");
//        $(this).addClass("active");
//    });
//});



$(function(){
    rd.init();
});