
//获取数据，渲染到房源页面

//初始状态，显示16个房源，加载更多后显示更多
var shouNum = 16; 

$.getJSON('static/homeSource.json',function(data){
	
	var house = data.source;

	var house_wrap = document.querySelector('.house-wrap');
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

		house_wrap.innerHTML += _html;


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

//事件委托
$('.house-wrap').click(function(e){
	e = e || window.event;
	var target = e.target || e.srcElement;

	//事件委托，点击收藏时的变化
	if(target.nodeName == "I"){
		if(target.className === 'iconfont icon-shoucang'){
			target.className = 'iconfont icon-shoucang red';
		}else{
			target.className = 'iconfont icon-shoucang';
		}
		console.log(target.className);
	}

	//点击某一民宿，展示民宿信息
	if(target.nodeName == 'IMG'){
		houseShow(1);
		//显示信息
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



//渲染点击的民宿id为index的民宿内容
function houseShow(index){

	//房源展示隐藏
	$('.content').hide();
	//展示单个房源信息
	$('.houseInfo').show();

	let housecont = `
		<div class="orderTop">
					<h3>成都(火车北站) 舒适宜居宽敞双人床<span>收藏</span><i class="iconfont icon-shoucang "></i></h3>
					<p>
						<a href="javascript:;" class="fangyuan">房源></a>
						<a href="javascript:;" class="dress">成都></a>
						<i class="iconfont icon-didian">广东省深圳市大鹏新区南澳西涌沙滩三号收费口鹤</i>
					</p>
				</div>
				<div class="orderImgs">
					<ul>
						<li class="ac" index = '1'><img src="img/house1/1.jpg"></li>
						<li index = '2'><img src="img/house1/2.jpg"></li>
						<li index = '3'><img src="img/house1/3.jpg"></li>
						<li index = '4'><img src="img/house1/4.jpg"></li>
						<li index = '5'><img src="img/house1/5.jpg"></li>
						<li index = '6'><img src="img/house1/6.jpg"></li>
						<li index = '7'><img src="img/house1/7.jpg"></li>
						<li index = '8'><img src="img/house1/8.jpg"></li>
					</ul>
					<ol>
						<li class="ac" index = '1'><img src="img/house1/1.jpg"></li>
						<li index = '2'><img src="img/house1/2.jpg"></li>
						<li index = '3'><img src="img/house1/3.jpg"></li>
						<li index = '4'><img src="img/house1/4.jpg"></li>
						<li index = '5'><img src="img/house1/5.jpg"></li>
						<li index = '6'><img src="img/house1/6.jpg"></li>
						<li index = '7'><img src="img/house1/7.jpg"></li>
						<li index = '8'><img src="img/house1/8.jpg"></li>
					</ol>
				</div>
				<div class="orderModel">
					<ul class="model_nav">
						<li index = '1' class="ac">房源描述</li>
						<li index = '2'>位置</li>
						<li index = '3'>可定日期</li>
						<li index = '4'>配套设施</li>
						<li index = '5'>评论</li>
						<li index = '6'>房东</li>
					</ul>
					<div class="model">
						
						<div class="model_house ac" index = '1' class="ac">
							<h3>白书名宿</h3>
							<p>民宿描述，体验三亚风情，享受沐浴阳光,交通便利，邻近商城，旅游景点，民宿描述，体验三亚风情，享受沐浴阳光,交通便利，邻近商城，旅游景点，</p>
							<ul>
								
									<li>
										<i class="iconfont icon-index"></i>
										<span>整套出租</span>
									</li>
									<li>
										<i class="iconfont icon-wsmp-register"></i>
										<span>三室一厅</span>
									</li>
									<li>
										<i class="iconfont icon-TimeStyleCopy"></i>
										<span>3张床</span>
									</li>
									<li>
										<i class="iconfont icon-denglu1"></i>
										<span>宜住5人</span>
									</li>
								
							</ul>
							<p>房屋户型：1室0厅1卫1厨0阳台</p>

						</div>

						<div index = '2' class="position" >
							<div>
								<h3>
									<i class="iconfont icon-dizhi"></i>
									<span>成都玉林路</span>
								</h3>
								<P>江苏省苏州市姑苏区狮山路58号汇豪国际</P>
								<p>靠近地铁3号线/春熙路/景华小区/宁静温馨小家</p>
							</div>
							
							<div>
								<h4><i class="iconfont icon-zuji "></i>周边</h4>
								<p>北京路步行街-5mi</p>
								<p>大佛寺-北京路步行街内</p>
								<p>骑楼群-5min</p>
							</div>
						</div>
						<div index = '3' class="">可定日期</div>
						<div index = '4' class="something">
							<ul>
								<li><i class="iconfont icon-ziyuan "></i>热水领淋浴</li>
								<li><i class="iconfont icon-renzheng"></i>空调</li>
								<li><i class="iconfont con-gushi"></i>无线网络</li>
								<li><i class="iconfont icon-dianping"></i>门径系统</li>
								<li><i class="iconfont icon-wsmp-register"></i>洗衣机</li>
								<li><i class="iconfont con-gushi"></i>电梯</li>
								<li><i class="iconfont icon-dizhi1"></i>冰箱</li>
								<li><i class="iconfont icon-dianping"></i>暖气</li>
								<li><i class="iconfont icon-TimeStyleCopy"></i>电视</li>
								<li><i class="iconfont con-gushi"></i>饮水设备</li>
								<li><i class="iconfont icon-dizhi1"></i>香皂</li>
								<li><i class="iconfont con-denglu1"></i>洗发水</li>
								<li><i class="iconfont con-gushi"></i>牙具</li>
								<li><i class="iconfont icon-wsmp-register"></i>毛巾</li>
								<li><i class="iconfont icon-dianping"></i>拖鞋</li>
								<li><i class="iconfont icon-TimeStyleCopy"></i>停车位</li>
								<li><i class="iconfont con-denglu1"></i>允许吸烟</li>
								<li><i class="iconfont con-gushi"></i>允许带宠物</li>
								<li><i class="iconfont icon-dianping"></i>允许聚会</li>
							</ul>
						</div>
						<div index = '5' class="comments">
							<h3>近期评价</h3>
							<ul>
								<li>
									<div>
										<p>
											<img src="img/t1.jpg">
										</p>
										<p>
											<font>尚恩</font>
											<span>2019年3月</span>
										</p>
									
									</div>
									<p>位置很好交通便利,楼下就有个电影院也很方便,就是如果每个人能配个浴巾就好了</p>
								</li>

								<li>
									<div>
										<p>
											<img src="img/t3.jpg">
										</p>
										<p>
											<font>尚恩</font>
											<span>2019年3月</span>
										</p>
									
									</div>
									<p>位置很好交通便利,楼下就有个电影院也很方便,就是如果每个人能配个浴巾就好了</p>
								</li>
							</ul>
						</div>
						<div index = '6'>房东</div>
					</div>
					
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
		var target = e.target;
	}
}
