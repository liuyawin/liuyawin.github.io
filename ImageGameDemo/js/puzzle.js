
function JigsawPuzzle(container, level, imageUrl) {
    if (!container) {
        return;
    }
    this.container = document.getElementById(container);
    if (!this.container) {
        return;
    }
    this.url = imageUrl;
    this.level = level || 0;
    this.images = [];
    this.dragSourceImage = null;
    this.dragTargetImage = null;
    this.lineLevel = [3, 4, 5];
    this.lineCount = this.lineLevel[this.level];
    this.imageWidth = this.container.offsetWidth / this.lineCount - 2;
    this.imageHeight = this.container.offsetHeight / this.lineCount - 2;
}

JigsawPuzzle.prototype.placeImage = function () {

    for (var i = 0; i < this.lineCount; i++) {
        for (var j = 0; j < this.lineCount; j++) {
            var image = this.images[i * this.lineCount + j];
            var position = image.nowPosition.split("_");
            var w = -position[0];
            var h = -position[1];
            image.style.backgroundPositionX = this.imageWidth * h + 'px';
            image.style.backgroundPositionY = this.imageHeight * w + 'px';
        }
    }
}

JigsawPuzzle.prototype.getInitPositionArr = function () {
    var arr = [];
    for (var i = 0; i < this.lineCount; i++) {
        for (var j = 0; j < this.lineCount; j++) {
            arr.push(i + '_' + j);
        }
    }
    return arr.sort(function () {
        return 0.5 - Math.random()
    });
}

JigsawPuzzle.prototype.initGame = function () {
    var initPostionArr = this.getInitPositionArr();
    var _this = this;
    for (var i = 0; i < this.lineCount; i++) {
        for (var j = 0; j < this.lineCount; j++) {
            var image = document.createElement('div');
            var w = this.container.offsetWidth / this.lineCount - 2;
            var h = this.container.offsetHeight / this.lineCount - 2
            image.style.width = this.imageWidth + 'px';
            image.style.height = this.imageHeight + 'px';
            image.style.position = 'absolute';
            image.style.left = j * this.imageWidth + 'px';
            image.style.top = i * this.imageHeight + 'px';
            image.style.backgroundImage = 'url(' + this.url + ')';
            image.style.border = "1px solid #ff00ff";
            image.style.borderRadius = "8px";
            image.targetPosition = i + '_' + j;
            image.nowPosition = initPostionArr[i * this.lineCount + j];

            (function (image) {
                image.onclick = function (e) {
                    if (_this.dragSourceImage == null) {
                        var mask = document.createElement('div');
                        mask.setAttribute('id', 'activeImage');
                        mask.style.width = _this.imageWidth + 'px';
                        mask.style.height = _this.imageHeight + 'px';
                        mask.style.backgroundColor = 'rgba(0,0,0,0.5)';
                        mask.style.borderRadius = "8px";
                        this.appendChild(mask);
                        _this.dragSourceImage = this;

                    } else {
                        //交换，删除class
                        _this.dragSourceImage.removeChild(document.getElementById('activeImage'));
                        _this.dragTargetImage = this;
                        var tempPosition = _this.dragSourceImage.nowPosition;
                        _this.dragSourceImage.nowPosition = _this.dragTargetImage.nowPosition;
                        _this.dragTargetImage.nowPosition = tempPosition;
                        _this.placeImage();
                        _this.dragSourceImage = null;
                        _this.dragTargetImage = null;
                        var isDone = getResult();
                        if (isDone) {
                            alert("成功！");
                        }

                        function getResult() {
                            var result = true;
                            for (var i = 0; i < _this.images.length; i++) {
                                var image = _this.images[i];
                                if (image.nowPosition != image.targetPosition) {
                                    result = false;
                                    break;
                                }
                            }
                            return result;
                        }
                    }
                }
            })(image, i, j);

            this.images.push(image);
            this.container.appendChild(image);
        }
    }
    this.placeImage();
}

var game = new JigsawPuzzle('container', 1, './images/kenan.png');
game.initGame();


