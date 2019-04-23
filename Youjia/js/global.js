
//全局变量，记录显示的民宿Id
var showIndex = '';

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


function rili(){
	var clickNum = 0;
//实际的今天日期
var date = new Date();

//如果点击上下个月，记录月份差
var num = 0;
var preMonth = document.getElementById('preMonth');
var nextMonth = document.getElementById('nextMonth');

calender(date,num);

preMonth.onclick = function(){
	date = new Date();
	num--;
	calender(date,num);
}
nextMonth.onclick = function(){
	date = new Date();
	num++;
	calender(date,num);
}



function selectDay(){
	$(".datelist li").click(function(){
	//console.log(111111);
	clickNum++;
	var inputVal="";

	var dateStr = $('#title').text();//获取日历的年月
	var year = dateStr.substring(0,dateStr.indexOf('年'));
	var month = dateStr.substring(dateStr.indexOf('年')+1,dateStr.indexOf('月'));
	var selectDay = $(this).text();//获取点击的号数

	if(clickNum % 2 ==1){//第一次点击，选择入住日期
		inputVal = year +'/'+ month +'/'+selectDay;

	}else{//第二次点击，选择退房日期，并隐藏日历
		inputVal = $(".selectDate").val();
		inputVal += '~' + year +'/'+ month +'/'+selectDay;
		$('.date-wrap').hide();
	}
	
	$(".selectDate").val (inputVal) ;	
});
}

function calender(date,num){
	var title = document.getElementById("title");
	var datelist = document.getElementById('datelist');
	var str="";//日期字符串

	//更改日期到指定月份，默认是当月，num=0
	date.setMonth(date.getMonth() + num);

	//获取当前选中日期
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	//设置日期
	title.innerHTML = year +'年'+ month +'月';

	date.setDate(1);//把时间调到本月1号，以查看是星期几
	var index = date.getDay();

	date.setMonth(month+1,0);//时间调到本月最后一天，即下月的第0天，自动回退到本月的最后一天
	var alldays = date.getDate();
	for(var i=0;i<index;i++){
		str +="<li class='disabled'></li>";
	}

	for(i=1;i<=alldays;i++){

		if((i < day && num == 0) || num < 0){//今天之前

			if((index+i)%7 == 0 || (index+i)%7 == 1){//周末
				str += '<li class="disabled xiuxi">'+ i +'</li>';
			}else{//非周末
				str += '<li class="disabled">'+ i +'</li>';
			}
			
		}else if(i == day && num==0){//今天
			str += '<li class="today">'+ i +'</li>';
			
		}else{//今天之后
			if((index+i)%7 == 0 || (index+i)%7 == 1){//周末
				str += '<li class="xiuxi">'+ i +'</li>';
			}else{//非周末
				str += '<li>'+ i +'</li>';
			}
			
		}

		
		
	}
	datelist.innerHTML = str;
	selectDay();
}
}