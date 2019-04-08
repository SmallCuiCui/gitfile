
		var clickNum = 0;

		//实际的今天日期
		var date = new Date();

		//如果点击上下个月，记录月份差
		var num = 0;
		var preMonth = document.getElementById('preMonth');
		var nextMonth = document.getElementById('nextMonth');

		calender(date,num);
		
		preMonth.onclick = function(){
			date = new Date();
			num--;
			calender(date,num);
		}
		nextMonth.onclick = function(){
			date = new Date();
			num++;
			calender(date,num);
		}

		
		
		function selectDay(){
			$(".datelist li").click(function(){
			//console.log(111111);
			clickNum++;
			var inputVal="";

			var dateStr = $('#title').text();//获取日历的年月
			var year = dateStr.substring(0,dateStr.indexOf('年'));
			var month = dateStr.substring(dateStr.indexOf('年')+1,dateStr.indexOf('月'));
			var selectDay = $(this).text();//获取点击的号数

			if(clickNum % 2 ==1){//第一次点击，选择入住日期
				inputVal = year +'/'+ month +'/'+selectDay +'--';
			
			}else{//第二次点击，选择退房日期
				inputVal = $(".selectDate").val();
				inputVal += year +'/'+ month +'/'+selectDay;
			}
			
			$(".selectDate").val (inputVal) ;	
			});
		}

		function calender(date,num){
			var title = document.getElementById("title");
			var datelist = document.getElementById('datelist');
			var str="";//日期字符串

			//更改日期到指定月份，默认是当月，num=0
			date.setMonth(date.getMonth() + num);

			//获取当前选中日期
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var day = date.getDate();
			//设置日期
			title.innerHTML = year +'年'+ month +'月';

			date.setDate(1);//把时间调到本月1号，以查看是星期几
			var index = date.getDay();

			date.setMonth(month+1,0);//时间调到本月最后一天，即下月的第0天，自动回退到本月的最后一天
			var alldays = date.getDate();
			for(var i=0;i<index;i++){
				str +="<li class='disabled'></li>";
			}

			for(i=1;i<=alldays;i++){

				if((i < day && num == 0) || num < 0){//今天之前

					if((index+i)%7 == 0 || (index+i)%7 == 1){//周末
						str += '<li class="disabled xiuxi">'+ i +'</li>';
					}else{//非周末
						str += '<li class="disabled">'+ i +'</li>';
					}
					
				}else if(i == day && num==0){//今天
					str += '<li class="today">'+ i +'</li>';
					
				}else{//今天之后
					if((index+i)%7 == 0 || (index+i)%7 == 1){//周末
						str += '<li class="xiuxi">'+ i +'</li>';
					}else{//非周末
						str += '<li>'+ i +'</li>';
					}
					
				}

				
				
			}
			datelist.innerHTML = str;
			selectDay();
		}