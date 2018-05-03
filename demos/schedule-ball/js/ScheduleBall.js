function ScheduleBall(options) {
    if (!options || !options.id) {
        return;
    }
    this.canvas = document.getElementById(options.id);
    this.ctx = this.canvas.getContext('2d');
    this.width = canvas.width || 250;
    this.height = canvas.height || 250;
    this.lineWidth = 8;

    this.staffRange = options.staffRange;//公司学习
    this.selfRange = options.selfRange;//自主学习

    this.currentRange = 0;
    this.range = this.staffRange + this.selfRange;

    //圆属性
    this.c = this.width / 2;//圆心位置
    this.r = this.c - this.lineWidth * 2;//圆半径

    //正弦/余弦曲线属性
    this.sx = 0;
    this.sy = this.width / 2;
    this.axisLength = this.width;//轴长
    this.waveWidth = 0.020;//波浪宽度,数越小越宽 
    this.waveHeight = 8;//波浪高度,数越大越高
    this.speed = 0.09;//波浪速度，数越大速度越快
    this.xOffset = 0;//波浪x偏移量

    this.isPause = false;

    this.render();
}

ScheduleBall.prototype = {
    constructor: ScheduleBall,

    drawCircle: function () {
        this.ctx.lineWidth = this.lineWidth;

        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#a3a3c2';
        this.ctx.arc(this.c, this.c, this.r + 5, 0, 2 * Math.PI);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(this.c, this.c, this.r, 0, 2 * Math.PI);
        this.ctx.clip();
    },

    drawSin: function () {
        this.ctx.save();

        var points = []; //用于存放绘制Sin曲线的点

        this.ctx.beginPath();
        //在整个轴长上取点
        for (var x = this.sx; x < this.sx + this.axisLength; x += 20 / this.axisLength) {
            //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
            var y = -Math.sin((this.sx + x) * this.waveWidth + this.xOffset);

            var dY = this.height * (1 - this.currentRange / 100);

            points.push([x, dY + y * this.waveHeight]);
            this.ctx.lineTo(x, dY + y * this.waveHeight);
        }

        //封闭路径
        this.ctx.lineTo(this.axisLength, this.height);
        this.ctx.lineTo(this.sx, this.height);
        this.ctx.lineTo(points[0][0], points[0][1]);
        this.ctx.fillStyle = '#1c86d1';
        this.ctx.fill();

        this.ctx.restore();
    },

    drawCos: function () {
        this.ctx.save();

        var points = []; //用于存放绘制Sin曲线的点

        this.ctx.beginPath();
        //在整个轴长上取点
        for (var x = this.sx; x < this.sx + this.axisLength; x += 20 / this.axisLength) {
            //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
            var y = -Math.cos((this.sx + x) * this.waveWidth + this.xOffset);

            var dY = this.height * (1 - this.currentRange / 100);

            points.push([x, dY + y * this.waveHeight]);
            this.ctx.lineTo(x, dY + y * this.waveHeight);
        }

        //封闭路径
        this.ctx.lineTo(this.axisLength, this.height);
        this.ctx.lineTo(this.sx, this.height);
        this.ctx.lineTo(points[0][0], points[0][1]);
        this.ctx.fillStyle = '#47d147';
        this.ctx.fill();

        this.ctx.restore();
    },

    drawText: function () {
        this.ctx.save();

        var size = 0.4 * this.r;
        this.ctx.font = size + 'px Microsoft Yahei';
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = "rgba(06, 85, 128, 0.8)";
        this.ctx.fillText(~~this.currentRange + '%', this.c, this.c + size / 2);

        this.ctx.restore();
    },

    //绘制圆上的进度弧线及圆点
    drawScheduleArc: function () {
        var staffAngle = this.staffRange / 100 * Math.PI * 2;
        var selfAngle = this.selfRange / 100 * Math.PI * 2;
        var curAngle = this.currentRange / 100 * Math.PI * 2;

        if (curAngle < staffAngle) {
            //公司学习
            this.drawStaffCircle(-Math.PI / 2, curAngle - Math.PI / 2);
            //圆圈
            this.drawCirclePoint(curAngle);
        } else {
            //公司学习
            this.drawStaffCircle(-Math.PI / 2, staffAngle - Math.PI / 2);
            //自主学习
            this.drawSelfCircle(staffAngle - Math.PI / 2, curAngle - Math.PI / 2);
            //圆圈
            this.drawCirclePoint(curAngle);
        }

    },

    drawStaffCircle: function (startAngle, endAngle) {
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.strokeStyle = '#FB7775';
        this.ctx.arc(this.c, this.c, this.r + 5, startAngle, endAngle);
        this.ctx.stroke();
        this.ctx.restore();
    },

    drawSelfCircle: function (startAngle, endAngle) {
        //自主学习
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.strokeStyle = 'blue';
        this.ctx.arc(this.c, this.c, this.r + 5, startAngle, endAngle);
        this.ctx.stroke();
        this.ctx.restore();
    },

    drawCirclePoint: function (curAngle) {
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = '#29293d';
        this.ctx.fillStyle = '#FFF';

        //计算圆心位置
        var center = {
            x: this.c + (this.r + 5) * Math.sin(Math.PI - curAngle),
            y: this.c + (this.r + 5) * Math.cos(Math.PI - curAngle)
        }

        //绘制
        this.ctx.arc(center.x, center.y, this.lineWidth / 2 + 1, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.arc(center.x, center.y, this.lineWidth / 2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.fillStyle = '#FB7775';
        this.ctx.arc(center.x, center.y, this.lineWidth / 2 - 1, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
    },

    render: function () {
        if (this.isPause) {
            return;
        }

        this.ctx.clearRect(0, 0, this.width, this.height);

        this.drawCircle();

        if (this.currentRange <= this.range) {
            var tmp = 1;
            this.currentRange += tmp;
        }

        if (this.currentRange > this.range) {
            var tmp = 1;
            this.currentRange -= tmp;
        }

        this.drawCos();
        this.drawSin();
        this.drawText();

        this.ctx.restore();

        //绘制外圈进度曲线
        this.drawScheduleArc();

        this.xOffset += this.speed;
        requestAnimationFrame(this.render.bind(this));
    },

    pause: function(){
        this.isPause = true;
    },

    resume: function(){
        this.isPause = false;
        this.render();
    }
}