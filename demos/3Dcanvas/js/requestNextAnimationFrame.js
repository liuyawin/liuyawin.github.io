var requestNextAnimationFrame = (function () {
    var originalWebkitMethod,
        wrapper = undefined,
        callback = undefined,
        geckoVersion = 0,
        userAgent = navigator.userAgent,
        self = this;

    if (window.webkitRequestAnimationFrame) {
        wrapper = function (time) {
            if (time === undefined) {
                time = +new Date();
            }
            self.callback(time);
        };

        originalWebkitMethod = window.webkitRequestAnimationFrame;

        window.webkitCancelAnimationFrame = function (callback, elment) {
            self.callback = callback;
            originalWebkitMethod(wrapper, element);
        }
    }
    if (window.mozRequestAnimationFrame) {
        index = userAgent.indexOf('rv:');
        if (userAgent.indexOf('Gecko') !== -1) {
            geckoVersion = userAgent.substring(index + 3, 3);
        }

        if (geckoVersion === '2.0') {
            window.mozRequestAnimationFrame = undefined;
        }
    }
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback, element) {
            var start, finish;
            window.setTimeout(function () {
                start = +(new Date());
                callback(start);
                finish = +(new Date());

                self.timeout = 1000 / 60 - (finish - start);//每秒60帧
            }, self.timeout);
        }
})();