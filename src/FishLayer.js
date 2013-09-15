/**
 * Created with JetBrains WebStorm.
 * User: cl
 * Date: 13-9-1
 * Time: 下午10:06
 * To change this template use File | Settings | File Templates.
 */
var FishLayer = cc.Layer.extend({
    _fishes:[],
    _capacity:20,
    _currCount:0,
    _addCount:3,

    init:function(){
        this._super();
        console.log("FishLayer's init is OK!");

        this.schedule(this.updateFishLayer,2);
        //cc.Director.getInstance().getScheduler().scheduleCallbackForTarget(
        //    this,this.addFish,2,cc.REPEAT_FOREVER,0,false);
    },
    setCapacity:function(capacity)
    {
        this._capacity = capacity;
    },
    generateRandom:function(){
      var PosX = Math.random()*(Global.getWndWidth()-100) + 50;
      var PosY = Math.random()*(Global.getWndHeight()-100) + 50;
        console.log(PosX,PosY);
      return cc.p(PosX,PosY);
    },
    onEnter:function(){
        this._super();
    },
    updateFishLayer:function(){
        console.log("add Fish");

        for(var i=0;i<this._addCount;i++){
            if(this._currCount >= this._capacity)
                break;
            var fish = Fish.create();
            this.addChild(fish);
        }
        this._currCount += this._addCount;

    }
})