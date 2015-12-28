$(function(){
  /*菜单栏*/
  $("nav").click(function(e){
    var target = $(event.target);
    var targetId = target.attr("id");
    if(target.hasClass("act")) {
      return false;
    }else {
      target.siblings(".act").removeClass("act");
      target.addClass("act");
      if(targetId == "nav_about") {
        $("#bg_card").animate({"left": "0%"}, 1000);
        $("#content").animate({"left": "0%"}, 1000);
      }else if(targetId == "nav_skill") {
        $("#bg_card").animate({"left": "-88%"}, 1000);
        $("#content").animate({"left": "-88%"}, 1000);
      }else if(targetId == "nav_project") {
        $("#bg_card").animate({"left": "-179%"}, 1000);
        $("#content").animate({"left": "-179%"}, 1000);
      }
    }
  });
  /* 作品的菜单栏 */
  $('#proj_menu').click(function(e) {
    var target = $(event.target);
    var targetId = target.attr("id");
    if(target.hasClass("active")) {
      return false;
    }else {
      target.siblings(".active").removeClass("active");
      target.addClass("active");
      $(".proj-body").addClass("hidden");
      /*所点按钮对应的项目内容*/
      var targetProjBody = $("#" + targetId.replace("menu_", ""));
      targetProjBody.removeClass("hidden");
    }
  });
  /* 作品图片的选择菜单栏 */
  $('.proj_img_control').click(function(e) {
    var target = $(event.target);
    var targetId = target.attr("id");
    if(target.hasClass("current")) {
      return false;
    }else {
      target.siblings(".current").removeClass("current");
      target.addClass("current");
    }
  });
});