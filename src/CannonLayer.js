/**
 * Created with JetBrains WebStorm.
 * User: cl
 * Date: 13-9-1
 * Time: 下午10:06
 * To change this template use File | Settings | File Templates.
 */
var CannonLayer = cc.Layer.extend({
    _weapon:null,

    init:function(){
        this._super();
        console.log("CannonLyaer's init is OK!");

        this._weapon = Weapon.create();
        this.addChild(this._weapon);

        var btnSubMenuItem = cc.MenuItemSprite.create(
            cc.Sprite.createWithSpriteFrameName("button_sub.png"),
            cc.Sprite.createWithSpriteFrameName("button_sub.png"),
            this.switchCannon,this);
        var btnAddMenuItem = cc.MenuItemSprite.create(
            cc.Sprite.createWithSpriteFrameName("button_add.png"),
            cc.Sprite.createWithSpriteFrameName("button_add.png"),
            this.switchCannon,this);

        //减号
        var btnSubMenu = cc.Menu.create(btnSubMenuItem);
        this.addChild(btnSubMenu);
        var btnSubMenuItemSize = btnSubMenuItem.getContentSize();
        btnSubMenu.setPosition(cc.p(Global.getWndWidth()/2-btnSubMenuItemSize.width-5 , btnSubMenuItemSize.height*0.5));
        //加号
        var btnAddMenu = cc.Menu.create(btnAddMenuItem);
        this.addChild(btnAddMenu);
        var btnAddMenuItemSize = btnAddMenuItem.getContentSize();
        btnAddMenu.setPosition(cc.p(Global.getWndWidth()/2+btnAddMenuItemSize.width , btnAddMenuItemSize.height*0.5));
    },
    switchCannon:function(pSender){
        console.log("switch button is pressed");
        console.log("pSender",pSender);
        //TODO:weapon->setType()

        //this._weapon.setCannonType(type);
    }

})