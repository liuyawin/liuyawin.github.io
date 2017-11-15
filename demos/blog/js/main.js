requirejs.config({//引入jQuery模块，为其定义别名
	paths: {
		jquery: 'jquery-1.9.1.min'//不要.js后缀
	}
});
/**
 * function为回调函数，它有一个参数为传入的模块，这里命名为$
 */
requirejs(['jquery','backtop'],function($,backtop){
	var backtop = new backtop.BackTop( $('#backTop'),{
		mode: 'move',
		pos: 0,
		speed: 800
	});
});