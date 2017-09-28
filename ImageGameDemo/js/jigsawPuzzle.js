
function JigsawPuzzle(container, level) {
    if (!container) {
        return;
    }
    this.container = document.getElementById(container);
    if (!this.container) {
        return;
    }
    this.level = level || 0;
    this.images = [];
    this.dragSourceImage = null;
    this.dragTargetImage = null;
    this.lineLevel = [3, 4, 5];
    this.lineCount = this.lineLevel[this.level];
}

JigsawPuzzle.prototype.placeImage = function () {
    var _this = this;
    //按nowPosition对图片进行排序
    this.images.sort(function (a, b) {
        var aPosition = a.nowPosition.split('_');
        var bPosition = b.nowPosition.split('_');
        if (aPosition[0] > bPosition[0]) {
            return true;
        } if (aPosition[0] == bPosition[0]) {
            if (aPosition[1] > bPosition[1]) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    });

    this.container.innerHTML = "";
    this.images.forEach(function (image) {
        _this.container.appendChild(image);
    }, this);
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
            var image = document.createElement('img');
            image.src = './images/' + i + '_' + j + '.png';
            image.targetPosition = i + '_' + j;
            image.nowPosition = initPostionArr[i * 3 + j];
            image.setAttribute('draggable', true);

            (function (image) {
                // image.ondragstart = function () {
                //     dragSourceImage = this;
                // }
                // image.ondragenter = function () {
                //     dragTargetImage = this;
                // }
                // image.ondragend = function () {
                //     var tempPosition = dragSourceImage.nowPosition;
                //     dragSourceImage.nowPosition = dragTargetImage.nowPosition;
                //     dragTargetImage.nowPosition = tempPosition;
                //     _this.placeImage();
                //     var isDone = isDone();
                //     if (isDone) {
                //         alert("成功！");
                //     }

                //     function isDone() {
                //         var isDone = true;
                //         for (var i = 0; i < _this.images.length; i++) {
                //             var image = _this.images[i];
                //             if (image.nowPosition != image.targetPosition) {
                //                 isDone = false;
                //                 break;
                //             }
                //         }
                //         return isDone;
                //     }
                // }
                image.onclick = function (e) {
                    console.log(this)
                    console.log(e)
                    if (_this.dragSourceImage == null) {
                        e.target.classList.add('gray');
                        _this.dragSourceImage = this;
                    } else {
                        //交换，删除class
                        _this.dragSourceImage.classList.remove('gray');
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
            })(image);

            this.images.push(image);
        }
    }
    this.placeImage();
}

var game = new JigsawPuzzle('container', 0);
game.initGame();


