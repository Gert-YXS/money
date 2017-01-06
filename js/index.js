$(document).ready(function() {
	//初始页动画
	$('.text1').on('animationend', function(){
		$(".text1").addClass('animated rubberBand').removeClass('zoomInLeft');
	});

	//page1
	//点击按钮显示
	var btn = $("#btn span");
	$.each(btn,function(index, obj) {
		$(obj).on("tap",function(){
			$(".shade").css("display","block");
			$("#ball>span").css("display","none");
			$("#ball>span").eq(index).css("display","block");
			$("#start").css("zIndex","0");
		});
		$("#ball>span>img").eq(index).on("tap",function(){
			$("#start").css("zIndex","1000");
			$("#ball>span").eq(index).css("display","none");
			$(".shade").css("display","none");
		});
	});

	//点击开始
	$("#start").on('tap',function(){
		$(".shade").css("display","block");
		$(".grxx").css("display","block");

		$(".grxx>img").on("tap",function(){
			$(".shade").css("display","none");
			$(".grxx").css("display","none");
		});

		$(".submit").on("tap",function(){
			$("#page1").css("display","noen");
			$("#page2").css("display","block");
			$("#page3").css("display","noen");
		})
	});

	//page2
	var imgMove = $("#move-money img");
	var x = 0;
	var timer1 = null;
	var len = imgMove.length;
	var score = 0;//分数
	var timer = null;
	var index = 0;
	var unit = 0;//个位
	var decade = 0;//十位
	var numerous = 0;//百位
	var page2 = function(){
		var arr = ["img/ll.png","img/ybz.png","img/ymy.png"]
		timer = setInterval(function(){
			index++;
			if(index<=2){
				$("#title>img").attr("src",arr[index])
			}else{
				index = 0;
			}
		},2000);

		//滑动钱动画
		$(imgMove).on("swipeup",function(){
			if (x===0) {
				$(".page2-shoushi").remove();
				time();
			}
			clearInterval(timer1);
			if (x>len-1) {
				x = 0;
			}
			$(imgMove).eq(x).attr("class","Move-money");
			if (x===0) {
				$($(imgMove).eq(x)).insertAfter($(imgMove).eq(imgMove.length-1));
			}else{
				$($(imgMove).eq(x)).insertAfter($(imgMove).eq(x-1));
			}
			console.log(x);
			timer1 = setInterval(function(){
				$(imgMove).attr("class","");
				clearInterval(timer1);
			},1000);
			x++;
			score++;
			var strScore = String(score);//将分数转成字符串
			console.log(strScore.length);
			var scoreT = $("#time>span");
			if (strScore.length===1){
				$(scoreT).eq(0).html(0);
				$(scoreT).eq(1).html(0);
				$(scoreT).eq(2).html(strScore);
			}else if(strScore.length===2){
				$(scoreT).eq(0).html(0);
				$(scoreT).eq(1).html(strScore.slice(0,1));
				$(scoreT).eq(2).html(strScore.slice(1,2));
			}else if(strScore.length===3){
				$(scoreT).eq(0).html(strScore.slice(0,1));
				$(scoreT).eq(1).html(strScore.slice(1,2));
				$(scoreT).eq(2).html(strScore.slice(2,3));
			}
		});
	}
	page2();

	//时间
	var time = function(){
		var timeDowm = null;
		var t = 60;
		timeDowm = setInterval(function(){
			t--;
			$(".time-icon").html(t);
			if(t===0){
				page2 = null;
				$(imgMove).off("swipeup");
				clearInterval(timeDowm);
			}
		},1000)
	}
	

	





	

});