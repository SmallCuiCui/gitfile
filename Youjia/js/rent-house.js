
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
		window.location.href = 'file:///D:/%E6%AF%95%E8%AE%BE/gitfile/Youjia/home.html';
	});
}

//添加地址标签
$('.addAdressBtn').click(function(){
	let text = document.querySelector('.addtipInput').value;
	//输入框在非空的情况下添加
	if(text){
		let adress_box = document.querySelector('.adress_box');
		let li = document.createElement('li');
		li.innerHTML = `${text}<span>x</span>`;
		adress_box.appendChild(li);
	}
	
});
//删除地址标签
$('.adress_box').click(function(e){
	e = e || window.event;
	let target = e.target || e.srcElement;
	if(target.nodeName == 'SPAN'){
		let li = target.parentNode;
		li.remove();
	}
});

//设备标签选择
$('.equipInfo').click(function(e){
	
	let target = e.target || e.srcElemtn;

	if(target.nodeName == 'LI'){
		if(!target.className){

			target.className = 'slc';
		}else{
			target.className = '';
		}
	}
});



 $('#chooseImage').on('change',function(){

 		//最多上传9张图片的限制
 		if(document.querySelector('.imgsWrap').querySelectorAll('li').length < 9){

 			document.querySelector('.imgsIn').querySelector('.docIng').style.display = 'none';
 			var filePath = $(this).val(),         //获取到input的value，里面是文件的路径
    		fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase(),
    		src = window.URL.createObjectURL(this.files[0]); //转成可以在本地预览的格式
    		
	    	// 检查是否是图片
	    	if( !fileFormat.match(/.png|.jpg|.jpeg/) ) {
	    		// error_prompt_alert('上传错误,文件格式必须为：png/jpg/jpeg');
	    		document.querySelector('.imgsIn').querySelector('.docIng').style.display = 'block';
	        	return;  
	        }

	        let li = document.createElement('li');
	        li.innerHTML = `<span>x</span><img src=${src}>`;
	       
	       document.querySelector('.imgsWrap').appendChild(li);
 		}else{
 			document.querySelector('.imgsIn').querySelector('.numIng').style.display = 'block';
 		}
    	
        // $('imgsWrap').append(img);
  
        // $('#cropedBigImg').attr('src',src);
});

$('.imgsWrap').click(function(e){
	let target = e.target;
	if(target.nodeName == 'SPAN'){
		let li = target.parentNode;
		li.remove();
		if(document.querySelector('.imgsWrap').querySelectorAll('li').length < 9){
			document.querySelector('.imgsIn').querySelector('.numIng').style.display = 'none';
		}
	}
})

}
