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

    init:function(){
        this._super();
        console.log("FishLayer's init is OK!");

        //1.init fish into _fishes
        for(var i=0;i<this._capacity;i++){
            var fish = Fish.create();
            this._fishes.push(fish);
       }

        this.schedule(this.addFish,2);
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
    addFish:function(){
        console.log("add Fish");

        var addCount = 10;
        for(var i=0;i<addCount;i++){
            var fish = this._fishes[i];
            fish.setPosition(this.generateRandom());
            this.addChild(fish,5);
        }

    }
})