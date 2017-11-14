function Linkage(options) {
    this.node = options.node;
    this.data = options.data;
    this.callback = options.callback;
    this.select0 = this.node.find('select[data-name="select_0"]');
    this.select1 = this.node.find('select[data-name="select_1"]');
    this.select2 = this.node.find('select[data-name="select_2"]');
    this.dirty = false;
    this.value = [];
}

Linkage.prototype = {
    constructor: Linkage,
    trigger: function () {
        this.createLinkage();
    },
    createLinkage: function () {
        //获取初始第一个select里面的option
        this.getSelectOptions();
        //为每一个select绑定事件
        this.bindEve();
    },

    //为select填充option
    getOptions: function (select, data) {
        for (var key in data) {
            //有空键时直接跳过
            if (!key.trim()) {
                continue;
            }
            select.append('<option value=' + key.trim() + '>' + data[key].trim() + '</option>');
        }
    },

    //获取一级select的option
    getSelectOptions: function () {
        var data = this.data[100000];
        this.getOptions(this.select0, data);
    },

    //一级select值改变事件
    handleSelect0Change: function () {
        var select0 = this.select0;
        var val = select0.val();
        if (!val) {
            return;
        }
        //删除一级select中的提示语option
        if (!this.dirty) {
            select0.children().first().remove();
            this.dirty = true;
        }
        this.value[0] = val;
        var data = this.data[val];
        //将select1里之前的option清空
        this.select1.empty();
        //重新设置select1里的option
        this.getOptions(this.select1, data);
        //二级select联动
        this.handleSelect1Change();
    },

    //二级select值改变事件
    handleSelect1Change: function () {
        var select1 = this.select1;
        var val = select1.val();
        if (!val) {
            return;
        }
        this.value[1] = val;
        //将select2里之前的option清空
        this.select2.empty();
        //重新设置select2里的option
        var data = this.data[val];
        this.getOptions(this.select2, data);
        //三级select联动
        this.handleSelect2Change();
    },

    //三级select值改变事件
    handleSelect2Change: function () {
        this.value[2] = this.select2.val();
        if (typeof this.callback == 'function') {
            this.callback(this.value);
        }
    },

    bindEve: function () {
        this.select0.on('change', this.handleSelect0Change.bind(this));
        this.select1.on('change', this.handleSelect1Change.bind(this));
        this.select2.on('change', this.handleSelect2Change.bind(this));
    }
}

$.fn.vo_linkage = function (data, callback) {
    var $this = $(this);
    if ($this.length == 0) {
        return;
    }
    if (!data) {
        return;
    }
    $this.each(function () {
        new Linkage({
            node: $this,
            data: data,
            callback: callback || function () { }
        }).trigger();
    });
}

