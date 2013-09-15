/**
 * Created with JetBrains WebStorm.
 * User: cl
 * Date: 13-9-8
 * Time: 下午2:10
 * To change this template use File | Settings | File Templates.
 */
var Fish = cc.Node.extend({
    _fishType:{k_Fish_Type_Red:0,k_Fish_Type_Green:1,k_Fish_Type_Count:2},
    _fishAnimFrames :7,

    addFish:function(){
        var type = parseInt(Math.random()*3);
        var fishSprite;
        switch(type)
        {
            case 0:
                fishSprite = cc.Sprite.createWithSpriteFrameName("fish_0_1.png");
                break;
            case 1:
                fishSprite = cc.Sprite.createWithSpriteFrameName("fish_1_1.png");
                break;
            case 2:
                fishSprite = cc.Sprite.createWithSpriteFrameName("fish_0_3.png");
                break;

        }
        this.addChild(fishSprite);
        fishSprite.setPosition(this.generateRandom());
        this.fishAnimation(type,fishSprite);
    },
    fishAnimation:function(type,sprite){
        var animFrames = [];
        var str="";
        for(var i=0;i<this._fishAnimFrames;i++){
            if(type == 0 || type == 2)
                str = "fish_0_" + i + ".png";
            if(type == 1)
                str = "fish_1_" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }
        var animation = cc.Animation.create(animFrames,0.15);
        sprite.runAction(cc.RepeatForever.create(cc.Animate.create(animation)));

    },
    generateRandom:function(){
        var PosX = Math.random()*(Global.getWndWidth()-100) + 50;
        var PosY = Math.random()*(Global.getWndHeight()-100) + 50;
        console.log(PosX,PosY);
        return cc.p(PosX,PosY);
    }

})
Fish.create = function()
{
    var fish = new Fish();
    if(fish){
        fish.addFish();
        return fish;
    }
    return null;

}