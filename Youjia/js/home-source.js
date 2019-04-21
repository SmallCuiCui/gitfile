
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
								<img src="img/price1.jpg" alt="" />
							</a>
							<h3>
								<i class="iconfont icon-redu"></i>
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
		$('.content').hide();
		$('.houseInfo').show();

	}
})

//点击民宿下的导航，返回房源区
$('.fangyuan').click(function(){
	$('.content').show();
	$('.houseInfo').hide();
});
$('.dress').click(function(){
	$('.content').show();
	$('.houseInfo').hide();
});