$(function(){
  /*菜单栏*/
  $("nav").click(function(e){
    var target = $(event.target);
    var targetId = target.attr("id");
    if(target.hasClass("act")) {
      return false;
    }else {
      $(".act").removeClass("act");
      target.addClass("act");
      if(targetId == "nav-about") {
        $("#bg-card").animate({"left": "0%"}, 1000);
        $("#content").animate({"left": "0%"}, 1000);
      }else if(targetId == "nav-resume") {
        $("#bg-card").animate({"left": "-88%"}, 1000);
        $("#content").animate({"left": "-88%"}, 1000);
      }else if(targetId == "nav-project") {
        $("#bg-card").animate({"left": "-179%"}, 1000);
        $("#content").animate({"left": "-179%"}, 1000);
      }
    }
  });
});