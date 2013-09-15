/**
 * Created with JetBrains WebStorm.
 * User: cl
 * Date: 13-9-1
 * Time: 下午10:06
 * To change this template use File | Settings | File Templates.
 */
var PanelLayer = cc.Layer.extend({
    init:function(){
        this._super();
        console.log("PanelLayer's init is OK!");
        var pauseItem = cc.MenuItemSprite.create(
            cc.Sprite.createWithSpriteFrameName("pause_normal.png"),
            cc.Sprite.createWithSpriteFrameName("pause_selected.png"),
            this.pause,this);
        var pauseMenu = cc.Menu.create(pauseItem);
        this.addChild(pauseMenu);
        var pauseItemSize = pauseItem.getContentSize();
        pauseMenu.setPosition(Global.getWndWidth()-pauseItemSize.width*0.5,pauseItemSize.height*0.5)

    },

    pause:function(){
      alert("pause is OK!");
    }
})