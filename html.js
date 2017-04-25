$(function(){
	var plat = $('#plat');
	var oUl = $('#ul1');
	plat.mouseenter(function(){
		oUl.css('display','block');
		plat.css({'border':'solid','border':'1px','border-color':'red','border-bottom':'none'});	
	});
	oUl.mouseleave(function(){
		oUl.css('display','none');
		plat.css({'color':'black','border':'none'});
	});

// 	oUl.mouseleave(function(){
// 		oUl.css('display','none');
// 		plat.css({'color':'black','border':'none'});
// });



	var oInput = $('#top_right input');
	var b =  $('#top_right b');
	oInput.hover(function(){
		b.css('display','block');
	},function(){
		b.css('display','none');
	});

// 导航栏
	
	$('#ul2 li').mouseenter(function(){
		// ul2.removeClass('active');
		// $(this).addClass('active');
		$('#navigation div').hide();
		$('#navigation div').eq($(this).index()).show();
	});

	$('#navigation div').mouseleave(function(){
		// ul2.removeClass('active');
		// $(this).addClass('active');
		$('#navigation div').hide();
		$('#navigation div').eq($(this).index()).hide();
	})


		var forward = 0;
				$('#ul3').css('width','#ul3 li'.length * 1349);
				function packet(){
				$('#ol1 li').removeClass('active');
				$('#ol1 li').eq(forward).addClass('active');
				$('#ul3').stop().animate({left:-1349*(forward+1)});
				};
				
				
				$('#ol1 li').click(function(){
					forward = $(this).index();
					packet();
					});

				function next(){
					forward++;
					if (forward == 5) {
						$('#ul3').stop().animate({left:-1349*(forward+1)},function(){
							$('#ul3').css('left',-1349);
						});
						forward = 0;
						$('#ol1 li').removeClass('active');
						$('#ol1 li').eq(forward).addClass('active');
					}else{
						packet();
					};
				};
		// 			$('#ul3').mouseenter(function(){
		// 		$('#carousel_one').css('display','block');
		// });
		// $('#ul3').mouseleave(function(){
		// 	$('#carousel_one').css('display','none');
		// });
				$('#carousel_right').click(next);
				
				$('#carousel_left').click(function(){
					forward--;
					if (forward<0) {
						$('#ul3').stop().animate({left:-1349*(forward+1)},function(){
							$('#ul3').css('left',-1349*5);
						});
						forward = 4;
						$('#ol1 li').removeClass('active');
						$('#ol1 li').eq(forward).addClass('active');


					}else{
						packet();
					};
					
				});
				// 定时器
				var time;
				time = setInterval(next,2000);

				$('#carousel').hover(function(){
					clearInterval(time);
				},function(){
					time = setInterval(next,2000);
				});


	



});


