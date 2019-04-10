
//获取数据
$.getJSON('static/homeSource.json',function(data){
	console.log(data);
	var house = data.source;
	console.log(house);

	var hot_wrap = document.getElementsByClassName('hot-wrap')[0];
	console.log(hot_wrap);
	var post = document.createDocumentFragment();
	for(var i=0;i<house.length;i++){
		var post = document.createElement('div');
		post.className = 'post';
		console.log(post);

		var post_top = document.createElement('div');
		var a = document.createElement('a');
		a.href = '#';
		a.innerHTML = '<img src='+house[0].src[0]+' alt="" />';
		post_top.appendChild(a);
		var h3 = document.createElement('h3');
		var i = document.createElement('i');
		i.className = "iconfont icon-redu";
		h3.appendChild(i);
		var span = document.createElement('span');
		span.innerHTML = house[0].price;
		h3.appendChild(span);
		post_top.appendChild(h3);
		post.appendChild(post_top);

		var post_bot = document.createElement('div');
		var h4= document.createElement('h4');
		h4.innerHTML = house[0].houseName;
		post_bot.appendChild(h4);

		post.appendChild(post_bot);
	}
	console.log(post);
	hot_wrap.appendChild(post);
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
})