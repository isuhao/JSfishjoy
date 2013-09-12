/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 13-9-1
 * Time: 下午10:05
 * To change this template use File | Settings | File Templates.
 */
var BackgroundLayer = cc.Layer.extend({
    init:function(){
        this._super();
        console.log("BackgroundLayer's init is OK!");

        var director = cc.Director.getInstance();
        var winSize = director.getWinSize();
        var sprite = cc.Sprite.createWithSpriteFrameName("background.png");
        //var sprite = cc.Sprite.create("FishingJoy_Resources/background.png");
        sprite.setScale(1.32);
        this.addChild(sprite,0);
        sprite.setPosition(cc.p(winSize.width/2,winSize.height/2));




        return true;
    }



})