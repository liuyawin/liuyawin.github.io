function notification(type,msg,time){
    //$('.pop').remove();
    //样式
    var msg_style = "float:left;height:36px;line-height:36px;color:#fff;font-size:18px;padding:0 0 0 10px;" +
        "font-weight:normal;font-family:'微软雅黑';border:1px solid #000";
    var src = 'images/';
    var pop_style = "position:fixed;top:10%;left:42%;-moz-border-radius:8px;"+
        "-webkit-border-radius:8px;border-radius:8px;padding:10px 25px 10px 20px;";
    //提示类型
    if(type == 'error'){
        pop_style = pop_style+"background:transparent;";
    }else if(type=='success'){
        pop_style = pop_style+"background:transparent;";
    }else{
        pop_style = pop_style+"background:transparent;";
    }
    var div = "<div class='pop' style='"+pop_style+"'>"+
        "<div style='float:left'></div>"+
        "<div style='"+msg_style+"'>"+msg+"</div>"+
        "<div class='clear'></div>"+
        "</div>";
    $('body').append(div);
    //定时隐藏
    setTimeout(function(){
        $('.pop').fadeOut(500,function(){
        });
    },time);
}
//获得网站根目录
/*function getRootPath(){
    var strFullPath = window.document.location.href;
    var strPath = window.document.location.pathname;
    var pos = strFullPath.indexOf(strPath);
    var prePath = strFullPath.substring(0,pos);
    var postPath = strPath.substring(0,strPath.substr(1).indexOf('/')+1);
    return prePath+postPath;
}*/
