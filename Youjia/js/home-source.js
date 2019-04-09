$.getJSON('static/homeSource.json',function(data){
	console.log(data);
});
$.getJSON('static/order.json',function(data){
	console.log(data);
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