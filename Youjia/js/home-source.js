
//获取数据
$.getJSON('static/homeSource.json',function(data){
	console.log(data);
	var house = data.source;
	var post = document.creatDocumentFragement;
	for(var i=0;i<house.length;i++){
		var post = document.creatElement('div');
		post.className = 'post';

		var post-top = document.creatElement('div');
		var a = document.creatElement('a');
		a.href = '#';
		a.innerHTML = '<img src='+house[0].src[0]+' alt="" />';
		post-top.appendChilde(a);
		var h3 = document.creatElement('h3');
		var i = document.creatElement('i');
		i.className = "iconfont icon-redu";
		h3.appendChilde(i);
		var span = document.creatElement('span');
		span.innerHTML = house[0].price;
		h3.appendChilde(span);
		post-top.appendChilde(h3);
		post.appendChilde(post-top);

		var post-bot = document.creatElement('div');
		var h4= document.creatElement('h4');
		h4.innerHTML = house[0].houseName;
		post-bot,appendChilde(h4);

		post.appendChilde(post-bot);
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
})