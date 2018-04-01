function Ball(options) {
    this.R = options.R || 100;
    this.xPos = options.xPos;
    this.yPos = options.yPos;
    this.zPos = options.zPos;
    this.alpha = 1;
    this.r = 0;
    this.x = 0;
    this.y = 0;
}

Ball.prototype = {
    constructor: Ball,
    draw: function (ctx) {
        ctx.save();
        ctx.fillStyle = 'rgba(0, 0, 0, ' + this.alpha + ')'
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}