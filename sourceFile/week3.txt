table注意点
	在html中写的表格，渲染到浏览器会自动添加tbody和thead。使用js创建表格则不会出现
	平时使用js创建表格时，注意加上thead,tbody。避免出现删除查找时的bug

onmouseenter：只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件
onmouseleave
onmouseover：不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件

循环给一系列元素绑事件，在事件函数里不能使用循环变量  ****
	事件的触发是在for结束之后才触发的
	data[i].onclick = function(){
		this.name...  //使用this,不能使用变量i来获取
}

元素属性的获取：
	div.className  div.id  //使用点获取元素原有的属性的值
	div.getAtrribute('index');  //使用getAtrribute()获取setAttribute自定义属性的值，index为自定义属性值
		div.setAttribute("data-odd",1)   //自定义属性data-odd并赋值，属性默认为字符串，data-odd的值为"1"
		div.removeAttribute('data-odd')  //移除属性
	js中获取元素后，给元素定义属性div.index = 1;使用div.index可以获取到

<a href='javascript'></a>   

DOM元素节点获取
	document.getElementById(id名)
	document.getElementsByTagName(标签名)  //类数组
	document.getElementsByName(name值)   //类数组  低版本浏览器不兼容
	document.getElementsByClassName(class值)  //类数组  IE8下不兼容

	ES5选择器：也是元素的方法，相当于给选择加了限制条件
	document.querySelector('value')  //value可以是类名，id名，标签名。一旦匹配上就不往后匹配了
	document.querySlectorAll('value')  //value可以是类名，id名，标签名。类数组，得到所有匹配，支持IE8+
	
	element.children属性：获得所有孩子元素，类数组
	element.parentNode属性：获得该元素的父元素

操作DOM：增，删，克隆
	创建节点:
		var odiv = document.creatElement('div');
	插入节点：
		parentNode.appendChild(newNode);  //将新节点追加到子节点列表末尾
		parentNode.insertBefore(newNode,targetNode)  //将新节点插到父节点下目标节点的前面
	克隆节点：
		cloneNode = Node.cloneNode(boolean)  //参数为true表示复制该节点以及其下的所有子节点；false表示只克隆该节点
	替换节点：
		parentNode.replaceChild(newNode,targetNode)  //使用新节点替换目标节点
	移除节点：
		parentNode.removeChild(childNode);  //移除目标节点
		node.parentNode.moveChild(node);  //不清楚父节点的情况下使用

属性获取和操作：元素的方法，不能使用document调用。低版本浏览器存在兼容问题
	element.getAttribute()  //元素自带属性用点(.)获取,自定义属性必须用getAttribute()和setAttribute()
	element.setAttribute()  //设置的属性永远是字符串类型
	element.removeAttribute()  //删除属性

元素样式获取：
	element.style;  //只能获取到内联样式里的style
		element.style.width
	

节点：html中的所有内容都是节点，包括标签，文本，注释等
	节点操作：元素的方法
		childNodes  //获取元素的所有节点，是一个数组，里面包括文本节点，元素节点，注释节点等所有节点
		nodeValue  //获取*文本节点*的文字内容，并且可以赋值，会替换原内容。可获取属性节点的值
			box.childNodes[0].nodevalue = '<strong>abc</strong>' ;//文本节点的属性，其他类型节点使用没效果。不会被解析成标签，会将标签名转义为字符串直接输出
				box.innerText=  '<strong>abc</strong>' ;不会解析标签，替换box节点下的所有节点
				box.innerHtml =  '<strong>abc</strong>' ;//标签会被解析，替换box节点下的所有节点（非w3c）
				box.outerHTML=  '<strong>abc</strong>' 会解析，但包含自己一起被替换（非w3c）
		nodeType   //节点类型，返回值为数字
			文本节点,3，元素节点：1，注释：8，属性节点：2，document节点：9
		nodeName  //返回节点名称（#text(文本节点)，#comment(注释)，标签名）

文档碎片：
	js创建元素之后，先放到文档碎片中存储起来，等所有元素都创建完之后在一次性使用appedChild加入DOM树中去，可以提高效率
	var chach = document.sreateDocumentFragment();  //创建文档碎片，在内存中
	chach.appendChild(li);  //内存中操作，速度快，减少DOM操作次数
	......
	ul.appendChild(cache);  //只有一次DOM操作

原生js读取外部json文件
	var url = 'studdent.json'  //要读取的json文件的路径
	var request = new XMLHttpRequest();
	request.open('get',url);   //通过get方式打开url，此时请求还未发出
	request.responseType = 'text';   //设置返回响应数据的类型
	request.send();   //发出请求，此时还未响应
	request.onload = function(){
		var text = request.response;  //得到一个对象，其类型取决于 responseType 的值
		var jsonData = JSON.parse(text);  //json方法，将字符串转换为js对象
}

DOM尺寸
	
	//以下属性只可读，不可更改
	box.offsetWidth  //div的宽高，包含border和padding
	box.offsetheight
	box.clientWidth  //div宽高，包含padding，不包含border
	box.clientHeight
	box.scrollWidth  //可滚动内容的宽高
	box.scrollheight

DOM坐标
	box.offsetLeft  //相对于元素当前相对于offsetParent的位置。offsetParent
	box.offsetTop

采用setInterval(fun(),30)做动画，时间设置为30-60之间比较合适，动画不卡顿，也节约资源



事件流：
	捕获阶段->目标阶段->冒泡阶段
	事件处理是在冒泡阶段进行。子元素事件触发之后，父元素的相同事件也会被随之触发
	采用事件监听可以设置事件处理在捕获阶段进行。
	IE浏览器不认识捕获，但是有捕获的

阻止冒泡：
	e.stopPropagation();
	e.cancelBubble=true;  //IE

事件绑定：同一个元素的同一个事件只能绑定一个处理函数，如果绑定多个，后面的会覆盖前面的。
	div.onclick = function(){}
事件监听：可以重复监听，同一事件可有多个处理函数。存在兼容问题
	div.addEventListenner("click",function(){},true)  
		参数一：事件句柄，，没有on
		参数二：处理函数
		参数三：是否捕获,true:表示在 捕获阶段进行处理函数，即先触发父元素的处理函数，然后才是子目标
			参数三注意兼容IE，IE下不能传这个参数

