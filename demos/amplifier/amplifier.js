function Amplifier(opts) {
    this.node = opts.node;
    this.bigImgUrl = opts.bigImgUrl;
    this.img = this.node.find('img');
    this.nodePosition = {
        top: 0,
        left: 0
    };
    this.width = this.node.outerWidth();
    this.height = this.node.outerHeight();
    this.times = 1;
    this.mask = null;
    this.maskWidth = 0;
    this.maskHeight = 0;
    this.bigImageArea = null;
    this.mousePosition = {
        x: 0,
        y: 0
    };
}

Amplifier.prototype = {
    constructor: Amplifier,

    trigger: function () {
        this.nodePosition = this.node.offset();
        this.bindEve();
    },

    bindEve: function () {
        var _this = this;
        this.node.on('mouseenter', function(){
            return _this.handleMouseEnter.call(_this);
        }); 
    },

    //处理鼠标进入图片区域事件
    handleMouseEnter: function () {
        var _this = this;
        this.createMask();
        this.createBigImageArea();
        this.times = this.bigImageArea.width() / this.maskWidth;
        $(document).on('mousemove', handleMouseMove);

        //处理鼠标移动事件
        function handleMouseMove(e) {
            _this.mousePosition = {
                x: Math.ceil(e.pageX || e.clientX),
                y: Math.ceil(e.pageY || e.clientY)
            }
            
            //移动mask
            _this.moveMask();
            //移动大图
            _this.moveBigImage();
            
            //如果移出去了
            if (!_this.checkPosition()) {
                _this.destroyMask();
                _this.destroyBigImageArea();
                $(document).unbind('mousemove', handleMouseMove);
            }
        }
    },

    //判断鼠标是否在图片区域内
    checkPosition: function () {
        return this.mousePosition.x - this.nodePosition.left > 0 && this.mousePosition.x - this.nodePosition.left < this.width && this.mousePosition.y - this.nodePosition.top > 0 && this.mousePosition.y - this.nodePosition.top < this.height;
    },

    createMask: function () {
        this.mask = $('<div class="mask"></div>');
        this.node.append(this.mask);
        this.maskWidth = this.mask.width();
        this.maskHeight = this.mask.height();
    },

    destroyMask: function () {
        this.mask.remove();
    },

    moveMask: function () {
        if (this.mousePosition.x - this.nodePosition.left < this.maskWidth / 2) {//检测边界情况作特殊处理
            this.mask.css('left', 0);
        } else if (this.mousePosition.x - this.nodePosition.left > this.node.width() - this.maskWidth / 2) {//检测边界情况作特殊处理
            this.mask.css('left', this.node.width() - this.maskWidth);
        } else{
            this.mask.css('left', this.mousePosition.x - this.nodePosition.left - this.maskWidth / 2);
        }

        if (this.mousePosition.y - this.nodePosition.top < this.maskHeight / 2) {//检测边界情况作特殊处理
            this.mask.css('top', 0);
        } else if (this.mousePosition.y - this.nodePosition.top > this.node.height() - this.maskHeight / 2) {//检测边界情况作特殊处理
            this.mask.css('top', this.node.height() - this.maskHeight);
        } else{
            this.mask.css('top', this.mousePosition.y - this.nodePosition.top - this.maskHeight / 2);
        }
    },
    
    createBigImageArea: function () {
        this.bigImageArea = $('<div class="amplify_area"></div>');
        this.bigImageArea.css('background-image', 'url("img/big.jpg")');
        this.bigImageArea.css('background-repeat', 'no-repeat');
        this.node.append(this.bigImageArea);
    },

    moveBigImage: function () {
        var x = (-this.mask.offset().left + this.nodePosition.left) * this.times;
        var y = (-this.mask.offset().top + this.nodePosition.top) * this.times;
        this.bigImageArea.css('background-position', x + 'px ' + y + 'px');
    },

    destroyBigImageArea: function () {
        this.bigImageArea.remove();
    }
}

$.fn.amplifier = function (opts) {
    var $this = $(this);
    if ($this.length == 0) {
        return;
    }
    opts.node = $this;
    var amplifier = new Amplifier(opts).trigger();
}