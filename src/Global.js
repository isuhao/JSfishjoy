/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 13-9-9
 * Time: 下午8:58
 * To change this template use File | Settings | File Templates.
 */
var Global = Global||{};

Global.getWndSize = function(){
    var director = cc.Director.getInstance();
    if(director){
        var winSize = director.getWinSize();
        return winSize;
    }
    return 0;
}

Global.getWndWidth = function(){
    return Global.getWndSize().width;
}

Global.getWndHeight = function(){
    return Global.getWndSize().height;
}