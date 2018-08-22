$("#domain").blur(function(){
  $(this).parent().find(".vb").remove();
  if($(this).attr("id")=="domain"){
    if(this.value==""){
      $(this).parent().append("<span class='vb onError' style='color:red;'>必填选项!</span>");
    }
  };
}).keyup(function(){
  $(this).triggerHandler("blur");
});
$("#ip").blur(function(){
  var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  $(this).parent().find(".vb").remove();
  if($(this).attr("id")=="ip"){
    if(this.value==""){
      $(this).parent().append("<span class='vb onError' style='color:red;'>必填选项！</span>");
    }else if(!reg.test(this.value)){$(this).parent().append("<span class='vb onError' style='color:red;'>IP格式不正确！</span>");}
    
  };
}).keyup(function(){
  $(this).triggerHandler("blur");
});

$("#port").blur(function(){
  $(this).parent().find(".vb").remove();
  if($(this).attr("id")=="port"){
    if(this.value==""){
      $(this).parent().append("<span class='vb onError' style='color:red;'>必填选项!</span>");
    }
  };
}).keyup(function(){
  $(this).triggerHandler("blur");
});
