const matrixTool = {
    makeRow: function (v = 0) {
        const array = new Array(9);
        array.fill(v);
        return array;
    },

    makeMatrix: function (v = 0) {
        return Array.from({ length: 9 }, () => this.makeRow(v))
    },

    //Fisher-Yates洗牌算法
    shuffle: function (array) {
        if (!array instanceof Array) {
            return;
        }
        let curIndex = 0;//当前索引
        let len = array.length;
        while (curIndex < len) {
            //产生一个curIndex到len之间的随机数
            let targetIndex = curIndex + Math.floor(Math.random() * (len - curIndex));
            //交换
            [array[curIndex], array[targetIndex]] = [array[targetIndex], array[curIndex]];
            curIndex++;
        }
    }
}

module.exports = matrixTool;