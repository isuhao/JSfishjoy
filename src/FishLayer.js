/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 13-9-1
 * Time: 下午10:06
 * To change this template use File | Settings | File Templates.
 */
var FishLayer = cc.Layer.extend({
    _fishes:[],
    _capacity:20,
    _that:null,

    init:function(){
        console.log("FishLayer's init is OK!");

        _that = this;
        //1.init fish into _fishes
        for(var i=0;i<this._capacity;i++){
            var fish = Fish.create();
            this._fishes.push(fish);
        }

        cc.Director.getInstance().getScheduler().scheduleCallbackForTarget(
            this,this.addFish(),2000,cc.REPEAT_FOREVER,100,false);
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

    },
    addFish:function(dt){
        console.log("add Fish");
        var addCount = 10;
        for(var i=0;i<addCount;i++){
            var fish = this._fishes[i];
            fish.setPosition(this.generateRandom());
            this.addChild(fish,1);
        }
    }
})