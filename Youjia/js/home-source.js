
//获取数据，渲染到房源页面

//初始状态，显示16个房源，加载更多后显示更多
var shouNum = 16;

$.getJSON('static/homeSource.json',function(data){
	
	var house = data.source;

	var hot_wrap = document.querySelector('.hot-wrap');
	var post = document.creatDocumentFragement;

	$.each(house,function(index,item){

		var _html = `

			<div class="post">
						<div class="post-top">
							<a href="javascript:;">
								<img src=${item.src[0]} alt="" />
							</a>
							<h3>
								<i class="iconfont icon-meiyuan"></i>
								<span>${item.price}</span>
							</h3>
							<span class='unlike'>
								<i class="iconfont icon-shoucang"></i>
							</span>
						</div>
						<div class="post-bot">
							<h4>
								<span>${item.houseName}</span>
								<a href="#">
									<i class="iconfont icon-didian"></i>
									<span>${item.address}</span>
								</a>
							</h4>
							<ul class = 'rentClass'>
								<li>${item.rent_class[0]}</li>
								<li>${item.rent_class[1]}</li>
								<li>${item.rent_class[2]}</li>
								<li>${item.rent_class[3]}</li>
							</ul>
							<p>${item.addressDis}</p>
							
						</div>
						
					</div>
		`;

		document.querySelector('.hot-wrap').innerHTML += _html;


	});

});


//点击选择日期
$('.selectDate').click(function(){
	$('.date-wrap').show();
}).siblings().click(function(){
	$('.date-wrap').hide();
});


//调用globle函数，绘制日历
rili();

//事件委托，点击收藏时的变化
$('.hot-wrap').click(function(e){
	e = e || window.event;
	var target = e.target || e.srcElement;
	if(target.nodeName == "I"){
		if(target.className === 'iconfont icon-shoucang'){
			target.className = 'iconfont icon-shoucang red';
		}else{
			target.className = 'iconfont icon-shoucang';
		}
		console.log(target.className);
	}
});


// js获取本地json文件
/*var request = new XMLHttpRequest();
request.open('GET','homeSorce.json');
request.responseType = 'text';
request.send();

request.onload = function(){
	var text = request.response;
	var jsondata = JSON.parse(text).source;
	console.log(jsondata);
	console.log(111);
}*/
$('.home-filter dl').click(function(){
		$(this).child('dd').show();
	});

// 点击显示更多
$('.more_btn').click(function(){
	$(this).siblings().show(1);
	$(this).hide();
})

//点击某一民宿，展示民宿信息
$('.hot-wrap').click(function(e){
	var target = e.target;
	if(target.nodeName == 'IMG'){
		houseShow(1);
		//显示信息
	}
})


//houseShow(1);

//渲染点击的民宿id为index的民宿内容
function houseShow(index){
	console.log(index);
	//房源展示隐藏
	$('.content').hide();
	//展示单个房源信息
	$('.houseInfo').show();

	let housecont = `
		<div class="orderTop">
					<h3>成都(火车北站) 舒适宜居宽敞双人床<i class="iconfont icon-shoucang ">收藏</i></h3>
					<p>
						<a href="javascript:;" class="fangyuan">房源></a>
						<a href="javascript:;" class="dress">成都></a>
						<i class="iconfont icon-didian">广东省深圳市大鹏新区南澳西涌沙滩三号收费口鹤</i>
					</p>
				</div>
				<div class="orderImgs">
					<ul>
						<li class="ac"><img src="img/house1/1.jpg"></li>
						<li><img src="img/house1/2.jpg"></li>
						<li><img src="img/house1/3.jpg"></li>
						<li><img src="img/house1/4.jpg"></li>
						<li><img src="img/house1/5.jpg"></li>
						<li><img src="img/house1/6.jpg"></li>
					</ul>
					<ol>
						<li class="ac"><img src="img/house1/1.jpg"></li>
						<li><img src="img/house1/2.jpg"></li>
						<li><img src="img/house1/3.jpg"></li>
						<li><img src="img/house1/4.jpg"></li>
						<li><img src="img/house1/5.jpg"></li>
						<li><img src="img/house1/6.jpg"></li>
					</ol>
				</div>
	`;
	let orderBox = ``;
	
	
	$('.housecont').append(housecont);
	$('.orderBox').append(orderBox);

	//绑定事件
	imgsBindEvent();

	//固定订单框

}

//固定订单框
	document.onscroll = function(e){
		console.log(1);
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		if(Number(scrollTop)>300){
			document.querySelector('.orderBox').classList.add('ac');
		}else{
			document.querySelector('.orderBox').classList.remove('ac');
		}
	}

//点击民宿下的导航，返回房源区
$('.fangyuan').click(function(){
	$('.content').show();
	$('.houseInfo').hide();
});
$('.dress').click(function(){
	$('.content').show();
	$('.houseInfo').hide();
});


imgsBindEvent();
//浏览某个房源图片，事件委托，
function imgsBindEvent(){

	var housecont = document.querySelector('.housecont');
	var orderBox = document.querySelector('.orderBox');
	
	var ul = housecont.querySelector('.orderImgs').querySelector('ul');
	var ul_lis = Array.from(ul.querySelectorAll('li'));
	
	var ol = housecont.querySelector('.orderImgs').querySelector('ol');
	var ol_lis = Array.from(ol.querySelectorAll('li'));
	
	var model = housecont.querySelector('.model');
	// console.log(model.parentNode);
	var divs = Array.from(model.querySelectorAll('div'));
	var model_lis = Array.from(housecont.querySelector('.model_nav').querySelectorAll('li'));
	//房源信息处交互
	housecont.onclick = function(e){
	
		var target = e.target;
		//点击图片浏览
		if(target.nodeName == 'IMG'){
			
			var parent = target.parentNode.parentNode;
			console.log(parent);
			if(parent.nodeName == 'OL'){
				//console.log(1);
				let idx = target.parentNode.getAttribute('index');

				 ol_lis.forEach(function(item,index){
				 	if(item.getAttribute('index') == idx){
				 		item.className = 'ac';
				 	}else{
				 		item.className = '';
				 	}
				 })

				  ul_lis.forEach(function(item,index){
				 	if(item.getAttribute('index') == idx){
				 		item.className = 'ac';
				 	}else{
				 		item.className = '';
				 	}
				 })
				
				
			}
			
			
		}

		//点击房源各类信息浏览
		if(target.nodeName == 'LI'){
			let index = target.getAttribute('index');
			//先去掉模块导航的选择样式
			model_lis.forEach(function(item,index){
				item.classList.remove('ac');
			})
			//为当前点击的模块导航标签添加选中样式
			target.classList.add('ac');

			console.log(divs);
			divs.forEach(function(item){
				console.log(item.getAttribute('index'));
				if(item.getAttribute('index') == index){
					item.classList.add('ac');
				}else{
					item.classList.remove('ac');
				}
			})
		}
	}

	//点击预定房源框
	orderBox.onclickck = function(e){
		var target = e.trget;
	}
}
