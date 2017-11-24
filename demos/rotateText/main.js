function CircleText(node) {
    this.node = node;
    this.imgBox = this.node.find('.img_box');
    this.imgs = this.imgBox.find('img');
    this.imgsInfo = [];
    this.nodeWH = this.node.outerWidth();//节点的宽高
    this.heartbeat = null;
    this.currentAngle = 0;
}

CircleText.prototype = {
    constructor: CircleText,
    trigger: function () {
        this.init();
    },
    init: function () {
        this.getImgInitInfo();
        this.setImage();
    },
    setImage: function () {
        var _this = this;
        this.setInitPosition();
        this.heartbeat = setInterval(function () {
            _this.currentAngle++;
            if (_this.currentAngle == 360) {
                _this.currentAngle = 0;
            }

            _this.setImagePostion()
        }, 17);

    },
    stop: function () {
        clearInterval(this.heartbeat);
    },
    setInitPosition: function(){
        this.setImagePostion();
    },
    setImagePostion: function(){
        var _this = this;
        for (var i = 0; i < _this.imgsInfo.length; i++) {
            var img = _this.imgsInfo[i];
            var currentAngle = _this.currentAngle;
            var initAngle = parseInt(img.initAngle);
            var top = _this.nodeWH / 2 - img.initRadius * Math.sin((currentAngle + initAngle) * 2 * Math.PI / 360) - img.height / 2;
            var left = _this.nodeWH / 2 - img.initRadius * Math.cos((currentAngle + initAngle) * 2 * Math.PI / 360) - img.width / 2;
            img.node.css({
                left: left,
                top: top,
                transform: 'rotate(' + _this.currentAngle + 'deg)'
            });
        }
    },
    getImgInitInfo: function () {
        var _this = this;
        $.each(this.imgs, function () {
            var img = {};
            var $img = $(this);
            img.node = $img;
            img.initAngle = $img.attr('data-angle') || 0;
            img.initRadius = $img.attr('data-radius') || 0;
            img.width = $img.outerWidth();
            img.height = $img.outerHeight();
            _this.imgsInfo.push(img);
        });
    }
}

$.fn.circleText = function () {
    var $this = $(this);
    if ($this.length == 0) {
        return;
    }
    var circleText = new CircleText($this);
    circleText.trigger();
    return circleText;
}