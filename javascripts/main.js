$(function(){
  /*菜单栏*/
  $("#nav").click(function(e){
    var target = $(event.target);
    if(target.hasClass("act")) {
      return false;
    }else {
      $(".act").removeClass("act");
      target.addClass("act");
    }
  });
});