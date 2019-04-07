

//刚进入页面，部分模块隐藏
$(".aside-wrap").hide();//登录注册模块
$(".have-p").hide();//登录模块中有账户，此时显示没有账户

var islogin;//标记用户是否登录

if(localStorage.getItem('islogin') == null){
	islogin = false;
}else{
	islogin = true;
}

if(!islogin){//未登录时显示登录注册
	$(".login-li").show();
	$(".self-li").hide();
}else{//登录时显示个人中心
	$(".self-li").show();
	$(".login-li").hide();
}

//旅客故事的切换
$("#ul-li-l li").mouseover(function(){
	var index = $(this).index();
	$(this).css("background-color","#f0546a");
	$(this).siblings().css("background-color","white");
	play(index);
});

function play(index){
	$(".story-l div").eq(index).show();
	$(".story-l div").eq(index).siblings().hide();
}

//房东故事的切换
$("#ul-li-f li").mouseover(function(){
	var index = $(this).index();
	$(this).css("background-color","#f0546a");
	$(this).siblings().css("background-color","white");
	playf(index);
});

function playf(index){
	$(".story-f div").eq(index).show();
	$(".story-f div").eq(index).siblings().hide();
}

//登录注册交互

$(".login-li").click(function() {
	$(".aside-wrap").show();
	$(".aside-wrap").show();
});
//阻止冒泡
$("aside").click(function(e){
	e.stopPropagation();
})

//选择登录还是注册
$("#lg-top p").click(function(){
	var index = $(this).index();
	if(index == 1){//注册
		$(".no-p").hide().siblings().show();//隐藏没有账户，显示有账户
		$('aside').css({'height':'540px'});
	}else{//登录
		$(".have-p").hide().siblings().show();//隐藏有账户，显示没有账户
		$('aside').css({'height':'400px'});
	}
	$(".lg-bottom form").eq(index).show().siblings().hide();
	$(this).addClass('border-bot').siblings().removeClass('border-bot');
});

//点击已有账户，显示登录
$(".have-p .have-login").click(function(){
	$(".have-p").hide().siblings().show();//隐藏有账户，显示没有账户
	$(".lg_form").show().siblings().hide();
	$("#user-reg").removeClass('border-bot');
	$("#user-login").addClass('border-bot');
	$('aside').css({'height':'400px'});
});
//点击没有账户，显示注册
$(".no-p .have-login").click(function(){
	$(".no-p").hide().siblings().show();//隐藏没有账户，显示有账户
	$(".rgs_form").show().siblings().hide();
	$("#user-login").removeClass('border-bot');
	$("#user-reg").addClass('border-bot');
	$('aside').css({'height':'540px'});
});

// 点击空白处，登录注册隐藏
$(".aside-wrap").click(function(){
	$(this).hide();
});
//点击x隐藏登录注册
$(".cancel-btn").click(function(){
	$(".aside-wrap").hide();
});

//点击登录
$(".login-btn").click(function(){
	islogin = true;//标记为已登录
	$(".aside-wrap").hide();
	$(".self-li").show();
	$(".login-li").hide();
});

//点击注册
$(".reg-btn").click(function(){
	console.log(222);
	$(".lg_form").show().siblings().hide();
	$("#user-reg").removeClass('border-bot');
	$("#user-login").addClass('border-bot');
	$('aside').css({'height':'400px'});
});