requirejs.config({//引入jQuery模块，为其定义别名
	paths: {
		jquery: 'jquery.min'//不要.js后缀
	}
});
/**
 * function为回调函数，它有一个参数为传入的模块，这里命名为$
 */
requirejs(['jquery','backtop'],function($,backtop){
	var backtop = new backtop.BackTop( $('#backTop'),{
		mode: 'move',
		pos: 100,
		speed: 2000
	});
	
	/*$('#backTop').on('click',$.proxy(scroll.move,scroll));//proxy方法用于调整this的指向
	
	$(window).on('scroll',function() {
		checkPosition($(window).height());
	});
	
	checkPosition($(window).height());

	function checkPosition(pos){
		if($(window).scrollTop()>pos)
			$('#backTop').fadeIn();
		else {
			$('#backTop').fadeOut();
		}
	}*/
});