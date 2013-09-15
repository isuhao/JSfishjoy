/**
 * Created with JetBrains WebStorm.
 * User: cl
 * Date: 13-9-15
 * Time: 下午9:10
 * To change this template use File | Settings | File Templates.
 */
var Weapon = cc.Node.extend({
    _cannon:null,

    init:function(){
        this._super();

        //TODO:初始化Cannon
        this._cannon = Cannon.create(1);
        this.addChild(this._cannon);
        //Todo:初始化bullet

        //Todo:初始化fishNet
    },
    setCannonType:function(type){
        this._cannon.setType(type);
    }
})


Weapon.create = function(){
    var weapon = new Weapon();
    weapon.init();
    return weapon;
}