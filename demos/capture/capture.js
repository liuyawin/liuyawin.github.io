function Capture(node) {
    this.node = node;
    this.picSelector = node.find('input[name="pic-selector"]');
    this.errorBox = node.find('span[name="error-text"]');
    this.originBox = node.find('div[name="origin-img-box"]');
    this.mask = node.find('div[name="origin-mask"]');
    this.originImg = node.find('img[name="origin-img"]');
    this.originImgUrl = '';
    this.oriImageWidth = 0;
    this.oriImageHeight = 0;
    this.oriImageMarginTop = 0;
    this.oriImageMarginLeft = 0;
    this.isLoadComplete = false;
    this.captureLayer = null;
}

Capture.prototype = {
    constructor: Capture,

    trigger: function () {
        this.bindEve();
    },

    bindEve: function () {
        this.picSelector.on('click', this.handlePicSelectorClick.bind(this));
        this.picSelector.on('change', this.handlePictureChange.bind(this));
    },

    //更新组件状态
    updateState: function (state, message) {
        switch (state) {
            case 'error':
                this.errorBox.removeClass('hidden');
                break;
            case 'reset':
                this.errorBox.addClass('hidden');
        }
    },

    //处理点击事件
    handlePicSelectorClick: function () {
        this.updateState('reset');
    },

    //处理选择文件事件
    handlePictureChange: function (e) {
        e.preventDefault();
        var file = e.target.files[0];
        //检查图片格式
        if (file && this.checkImg(file.name)) {
            //重置所有区域
            this.reset();
            //填充图片
            this.placeOriginImage(file);
        } else {
            this.updateState('error');
        }
    },

    //检测上传的文件是否为图片
    checkImg: function (name) {
        var ext = name.substring(name.lastIndexOf('.')).toUpperCase();
        return ext === '.JPG' || ext === '.PNG' || ext === '.JPEG';
    },

    //获取图片的实际宽高，并根据宽高重置图片的大小和位置
    placeOriginImage: function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            var image = new Image();
            image.onload = function () {
                _this.originImgUrl = window.URL.createObjectURL(file);
                _this.originImg.attr('src', _this.originImgUrl);
                _this.resizeImg(image.width, image.height);
                _this.isLoadComplete = true;
            }
            image.src = data;
        }
        reader.readAsDataURL(file);
    },

    //重置图片的大小和位置
    resizeImg: function (width, height) {
        var containerWidth = this.originBox.width(),
            containerHeight = this.originBox.height();
        if (width > height) {
            this.oriImageWidth = containerWidth;
            this.oriImageHeight = height * containerWidth / width;
            this.oriImageMarginTop = (containerHeight - this.oriImageHeight) / 2;
            this.oriImageMarginLeft = 0;
        } else {
            this.oriImageWidth = width * containerHeight / height;;
            this.oriImageHeight = containerHeight;
            this.oriImageMarginTop = 0;
            this.oriImageMarginLeft = (containerWidth - this.oriImageWidth) / 2;
        }

        this.originImg.css({
            'width': this.oriImageWidth,
            'height': this.oriImageHeight,
            'margin-top': this.oriImageMarginTop,
            'margin-left': this.oriImageMarginLeft
        });
        //设置蒙版
        this.setMask();
    },

    //设置蒙版
    setMask: function () {
        this.mask.css({
            'width': this.oriImageWidth,
            'height': this.oriImageHeight,
            'top': this.oriImageMarginTop,
            'left': this.oriImageMarginLeft
        });
        this.setCaptureLayer();
    },

    setCaptureLayer: function () {
        this.captureLayer = $('<div class="capture_layer"></div>');

        this.dragBox = $('<div class="drag_box"><img src="' + this.originImgUrl + '"/></div>');
        this.captureLayer.append(this.dragBox);
        this.captureLayer.css({
            'position': 'absolute',
            'width': '100px',
            'height': '100px',
            'top': this.oriImageMarginTop,
            'left': this.oriImageMarginLeft
        });
        this.dragBox.css({
            'position': 'absolute',
            'width': '100%',
            'height': '100%',
            'overflow': 'hidden',
            'cursor': 'move',
            'top': 0,
            'left': 0
        });
        this.captureLayer.find('img').css({
            'width': this.oriImageWidth,
            'height': this.oriImageHeight,
            'position': 'absolute'
        });
        this.originBox.append(this.captureLayer);
        this.captureLayer.on('mousedown', this.handleCaptureLayerMousedown());
        this.captureLayer.on('mouseup', this.handleCaptureLayerMouseup());
    },

    handleCaptureLayerMousedown: function () {
        var _this = this;
        return function (e) {
            e.preventDefault();
            var preMousePosition = {
                x: e.pageX || e.clientX,
                y: e.pageY || e.clientY,
            }

            var preCaptureLayerPosition = {
                left: parseInt(_this.captureLayer.css('left')),
                top: parseInt(_this.captureLayer.css('top'))
            }

            var preDragBoxPosition = {
                left: parseInt(_this.dragBox.scrollLeft()),
                top: parseInt(_this.dragBox.scrollTop())
            }

            $(document).on('mousemove', _this.bindMousemove(preMousePosition, preCaptureLayerPosition, preDragBoxPosition));
            $(document).on('mouseup', _this.handleCaptureLayerMouseup());
        }
    },

    handleCaptureLayerMouseup: function () {
        var _this = this;
        var captureLayerMouseup = function () {
            $(document).unbind('mousemove', this.handleMousemove);
            $(document).unbind('mouseup', captureLayerMouseup);
        }
        return captureLayerMouseup;
    },

    bindMousemove: function (preMousePosition, preCaptureLayerPosition, preDragBoxPosition) {
        var _this = this;

        this.handleMousemove = function (e) {
            var curMousePosition = {
                x: e.pageX || e.clientX,
                y: e.pageY || e.clientY,
            }

            var moveLength = {
                x: curMousePosition.x - preMousePosition.x,
                y: curMousePosition.y - preMousePosition.y,
            }
            console.log(preMousePosition.y)
            console.log(moveLength.y)
            if (parseInt(_this.captureLayer.css('left')) <= _this.oriImageMarginLeft && moveLength.x < 0) {
                _this.captureLayer.css({ 'left': _this.oriImageMarginLeft + 'px' });
                _this.dragBox.scrollLeft(0);
            } else if (parseInt(_this.captureLayer.css('left')) >= _this.oriImageMarginLeft + _this.originImg.width() - _this.captureLayer.width() && moveLength.x > 0) {
                _this.captureLayer.css({ 'left': _this.oriImageMarginLeft + _this.originImg.width() - _this.captureLayer.width() + 'px' });
                _this.dragBox.scrollLeft(_this.oriImageMarginLeft + _this.originImg.width() - _this.captureLayer.width());
            } else {
                var scrollLeftLength = preDragBoxPosition.left + moveLength.x;
                _this.captureLayer.css({ 'left': preCaptureLayerPosition.left + moveLength.x + 'px' });
                if (scrollLeftLength < 0) {
                    scrollLeftLength = 0;
                } else if (scrollLeftLength > _this.oriImageMarginLeft + _this.originImg.width() - _this.captureLayer.width()) {
                    scrollLeftLength = _this.oriImageMarginLeft + _this.originImg.width() - _this.captureLayer.width();
                }
                _this.dragBox.scrollLeft(scrollLeftLength);
            }

            if (parseInt(_this.captureLayer.css('top')) <= _this.oriImageMarginTop && moveLength.y < 0) {
                _this.captureLayer.css({ 'top': _this.oriImageMarginTop + 'px' });
                _this.dragBox.scrollTop(0);
            } else if (parseInt(_this.captureLayer.css('top')) >= _this.oriImageMarginTop + _this.originImg.height() - _this.captureLayer.height() && moveLength.y > 0) {
                _this.captureLayer.css({ 'top': _this.oriImageMarginTop + _this.originImg.height() - _this.captureLayer.height() + 'px' });
                _this.dragBox.scrollTop(_this.oriImageMarginTop + _this.originImg.height() - _this.captureLayer.height());
            } else {
                var scrollTopLength = preDragBoxPosition.top + moveLength.y;
                _this.captureLayer.css({ 'top': preCaptureLayerPosition.top + moveLength.y + 'px' });
                if (scrollTopLength < 0) {
                    scrollTopLength = 0;
                } else if (scrollTopLength > _this.oriImageMarginTop + _this.originImg.height() - _this.captureLayer.height()) {
                    scrollTopLength = _this.oriImageMarginTop + _this.originImg.height() - _this.captureLayer.height();
                }
                //console.log(scrollTopLength)
                _this.dragBox.scrollTop(scrollTopLength);
            }

        }

        return this.handleMousemove;
    },

    //重置组件
    reset: function () {
        if (this.captureLayer) {
            this.captureLayer.remove();
        }
    }
}

$.fn.capture = function () {
    var $this = $(this);
    if ($this.length == 0) {
        return;
    }
    var capture = new Capture($this).trigger();;
}