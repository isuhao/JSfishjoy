/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 13-9-1
 * Time: 下午10:06
 * To change this template use File | Settings | File Templates.
 */
var PanelLayer = cc.Layer.extend({
    init:function(){
        this._super();
        console.log("PanelLayer's init is OK!");
        var pauseItem = new cc.MenuItemSprite();
        var pauseItem = cc.MenuItemSprite.create(
            cc.Sprite.createWithSpriteFrameName("pause_normal.png"),
            cc.Sprite.createWithSpriteFrameName("pause_selected.png"),
            this,this.pause);

    },
    pause:function(){
      console.log("pause is OK!");
    }
})