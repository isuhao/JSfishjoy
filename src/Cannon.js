/**
 * Created with JetBrains WebStorm.
 * User: cl
 * Date: 13-9-15
 * Time: 下午9:37
 * To change this template use File | Settings | File Templates.
 */

//全局变量：小炮类型
var g_cannonType = {k_Cannon_Type_1:0,k_Cannon_Type_2:1,k_Cannon_Type_Count:2,k_Cannon_Type_Invalid:3};

var Cannon = cc.Node.extend({
    _cannonType:null,

    init:function(type){
        this._super();

        this.addCannon(type);
    },
    addCannon:function(type){
        var cannonMenuItem;
        this._cannonType = type||this._cannonType.k_Cannon_Type_1;
        switch(this._cannonType){
            case 0:
                cannonMenuItem = cc.MenuItemSprite.create(
                    cc.Sprite.createWithSpriteFrameName("cannon_level_1.png")
                );
                break;
            case 1:
                cannonMenuItem = cc.MenuItemSprite.create(
                    cc.Sprite.createWithSpriteFrameName("cannon_level_2.png")
                );
                break;
            case 2:
                break;
            case 3:
                break;
        }
        //小炮
        var cannonMenu = cc.Menu.create(cannonMenuItem);
        this.addChild(cannonMenu,0,this._cannonType);
        var cannonMenuItemSize = cannonMenuItem.getContentSize();
        cannonMenu.setPosition(cc.p(Global.getWndWidth()/2 , cannonMenuItemSize.height*0.5));
    },
    setType:function(type){
        if(type > g_cannonType.k_Cannon_Type_Count){
            type = g_cannonType.k_Cannon_Type_1;
        }else if(type < g_cannonType.k_Cannon_Type_1){
            type = g_cannonType.k_Cannon_Type_Count-1;
        }
        this.removeChildByTag(this._cannonType,false);
        this.addCannon(type);


    }
})
Cannon.create = function(type)
{
    var cannon = new Cannon();
    cannon.init(type);
    return cannon;
}