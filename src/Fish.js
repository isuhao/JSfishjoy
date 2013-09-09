/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 13-9-8
 * Time: 下午2:10
 * To change this template use File | Settings | File Templates.
 */
var Fish = cc.Class.extend({
    _fishType:{k_Fish_Type_Red:0,k_Fish_Type_Green:1,k_Fish_Type_Count:2},
    _fishSprite:null,

    ctor:function(){

    },
    addFish:function(){
        var type = parseInt(Math.random()*3);
        switch(type)
        {
            case 0:
                this._fishSprite = cc.Sprite.createWithSpriteFrameName("fish_0_1.png");
                break;
            case 1:
                this._fishSprite = cc.Sprite.createWithSpriteFrameName("fish_1_1.png");
                break;
            case 2:
                this._fishSprite = cc.Sprite.createWithSpriteFrameName("fish_0_3.png");
                break;
        }

    },
    getFish:function()
    {
        return this._fishSprite;
    }

})
Fish.create = function()
{
    var fish = new Fish();
    if(fish){
        fish.addFish();
        var a = fish.getFish();
        return fish.getFish();
    }
    return null;

}