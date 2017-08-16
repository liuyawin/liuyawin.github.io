define(['jquery'], function($) {
	function ScrollTo(opts) {
		this.opts = $.extend({}, ScrollTo.DEFAULTS, opts); //无参数时使用默认参数，增强健壮性
		this.$el = $('html body');
	}

	ScrollTo.prototype.move = function() {
		var opts = this.opts;
		var des = this.opts.des;
		/*console.log(opts.des);
		console.log(opts.speed)*/
		if($(window).scrollTop() != des) {//如果滚动条不在顶部
			if(!this.$el.is(':animated')) {//且没有运动，则执行animate
				this.$el.animate({
					scrollTop: des
				}, opts.speed);
			}
		}

	};

	ScrollTo.prototype.go = function() {
		var des = this.opts.des;
		
		if($(window).scrollTop() != des) {//如果滚动条不在顶部
			this.$el.scrollTop(des);
		}
	}

	ScrollTo.DEFAULTS = {
		des: 0,
		speed: 800
	}
	return {
		ScrollTo: ScrollTo
	}
})