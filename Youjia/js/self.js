
//全局变量，标记当前显示的模块
var index;
//个人页面进入时显示个人资料
$('.user-info-li').show();

//右边导航栏动画效果
window.onload = function(){
	var time = 500;
	$('.cont-bot-left ul').animate({"left":"0px"},{"duration":time});
	$('.cont-bot-rigth ul').animate({"right":"0px","top":"0px"},{"duration":time});
	$('.cont-bot-left ul li').each(function(index,element){
		time += 50*index;
		$(this).animate({"top":0},{"duration":time})
	});
}

//点击右边导航，实现模块切换
$('.cont-bot-left ul li').click(function(){
	$(this).addClass('ccc').siblings().removeClass('ccc');
	index = $(this).index();
	console.log($('.cont-bot-rigth ul').children('li'));
	$('.cont-bot-rigth ul').children('li').eq(index).show().siblings().hide();
});

//个人信息模块，点击编辑可进行编辑
//初始下不可编辑，只有点击编辑之后才可编辑
$('.cont-bot-rigth input').attr('disabled',true);
//初始情况下隐藏保存

//点击编辑
$('.edit').click(function(){
	
	//设置当前为可编辑
	$(this).parent().parent().children('div').children('p').children('input').attr('disabled',false).addClass('ed');
	$(this).hide();//隐藏编辑
	$(this).siblings('.save').show();//显示保存
})
//点击保存
$('.save').click(function(){
	//设置当前为不可编辑
	$(this).parent().parent().children('div').children('p').children('input').attr('disabled',true).removeClass('ed');
	$(this).hide();//隐藏保存
	$(this).siblings('.edit').show();//显示编辑
})

