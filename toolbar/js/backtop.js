define(['jquery','scrollto'],function($,scrollto){
	function BackTop(el,opts){
		this.opts = $.extend({},BackTop.DEFAULTS,opts);
		this.$el = $(el);
		this.scroll = new scrollto.ScrollTo({
			des: 0,
			speed: this.opts.speed
		});
		
		if(this.opts.mode == "move"){
			this.$el.on('click',$.proxy(this._move,this));
		}
		
		$(window).on('scroll',$.proxy(this._checkPosition,this));//方法名前面加下划线，意思是这个方法仅供内部使用
	}
	
	BackTop.DEFAULTS = {
		mode: 'move',
		pos: $(window).height(),
		speed: 800
	};
	
	BackTop.prototype._move = function(){
		this.scroll.move();
	}
	
	BackTop.prototype._go = function(){
		this.scroll.go();
	}
	
	BackTop.prototype._checkPosition = function(){
		var $el = this.$el;
		
		if($(window).scrollTop()>this.opts.pos){
			$el.fadeIn();
		}else{
			$el.fadeOut()
		}
	}
	
	return {
		BackTop: BackTop
	}
})