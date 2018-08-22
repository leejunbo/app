$("#domain_0").blur(function(){
  $(this).parent().find(".vb").remove();
  if($(this).attr("id")=="domain_0"){
    if(this.value==""){
      $(this).parent().append("<span class='vb onError' style='color:red;'>请输入域名！</span>");
    }
  };
}).keyup(function(){
  $(this).triggerHandler("blur");
});
$("#ip_0").blur(function(){
  var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  $(this).parent().find(".vb").remove();
  if($(this).attr("id")=="ip_0"){
    if(this.value==""){
      $(this).parent().append("<span class='vb onError' style='color:red;'>请输入IP！</span>");
    }else if(!reg.test(this.value)){$(this).parent().append("<span class='vb onError' style='color:red;'>IP格式不正确！</span>");}
    
  };
}).keyup(function(){
  $(this).triggerHandler("blur");
});

$("#port_0").blur(function(){
  $(this).parent().find(".vb").remove();
  if($(this).attr("id")=="port_0"){
    if(this.value==""){
      $(this).parent().append("<span class='vb onError' style='color:red;'>请输入端口!</span>");
    }
  };
}).keyup(function(){
  $(this).triggerHandler("blur");
});
