var Dial = function (node, options) {
    if (node === 0 || !options || !options.activities) {
        return;
    }

    options = $.extend({
        p1: {
            x: 0,
            y: 200
        },
        p2: {
            x: 640,
            y: 100
        },
        angle: 30
    }, options);

    this.node = node;
    this.$canvas = node.find('canvas');
    this.canvas = this.$canvas[0];
    this.ctx = canvas.getContext('2d');

    this.$canvas.attr({
        width: this.$canvas.parent().css('width'),
        height: this.$canvas.parent().css('height')
    });

    this.options = options;
    
    this.r = 0;//圆半径
    this.o = {};//圆心坐标 

    this.firstScreenIndex = 0;//第一屏显示的活动索引
    this.firstScreenOffsetCount = 0;//第一屏显示时偏移的天数

    this.totalDayCount = 0;//总天数
    this.maxOffsetAngle = 0;//最大偏移角度

    this.activitySpan = [];//两个活动之间间隔的天数
    this.curActiIndex = 0;//当前绘制的活动的索引

    this.isTipShow = false;
    this.isHighlightShow = false;

    this.highlightIndex = -1;//当前高亮活动索引
    this.preHighlightIndex = -1;//上一个高亮活动的索引

    this.moveLength = 0;//鼠标移动的累加距离
    this.offsetAngle = 0;//转动时的偏移角度，初始为0
    this.curActiPosition = [];//当前屏幕上显示的活动及位置

    this.options.angle = this.options.angle / 180 * Math.PI;

    //----------------以下为可配置选项--------------

    this.longTickWidth = 4;//长刻度宽
    this.longTickHeight = 18;//长刻度高
    this.middleTickHeight = 10;//中长刻度高
    this.shortTickHeight = 6;//短刻度高

    this.velocity = 40;//调整转动的速度

    this.dotRadius = 5;//小圆点的半径
    this.dotLineWidth = 4;//小圆点的线宽
    this.dotStrokeStyle = 'blue';
    this.activeDotStrokeStyle = 'red';
    this.dotFillStyle = 'rgba(25, 24, 25, 1)';

    this.font = '12px Microsoft Yahei';

    this.curSpan = 2;//当前剩余的天数跨度，初始值为2，可以为右边留出一格的距离
    this.ANGlE_DELTA = Math.PI / 1000;//小刻度之间的间距

    this.longTickDistance = 20;//控制长刻度的距离
    this.degreesEachDay = this.ANGlE_DELTA * this.longTickDistance / 2;//一天在转盘上是多少度

    console.log(Math.PI * 2 / this.degreesEachDay)

    this.init();
}

