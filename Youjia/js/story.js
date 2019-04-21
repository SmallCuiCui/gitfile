//点击发表故事
$('#newStoryBtn').click(function(){
	if($('.new_story').css('display') == 'none'){
		$('.new_story').show();
	}else{
		$('.new_story').hide();
	}
	
});

//点击选择图片按钮,获取src路径
var _src = '';
$('.chatuBtn').on('change',function(){
	
	var filePath = $(this).val(),
		fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase();
	_src = window.URL.createObjectURL(this.files[0]);

	// 检查是否是图片
	if( !fileFormat.match(/.png|.jpg|.jpeg/) ) {
		document.querySelector('.new_b_r').querySelector('.chatuTip').style.display = 'block';
    	return;  
    }else{
    	document.querySelector('.new_b_r').querySelector('.chatuTip').style.display = 'none';
    }
    $('.chatuBox').children('li').remove();

    let li = document.createElement('li');
    li.innerHTML = `<img src=${_src}>`;
   
   document.querySelector('.chatuBox').appendChild(li);

})

//点击立即发表
$('.okBtn').click(function(){
	let zhuti = document.querySelector('.zhuti').value;
	let didian = document.querySelector('.didian').value;
	let neirong = document.querySelector('.neirong').value;

	let date = new Date();
	var year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate(),
		h = date.getHours(),
		m = date.getMinutes();

	let _html = `
		<div class="modle">
						<div class="storyCon">
							<ul>
								<li><img src=${_src}></li>
							</ul>
							
							<div class="contentShow">
								<h4>${zhuti}
									<i class="iconfont icon-dizhi1">${didian}</i>
									<span>${year}/${month}/${day} ${h}:${m}</span>
								</h4>
								<p>${neirong}</p>
								<div class="zanBtn">
									<span><i class="iconfont icon-dianzan11"></i>点赞</span>
									<span><i class="iconfont icon-xiaoxi"></i>评论</span>
									<span><i class="iconfont icon-shoucang"></i>浏览</span>
								</div>
							</div>
						</div>
					</div>
	`

	document.querySelector('.storys_wrap').innerHTML += _html;
	$('.new_story').hide();
})

$('.cancelBtn').click(function(){
	$('.new_story').hide();
});

$('.zanBtn').click(function(e){
	var target = e.target;
	if(target.nodeName == 'SPAN'){
		if(target.className == ''){
			target.className = 'ac';
		}else{
			target.className = '';
		}
	}
})