/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 13-8-31
 * Time: 下午9:45
 * To change this template use File | Settings | File Templates.
 */

var GameScene = cc.Scene.extend({
//    ctor:function(){
//        console.log("GameScene's init is OK!");
//    },

    preloadResources:function(){
        console.log("preloadResources is OK!");
        var spriteFrameChche = cc.SpriteFrameCache.getInstance();
        spriteFrameChche.addSpriteFrames(plist_fishingjoy_resource);
        //spriteFrameChche.addSpriteFrames(plist_explosion);
    },

    onEnter:function(){
        this._super();

        this.preloadResources();

        var _that = this;
        setTimeout(function(){
            _that.loadLayers();
        },100);
    },
    loadLayers:function(){

        console.log("delay is OK");

        var backgroundLayer = new BackgroundLayer();
        backgroundLayer.init();
        this.addChild(backgroundLayer);

        var fishLayer = new FishLayer();
        fishLayer.init();
        this.addChild(fishLayer);

        var cannonLayer = new CannonLayer();
        cannonLayer.init();
        this.addChild(cannonLayer);

//        var menuLayer = new MenuLayer();
//        menuLayer.init();
//        this.addChild(menuLayer);
//
        var panelLayer = new PanelLayer();
        panelLayer.init();
        this.addChild(panelLayer);
    },
    pause:function(){

    },
    resume:function(){

    },
    sound:function(){

    },
    music:function(){

    },
    transToMenu:function(){

    }

})