Dial.prototype = {
    constructor: Dial,
    init: function () {
        if (!this.options.activities) {
            return;
        }
        this.initActivitySpan();//计算每两个活动之间间隔的天数
        this.getFirstScreenIndex();
        this.getMaxOffsetAngle();
        this.initOffset();//初始化偏移量，让转盘开始时转到今天
        this.createDial();//创建转盘
        this.createTipNode();//创建提示节点
        this.bindEvent();//绑定事件

        // this.ctx.save();
        // this.ctx.beginPath();
        // this.ctx.strokeStyle = 'red';
        // this.ctx.lineWidth = 4;
        // this.ctx.arc(
        //     this.o.x,
        //     this.o.y,
        //     this.r,
        //     0 + Math.PI / 2,
        //     this.ANGlE_DELTA * this.longTickDistance / 2 + Math.PI / 2
        // );
        // this.ctx.stroke();
        // this.ctx.restore();
    },
    initActivitySpan: function () {
        for (var i = 0; i < this.options.activities.length - 1; i++) {
            var cur = this.options.activities[i];
            var next = this.options.activities[i + 1];
            var span = this.getDayCount(cur.date, next.date)
            this.totalDayCount += span;
            this.activitySpan.push(span);
        }
    },
    getFirstScreenIndex: function () {
        var i = 0;
        for (i = 0; i < this.options.activities.length; i++) {
            var curDate = this.options.activities[i].date;
            var date = new Date();
            var curYear = date.getFullYear();

            var tody = Date.parse(curYear + '-' + (date.getMonth() + 1) + '-' + date.getDate());

            var curMonth = curDate.substring(0, curDate.indexOf('月'));
            var curDay = curDate.substring(curDate.indexOf('月') + 1, curDate.length - 1);
            var formatCur = Date.parse(curYear + '-' + curMonth + '-' + curDay);

            if (formatCur - tody >= 0) {
                this.firstScreenIndex = i;
                break;
            }
        }
    },
    initOffset: function () {
        //计算初始偏移天数
        for (var i = this.activitySpan.length - 1; i > this.firstScreenIndex - 1; i--) {
            this.firstScreenOffsetCount += this.activitySpan[i];
        }

        //计算初始偏移角度
        this.offsetAngle = -(this.degreesEachDay * this.firstScreenOffsetCount - this.options.angle / 2 + this.degreesEachDay);

        if (Math.abs(this.offsetAngle) > Math.abs(this.maxOffsetAngle)) {
            this.offsetAngle = -this.maxOffsetAngle;
        }
        this.moveLength = -this.offsetAngle * 180 / Math.PI * this.velocity;
    },
    //获取两个日期之间的天数
    getDayCount: function (curDate, nextDate) {
        var date = new Date();
        var curYear = date.getFullYear();

        var tody = Date.parse(curYear + '-' + date.getMonth() + '-' + date.getDate());

        var curMonth = curDate.substring(0, curDate.indexOf('月'));
        var curDay = curDate.substring(curDate.indexOf('月') + 1, curDate.length - 1);

        var nextMonth = nextDate.substring(0, nextDate.indexOf('月'));
        var nextDay = nextDate.substring(nextDate.indexOf('月') + 1, nextDate.length - 1);

        var formatCur = Date.parse(curYear + '-' + curMonth + '-' + curDay);
        var formatNext = Date.parse(curYear + '-' + nextMonth + '-' + nextDay);
        var dateSpan = formatNext - formatCur;
        dateSpan = Math.abs(dateSpan);
        var dateCount = Math.floor(dateSpan / (24 * 3600 * 1000));

        return dateCount;
    },
    getMaxOffsetAngle: function () {
        this.maxOffsetAngle = this.totalDayCount * this.degreesEachDay - this.options.angle + 2 * this.degreesEachDay;
    },
    createDial: function () {
        this.calculateRadius();//计算半径
        this.calculateO();//计算圆心坐标
        this.drawArc();//绘制圆弧
        this.drawScales();//绘制刻度
    },
    initParams: function () {
        this.curSpan = 2;
        this.curActiIndex = this.options.activities.length;//当前活动的索引，从最后一个开始
        this.curActiPosition = [];
    },
    calculateRadius: function () {
        this.lineLength = Math.sqrt(Math.pow(this.options.p2.x, 2) + Math.pow(this.options.p2.y - this.options.p1.y, 2));//传入的两点连线的长度
        this.r = this.lineLength / 2 / Math.cos(Math.PI / 2 - this.options.angle / 2);
    },
    calculateO: function () {
        //计算辅助角度
        this.auxAngle = Math.PI / 2 - this.options.angle / 2 - Math.asin(Math.abs(this.options.p1.y - this.options.p2.y) / this.lineLength);//辅助角

        this.o.x = this.options.p2.x - this.r * Math.cos(this.auxAngle);
        this.o.y = -(this.r * Math.sin(this.auxAngle) - this.options.p2.y);
    },
    drawArc: function () {
        this.ctx.save();
        this.ctx.strokeStyle = 'gray';
        this.ctx.lineWidth = 1;
        this.ctx.arc(this.o.x, this.o.y, this.r, Math.PI / 2 + this.auxAngle, Math.PI / 2 + this.auxAngle + this.options.angle, true);
        this.ctx.stroke();
        this.ctx.restore();
    },
    //绘制刻度
    drawScales: function (drawActive) {
        var radius = this.r + this.longTickHeight,
            ANGLE_MAX = this.options.angle + this.auxAngle,//刻度的最大角度
            ANGlE_DELTA = this.ANGlE_DELTA,//刻度的间隔
            tickWidth;

        this.initParams();//重置相关参数

        this.ctx.save();

        for (var angle = this.auxAngle, cnt = 0; angle < ANGLE_MAX - this.offsetAngle + 0.2; angle += ANGlE_DELTA, cnt++) {
            this.drawScale(angle + this.offsetAngle, radius, cnt++, drawActive);
        }

        this.ctx.restore();
    },
    drawScale: function (angle, radius, cnt, drawActive) {
        if (this.curActiIndex < 0) {
            return;
        }

        var circleX = this.o.x;
        var circleY = this.o.y;
        var isLong = cnt % this.longTickDistance === 0;

        var r = 0;//小圆半径

        if (isLong) {
            tickHeight = this.longTickHeight;
            radius = radius;
        } else if (cnt * 2 % this.longTickDistance === 0) {
            tickHeight = this.middleTickHeight;
            radius = radius - this.longTickHeight + this.middleTickHeight;
        } else {
            tickHeight = this.shortTickHeight;
            radius = radius - this.longTickHeight + this.shortTickHeight;
        }

        //绘制刻度线
        this.ctx.beginPath();
        this.ctx.moveTo(
            circleX + Math.cos(angle) * (radius - tickHeight - r),
            circleY + Math.sin(angle) * (radius - tickHeight - r)
        );

        this.ctx.lineTo(
            circleX + Math.cos(angle) * (radius),
            circleY + Math.sin(angle) * (radius)
        );

        this.ctx.save();
        this.ctx.lineWidth = isLong ? this.longTickWidth : 1;
        this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
        this.ctx.stroke();
        this.ctx.restore();

        if (isLong) {
            if (this.curSpan > 1) {
                this.curSpan--;
                return;
            }

            this.curActiIndex--;
            this.curSpan = this.activitySpan[this.curActiIndex - 1];//当前日期和上一个日期间隔的天数

            if (this.curActiIndex < 0) {
                return;
            }

            //绘制小圆圈
            r = this.dotRadius;
            this.ctx.save();
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
            this.drawDot(
                circleX + Math.cos(angle) * (radius - tickHeight),
                circleY + Math.sin(angle) * (radius - tickHeight),
                r,
                drawActive
            );

            this.ctx.font = this.font;
            //绘制文本
            this.drawText(
                circleX + Math.cos(angle) * (radius - tickHeight),
                circleY + Math.sin(angle) * (radius - tickHeight),
                drawActive
            );

            this.ctx.restore();
        }
    },
    drawDot: function (x, y, r, drawActive) {
        this.ctx.save();

        if (this.highlightIndex === this.curActiIndex && drawActive) {
            this.ctx.strokeStyle = this.activeDotStrokeStyle;
        } else {
            this.ctx.strokeStyle = this.dotStrokeStyle;
        }

        this.fillStyle = this.dotFillStyle;
        this.ctx.lineWidth = this.dotLineWidth;

        this.ctx.beginPath();

        this.ctx.arc(
            x,
            y,
            r,
            0,
            Math.PI * 2,
            true
        );

        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.restore();
    },
    drawText: function (x, y, drawActive) {
        var index = this.curActiIndex;//当前活动索引

        this.ctx.textAlign = 'center';

        if (index >= 0 && this.options.activities && index < this.options.activities.length) {
            this.ctx.save();
            if (index === this.highlightIndex && drawActive) {
                this.ctx.strokeStyle = 'black';
            } else {
                this.ctx.strokeStyle = 'gray';
            }
            //绘制日期
            this.ctx.strokeText(this.options.activities[index].date, x, y - 16);

            //绘制内容
            this.ctx.strokeText(this.options.activities[index].content[0], x, y + 40);

            this.curActiPosition.push({
                index: index,
                x: x,
                y: y
            });
            this.ctx.restore();
        }

    },
    createTipNode: function () {
        for (var i = 0; i < this.options.activities.length; i++) {
            var activity = this.options.activities[i];
            var div = $('<div class="dial-tip dial-tip' + i + '"><b class="dial-triangle"></b></div>');

            if (activity.img && activity.img.length > 0) {
                var img = $('<img src="' + activity.img + '"/>');
                div.append(img);
            }

            var contentContainDiv = $('<div class="contents"></div>')

            for (var j = 0; j < activity.content.length; j++) {
                var content = activity.content[j];
                var a = $('<a>' + content + '</a>');
                contentContainDiv.append(a);
            }

            div.append(contentContainDiv);
            this.node.append(div);
        }
    },
    bindEvent: function () {
        this.mouseMoveFunc = this.handleMouseMove.call(this);
        this.mouseClickMoveFunc = this.handleMouseClickMove.call(this);//鼠标拖动处理事件
        this.mouseUpFunc = this.handleMouseUp.call(this);//鼠标抬起处理事件
        this.$canvas.on('mousedown', this.handleMouseDown.call(this));
        this.$canvas.on('mousemove', this.mouseMoveFunc);
    },
    handleMouseDown: function () {
        var _this = this;
        return function (e) {
            _this.preX = e.screenX;
            $('.dial-tip').css('display', 'none');
            _this.$canvas.off('mousemove', _this.mouseMoveFunc);
            $(document).on('mouseup', _this.mouseUpFunc);
            $(document).on('mousemove', _this.mouseClickMoveFunc);
        }
    },
    handleMouseClickMove: function () {
        var _this = this;
        return function (e) {

            if (_this.offsetAngle >= 0 && e.screenX - _this.preX < 0) {//最右边再向右拉时拉不动
                return;
            }

            if (Math.abs(_this.offsetAngle) >= _this.maxOffsetAngle && e.screenX - _this.preX > 0) {//最左边再向左拉时拉不动
                return;
            }

            _this.moveLength += e.screenX - _this.preX;//鼠标在x方向移动的累计距离
            _this.preX = e.screenX;

            //这里调整转动的速度
            _this.offsetAngle = -_this.moveLength / 180 * Math.PI / _this.velocity;

            if (Math.abs(_this.offsetAngle) >= _this.maxOffsetAngle) {
                _this.offsetAngle = -_this.maxOffsetAngle
            }

            if (_this.offsetAngle > 0) {
                _this.offsetAngle = 0;
            }
            //重绘
            _this.rePaint();
        }
    },
    handleMouseUp: function () {
        var _this = this;
        return function () {
            _this.$canvas.on('mousemove', _this.mouseMoveFunc);
            $(document).off('mouseup', _this.mouseUpFunc);
            $(document).off('mousemove', _this.mouseClickMoveFunc);
        }
    },
    handleMouseMove: function () {
        var _this = this;
        return function (e) {
            var x = e.offsetX,
                y = e.offsetY,
                index = -1;

            if (_this.curActiPosition.length > 0) {
                for (var i = 0; i < _this.curActiPosition.length; i++) {
                    var pos = _this.curActiPosition[i];

                    if (Math.abs(pos.x - x) < 20 && Math.abs(pos.y - y) < 20) {
                        index = _this.options.activities.length - 1 - i;
                        break;
                    }
                }
            }

            if ((index === _this.preHighlightIndex && _this.isTipShow) || (index < 0 && !_this.isTipShow)) {
                return;
            }

            if (_this.isTipShow) {
                $('.dial-tip').css('display', 'none');
                _this.isTipShow = false;
            }

            if (_this.isHighlightShow) {
                _this.isHighlightShow = false;
            }
            //重绘
            _this.rePaint();

            if (index >= 0) {

                _this.preHighlightIndex = _this.highlightIndex;
                _this.highlightIndex = index;

                //重绘
                _this.rePaint(true);
                _this.isTipShow = true;
                this.isHighlightShow = true;

                var $curTipBox = $('.dial-tip' + index);

                $curTipBox.css({
                    top: pos.y + 20 + 'px',
                    left: pos.x - 36 + 'px',
                    display: 'block'
                });
            }
        }
    },
    rePaint: function (drawActive) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawArc();//绘制圆弧
        this.drawScales(drawActive);//绘制刻度
    }
}

$.fn.createDial = function (options) {
    var $this = $(this);

    if ($this.length === 0 || !options || !options.activities) {
        return;
    }

    options = $.extend({
        p1: {
            x: 0,
            y: 200
        },
        p2: {
            x: 640,
            y: 100
        },
        angle: 30
    }, options);

    var dial = new Dial($this, options);
}