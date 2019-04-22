

// 首页轮播图
var index = 0;//标记当前播放的banner
var lastIndex = 0;//标记上一张显示的banner

var banners = document.querySelector('.banner_bg').querySelectorAll('li');
var btns = document.querySelector('.btns').querySelectorAll('li');
var goPre = document.querySelector('#goPrev');
var goNext = document.querySelector('#goNext');

var timer = null;

Array.from(btns).forEach(function(item,i){
	item.onclick = function(){
		index = i;
		changeImg();
	}
});
goPrev.onclick =function(){
	if(--index < 0)index = banners.length - 1;
	changeImg();
}
goNext.onclick =function(){
	if(++index == banners.length)index = 0;
	changeImg();
}
function autoPlay(){
	setInterval(function(){
		goNext.onclick();
	},5000)
}
autoPlay();

function changeImg(){
	banners[index].classList.add('ac');
	banners[lastIndex].classList.remove('ac');

	btns[index].classList.add('ac');
	btns[lastIndex].classList.remove('ac');

	lastIndex = index;
}




//点击选择日期，显示日历
$('.selectDate').click(function(){
	$('.date-wrap').show();
}).siblings().click(function(){
	$('.date-wrap').hide();
});
//调用globle函数，绘制日历
rili();


//渲染首页特惠房源
showPrice();
function showPrice(){
	var hose_show = document.getElementById('hose_show');
	let _html = '';
	for(let i=0;i<6;i++){
		_html += `
			<dl href="#">
						<dt class='jumpToHouse' style = 'background: url(img/house1/${i+1}.jpg) no-repeat center;background-size: 100%;'></dt>
						<dd>
							<a href="#"><img src="img/t${i}.jpg" /></a>
							<h4>白书民宿的家</h4>
							<p>￥456</p>
						</dd>
					</dl>
		`;
	}
	hose_show.innerHTML = _html;
}


document.querySelector('.hose_show').onclick = function(e){
	var target = e.target;
	if(target.nodeName == 'DT'){

		//还未实现跳转并显示房源信息
		//houseShow();

		window.location.href = 'file:///D:/%E6%AF%95%E8%AE%BE/gitfile/Youjia/home-source.html';
		
	}
}