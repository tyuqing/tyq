$(function(){
  /*菜单栏*/
  $("#nav").click(function(e){
    var target = $(event.target);
    var targetId = target.attr("id");
    if(target.hasClass("act")) {
      return false;
    }else {
      $(".act").removeClass("act");
      target.addClass("act");
      if(targetId == "labout") {
        $("#bg-div").animate({"left": "0%"}, 1000);
        $("#content").animate({"left": "0%"}, 1000);
      }else if(targetId == "lresume") {
        $("#bg-div").animate({"left": "-88%"}, 1000);
        $("#content").animate({"left": "-88%"}, 1000);
      }else if(targetId == "lproject") {
        $("#bg-div").animate({"left": "-179%"}, 1000);
        $("#content").animate({"left": "-179%"}, 1000);
      }
    }
  });
});