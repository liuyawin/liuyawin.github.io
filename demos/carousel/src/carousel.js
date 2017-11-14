function Carousel(opts, callback) {
    $.extend({
        imgUrls: [],
        width: 0,
        height: 0
    }, opts);
    //配置选项
    this.node = opts.node;
    this.imgUrls = opts.imgUrls;
    this.width = opts.width;
    this.height = opts.height;
    this.callback = callback;
    this.scroll = null;//滚动框div
    this.leftArrow = null;//左箭头
    this.rightArrow = null;//右箭头
    this.pagination = null;//页码容器
    this.currentIndex = 1;//当前图片索引
    this.timer = null;
    this.wait = opts.wait;//轮播间隔
    this.onMove = false;
}

Carousel.prototype = {
    constructor: Carousel,
    trigger: function () {
        //创建DOM结构
        this.createCarouselDom();
        //创建两边的按钮
        this.createQuickBtn();
        //创建右下角图片索引
        this.createPagination();
        //开启轮播图
        this.start();
    },

    //创建轮播图的DOM结构
    createCarouselDom: function () {
        var len = this.imgUrls.length;
        if (len == 0) {
            return;
        }
        this.scroll = $('<div class="scroll"></div>');
        var $imgUl = $('<ul></ul>');
        $imgUl.css({ 'width': this.width * len + 1, 'height': this.height });
        for (var i = 0; i < len; i++) {
            var $li = $('<li></li>');
            var $img = $('<img src=' + this.imgUrls[i] + ' />');
            $img.css({ 'width': this.width, 'height': this.height });
            $li.css({ 'left': this.width * (i + 1) + 'px' });
            $li.append($img);
            $imgUl.append($li);
        }
        var lastImg = $imgUl.children().last().clone(true);
        lastImg.css('left', 0);
        $imgUl.prepend(lastImg);
        this.scroll.append($imgUl);
        this.node.append(this.scroll);
    },

    //创建左右箭头
    createQuickBtn: function () {
        this.leftArrow = $('<div class="arrow left-arrow"><</div>');
        this.rightArrow = $('<div class="arrow right-arrow">></div>');
        this.leftArrow.css('top', this.height / 2 + 'px');
        this.rightArrow.css('top', this.height / 2 + 'px');
        this.leftArrow.on('click', this.handleLeftArrowClick.bind(this));
        this.rightArrow.on('click', this.handleRightArrowClick.bind(this));
        this.node.append(this.leftArrow).append(this.rightArrow);
    },

    //点击左箭头
    handleLeftArrowClick: function () {
        if (this.onMove) {
            return;
        }

        this.currentIndex--;
        if (this.currentIndex == -1) {
            this.currentIndex = this.imgUrls.length - 1;
        }

        this.update();
    },

    //点击右箭头
    handleRightArrowClick: function () {
        if (this.onMove) {
            return;
        }

        this.currentIndex++;

        this.update();
    },

    update: function () {
        var _this = this;
        clearInterval(this.timer);
        this.updatePagination();
        this.onMove = true;
        this.scroll.animate({ scrollLeft: _this.width * _this.currentIndex }, 500, function () {
            _this.onMove = false;
            console.log('update: ', _this.currentIndex);
            if (_this.currentIndex === _this.imgUrls.length) {
                _this.currentIndex = 0;
                _this.scroll.scrollLeft(0);
            }

            _this.setTimer();

        });
    },

    //创建页码容器
    createPagination: function () {
        var $pagination = $('<div class="pagination"></div>');
        for (var i = 0; i < this.imgUrls.length; i++) {
            var $page = $('<div class="page">' + (i + 1) + '</div>');
            $page.on('click', this.handlePageClick.bind(this, i + 1));
            $pagination.append($page);
        }
        this.pagination = $pagination;
        this.node.append(this.pagination);
    },

    //处理点击页码事件
    handlePageClick: function (i) {
        if (this.onMove) {
            return;
        }

        this.currentIndex = i;

        this.update();
    },

    //更新页码
    updatePagination: function () {
        this.pagination.children().eq(this.currentIndex - 1).addClass('active').siblings().removeClass('active');
    },

    //设置定时器
    setTimer: function () {
        var _this = this;
        this.timer = setInterval(function () {
            //更新当前图片索引和页码
            _this.currentIndex++;
            if (_this.currentIndex > _this.imgUrls.length) {
                _this.currentIndex = 1;
            }
            _this.updatePagination();
            _this.onMove = true;
            _this.scroll.animate({ scrollLeft: _this.width * _this.currentIndex }, 500, function () {
                _this.onMove = false;
                //如果是最后一张图片，直接跳到第0张
                if (_this.currentIndex === _this.imgUrls.length) {
                    _this.currentIndex = 0;
                    _this.scroll.scrollLeft(0);
                }
            });
        }, this.wait);
    },

    start: function () {
        //开始时先显示第一张图片
        this.scroll.scrollLeft(this.width);
        this.updatePagination();
        this.setTimer();

    }
}

$.fn.vo_carousel = function (opts, fn) {
    var $this = $(this);
    if ($this.length == 0) {
        return;
    }
    opts.node = $this;
    var carousel = new Carousel(opts, fn).trigger();
}