
window.onload = function(){

	var houseInfo = {
		
	}

	//confirm('您还未进行登录，请先登录！');
//未登录情况下进行出租，先提示进行登录，才能继续操作
if(localStorage.getItem('islogin') == null || localStorage.getItem('islogin') == false){
	
	//console.log(localStorage.getItem('islogin'));

	$('.confirm_wrap').show();
	$('.confirm_box').show(function(){
		$(this).animate({"top":"200px","right":"500px"},500);
	});

	$('.toLogin').click(function(){
		$('.confirm_box').hide();
		$(".confirm_wrap").hide();
		$('.aside-wrap').show();
	});

	$('.toHome').click(function(){
		$('.confirm_box').hide();
		$('.confirm_wrap').hide();
		window.location.href = 'file:///E:/%E6%AF%95%E8%AE%BE/gitfile/Youjia/home.html';
	});
}

$('.addAdressBtn').click(function(){
	var inputs = 
})
}

