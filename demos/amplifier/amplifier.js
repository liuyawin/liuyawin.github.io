function Amplifier(opts) {
    this.node = opts.node;
    this.bigImgUrl = opts.bigImgUrl;
    this.img = this.node.find('img');
    this.body = $('body');
    this.nodePosition = {
        x: 0,
        y: 0
    };
    this.width = this.node.outerWidth();
    this.height = this.node.outerHeight();
    this.mask = null;
    this.maskWidth = 0;
    this.maskHeight = 0;
    this.bigImageArea = null;
    this.offset = {
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
        this.node.on('mouseenter', this.handleMouseEnter.bind(this));
        this.node.on('mouseleave', this.handleMouseLeave.bind(this));
    },
    handleMouseEnter: function(){
        this.bindMouseMoveEve();
    },
    checkPosition: function(){
        return this.offsetX - this.nodePosition.x > 0 && this.offsetX - this.nodePosition.x < this.width && this.offsetY - this.nodePosition.y > 0 && this.offsetY - this.nodePosition.y < this.height; 
    },
    //鼠标移出图片区域时解绑鼠标移动事件
    handleMouseLeave: function () {
        // 判断鼠标是否离开了图片区域
        if (!this.checkPosition()) {
            this.unbindMouseMoveEve();
        }       
    },
    bindMouseMoveEve: function () {
        this.createMask();
        this.createBigImageArea();
        this.img.on('mousemove', this.handleMouseMove.bind(this));
    },
    unbindMouseMoveEve: function () {
        this.destroyMask();
        this.destroyBigImageArea();
        this.img.unbind('mousemove', this.handleMouseMove);
    },
    handleMouseMove: function (e) {
        this.offset = {
            x: e.offsetX,
            y: e.offsetY,
        }
        console.log(this.offset);
        //move mask
        this.moveMask();
        //移动大图
        //this.moveBigImage();
    },
    createMask: function () {
        this.mask = $('<div class="mask"></div>');
        this.node.append(this.mask);
        this.maskWidth = this.mask.outerWidth();
        this.maskHeight = this.mask.outerHeight();
    },
    destroyMask: function () {
        this.mask.remove();
    },
    moveMask: function () {
        if (!this.checkXBoundary()) {
            this.mask.css('left', this.offset.x - this.maskWidth / 2);
        }
        if (!this.checkYBoundary()) {
            this.mask.css('top', this.offset.y - this.maskHeight / 2);
        }
    },
    createBigImageArea: function () {
        this.bigImageArea = $('<div class="amplify_area"></div>');
        this.node.append(this.bigImageArea);
    },
    destroyBigImageArea: function () {
        this.bigImageArea.remove();
    },
    checkXBoundary: function () {
        return false;
    },
    checkYBoundary: function () {
        return false;
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