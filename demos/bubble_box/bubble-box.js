function BubbleBox(opts) {
    if (opts.node.length == 0) {
        return;
    }
    this.node = opts.node;
    this.direction = opts.direction || 'left';
    this.message = opts.message || '';
    this.bubbleBox = null;
    this.triangle = null;
    this.blankTriangle = null;
}

BubbleBox.prototype = {
    constructor: BubbleBox,
    trigger: function () {
        this.create();
    },
    create: function () {
        if (this.node.length == 0) {
            return;
        }
        this.createBubbleBox();
    },
    createBubbleBox: function () {
        this.node.css('position', 'relative');
        this.bubbleBox = $('<div class="bubble_box"></div>');
        this.bubbleBox.addClass(this.direction);
        var messageContainer = $('<div class="message_container">' + this.message + '</div>');
        messageContainer.css('height', '80%');
        this.bubbleBox.append(messageContainer);
        this.triangle = $('<div class="triangle"></div>');
        this.blankTriangle = $('<div class="triangle blank_triangle"></div>');
        this.bubbleBox.append(this.triangle).append(this.blankTriangle);
        this.node.append(this.bubbleBox);
        if (this.direction === 'top') {
            this.createTopShape();
        } else if (this.direction === 'right') {
            this.createRightShape();
        } else if (this.direction === 'bottom') {
            this.createBottomShape();
        } else if (this.direction === 'left') {
            this.createLeftShape();
        }
    },
    createLeftShape: function () {
        var bubbleBoxBorderWidth = parseFloat(this.bubbleBox.css('border-width'));
        this.triangle.css('top', (this.bubbleBox.outerHeight() - this.triangle.outerHeight()) / 2);
        this.blankTriangle.css('top', (this.bubbleBox.outerHeight() - this.blankTriangle.outerHeight()) / 2);
        this.bubbleBox.css('top', (this.node.outerHeight() - this.bubbleBox.outerHeight()) / 2);
        this.bubbleBox.css('left', -this.bubbleBox.outerWidth() - this.triangle.outerWidth() - bubbleBoxBorderWidth);
    },
    createRightShape: function(){
        var bubbleBoxBorderWidth = parseFloat(this.bubbleBox.css('border-width'));
        this.triangle.css('top', (this.bubbleBox.outerHeight() - this.triangle.outerHeight()) / 2);
        this.blankTriangle.css('top', (this.bubbleBox.outerHeight() - this.blankTriangle.outerHeight()) / 2);
        this.bubbleBox.css('top', (this.node.outerHeight() - this.bubbleBox.outerHeight()) / 2);
        this.bubbleBox.css('right', -this.bubbleBox.outerWidth() - this.triangle.outerWidth() - bubbleBoxBorderWidth);
    },
    createBottomShape: function(){
        var bubbleBoxBorderWidth = parseFloat(this.bubbleBox.css('border-width'));
        this.triangle.css('left', (this.bubbleBox.outerWidth() - this.triangle.outerWidth()) / 2);
        this.blankTriangle.css('left', (this.bubbleBox.outerWidth() - this.blankTriangle.outerWidth()) / 2);
        this.bubbleBox.css('left', (this.node.outerWidth() - this.bubbleBox.outerWidth()) / 2);
        this.bubbleBox.css('bottom', -this.bubbleBox.outerHeight() - this.triangle.outerHeight() - bubbleBoxBorderWidth);
    },
    createTopShape: function(){
        var bubbleBoxBorderWidth = parseFloat(this.bubbleBox.css('border-width'));
        this.triangle.css('left', (this.bubbleBox.outerWidth() - this.triangle.outerWidth()) / 2);
        this.blankTriangle.css('left', (this.bubbleBox.outerWidth() - this.blankTriangle.outerWidth()) / 2);
        this.bubbleBox.css('left', (this.node.outerWidth() - this.bubbleBox.outerWidth()) / 2);
        this.bubbleBox.css('top', -this.bubbleBox.outerHeight() - this.triangle.outerHeight() - bubbleBoxBorderWidth);
    }
}

$.fn.bubbleBox = function (opts) {
    var _this = $(this);
    if (_this.length == 0) {
        return;
    }
    opts.node = _this;
    var bubbleBox = new BubbleBox(opts).trigger();
}