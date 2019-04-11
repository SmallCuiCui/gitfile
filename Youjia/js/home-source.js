
//获取数据，渲染到房源页面

//初始状态，显示16个房源，加载更多后显示更多
var shouNum = 16;

$.getJSON('static/homeSource.json',function(data){
	
	var house = data.source;
	var hot_wrap = document.querySelector('.hot-wrap');
	//console.log(house);
	var post = document.creatDocumentFragement;

	$.each(house,function(index,value){
		var post = document.createElement('div');
		post.className = 'post';

		var post_top = document.createElement('div');
		post_top.className = 'post-top';

		var a = document.createElement('a');
		a.href = '#';
		a.innerHTML = '<img src='+value.src[0]+' alt="" />';
		post_top.appendChild(a);

		var h3 = document.createElement('h3');
		var i = document.createElement('i');
		i.className = "iconfont icon-redu";
		h3.appendChild(i);
		var span = document.createElement('span');
		span.innerHTML = value.price + '/晚';
		h3.appendChild(span);
		post_top.appendChild(h3);

		var _span = document.createElement('span');
		_span.className = 'unlike';
		_span.innerHTML = '<i class="iconfont icon-shoucang"></i>';
		post_top.appendChild(_span);
		post.appendChild(post_top);

		var post_bot = document.createElement('div');
		post_bot.className = 'post-bot';

		var _h4= document.createElement('h4');
		var _span = document.createElement('span');
		_span.innerHTML = value.houseName;
		_h4.appendChild(_span);
		var _a = document.createElement('a');
		_a.href = '#';
		_a.innerHTML = '<i class="iconfont icon-didian"></i>';
		var _span = document.createElement('span');
		_span.innerHTML = value.address;
		_a.appendChild(_span);
		_h4.appendChild(_a);
		post_bot.appendChild(_h4);
		var _ul = document.createElement('ul');
		$.each(value.rent_class,function(index,value){
			var _li = document.createElement('li');
			_li.innerHTML = value;
			_ul.appendChild(_li);
		})
		post_bot.appendChild(_ul);

		var _p = document.createElement('p');
		_p.innerHTML = value.addressDis;
		post_bot.appendChild(_p);

		post.appendChild(post_bot);
		hot_wrap.appendChild(post);

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