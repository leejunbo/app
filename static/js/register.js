function register_login() {
	    if($("#clause")[0].checked==true) {
     	//$("#msg").text("请接受条款注册");
     	$("#msg").html("<i class=\"icon-minus-sign\"></i> 请接受条款注册");
   }else{

        }
}
function resetInput(event){
	var input = $(event.target).parent().prev("input");
	input.val("");
	$(event.target).parent(".i-clear").hide();
	input.focus();
}