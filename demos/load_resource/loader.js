$(function () {
    // $.ajax({
    //     url: 'resource.js',
    //     type: 'GET',
    //     dataType: 'JSON',
    // }, function(data){
    //     console.log(data);
    //     var urls = JSON.parse(data).urls;
    //     for (var i = 0; i < urls.length; i++) {
    //         var url = urls[i];
    //         var ext = url.substring(url.lastIndexOf('.')).toUpperCase();
    //         if (ext == 'JPG' || ext == 'PNG' || ext == 'JPEG' || ext == 'GIF') {
    //             var img = new Image();
    //             img.url = url;
    //         } else if (ext == 'MP3') {

    //         }{

    //         }
    //     }
    // });
    // $.getJSON('resource.json', function(data){
    //     console.log(data);
    // });
    var urls = [
        "http://p0.ifengimg.com/pmop/2017/0829/EDF3DD77647889889463759090669475AB64187A_size37_w540_h304.gif",
        "http://img.mp.sohu.com/upload/20170704/fbdf9fd761814a9fa43e94bd9f855e5b.png",
        "http://img.mp.itc.cn/upload/20161002/9452d54557e64a52b5f91af58583cfda_th.gif",
        "http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=gif&step_word=&hs=0&pn=24&spn=0&di=1154211520&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1733065723%2C2548660223&os=3988847164%2C334032521&simid=0%2C0&adpicid=0&lpn=0&ln=1713&fr=&fmq=1511519833572_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170825%2Fe76216476dd74a8581828325826a8a2a.gif&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bf5i7_z%26e3Bv54AzdH3FwAzdH3F8m0dbma9m_8cccna&gsm=0&rpstart=0&rpnum=0",
        "http://img.mp.sohu.com/upload/20170706/ef66276dae3c43578cbe383f23f86931_th.png",
        "http://img.mp.itc.cn/upload/20160927/38ed940600f5494e898049932cb62e08_th.jpg",
        "http://img.zcool.cn/community/010a6d571b0d0a6ac7253812adef4a.gif",
        "http://n.7k7kimg.cn/2015/1031/1446254336677.gif",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511530191464&di=e72189c0cc9917a6554a02daf3bfede6&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F923af4c978edc1992f165e33522de27653b0da96.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511530212012&di=ce9e59f1f63706f47bbaae4d27333b77&imgtype=0&src=http%3A%2F%2Ft.qianlong.com%2Fdata%2Fattachment%2Fforum%2F201704%2F28%2F135401f7zr7qrscuzrli7h.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511530233452&di=f32adca4a3dfa729e6a7757847db1750&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D3077192844%2C3847185459%26fm%3D214%26gp%3D0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511530274601&di=d89935d87d8d01c3c0cb480335988e12&imgtype=0&src=http%3A%2F%2Fscdn.file1.gk99.com%2Fphoto%2F2012-04%2F2012-04-16133454877636143.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511530302035&di=8673ba3a3722e2a0ec7c676fd2553f38&imgtype=0&src=http%3A%2F%2Fi3.img.969g.com%2Fnews%2Fimgx2013%2F05%2F23%2F225_133823_df172.jpg"
    ];
    var urlsLen = urls.length;
    var doneCount = 0;
    for (var i = 0; i < urlsLen; i++) {
        var url = urls[i];
        var ext = url.substring(url.lastIndexOf('.')).toUpperCase();
        if (ext == '.JPG' || ext == '.PNG' || ext == '.JPEG' || ext == '.GIF') {
            var img = new Image();
            img.src = url;
            img.onload = function () {
                doneCount++;
                console.log(doneCount);
                reloadProgressBar();
            }
            img.onerror = function () {
                console.log('Error!')
            }
        } else if (ext == '.MP3') {

        }

    }
    function reloadProgressBar(){
        var len = (doneCount + 1) / urlsLen * 100;
        $('#progress #doneLen').css('width', len + 'px');
    }
    $('#btn').on('click', function () {
        for (var i = 0; i < urls.length; i++) {
            var url = urls[i];
            var img = $('<img src="' + url + '"/>');
            $(document.body).append(img);
        }
    })
});