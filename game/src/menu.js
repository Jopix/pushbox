
var GameLayer = cc.Layer.extend({

    map: null,
    boss: null,

    init: function () {
        this._super(); //加载层的时候就初始化这里
        var tt = cc.config.deviceType; //判断设备类型
        if (tt == 'browser') {
            this.setKeyboardEnabled(true); //开始键盘监听
        } else if (tt == 'mobile') {
            cc.log('哟，你用手机的啊');
        }

        var  blackGround= cc.LayerColor.create(cc.c4(60, 60, 60, 255), 480, 320);
        blackGround.setPosition(cc.p(0, 0));
        this.addChild(blackGround);


        var gameGround = cc.LayerColor.create(cc.c4(200, 200, 200, 255), 360, 300);
        gameGround.setPosition(cc.p(10, 10));
        this.addChild(gameGround, 1);

        var stepWord = cc.LabelTTF.create("Step: ", "Arial", 16);
        stepWord.setPosition(cc.p(400, 280));
        this.addChild(stepWord);

        boss = new MainCentre(this);
        boss.init();
        this.schedule(this.redenerloop, 0.05);
        this.schedule(this.mainloop, 0.5);
        return true;
    },

    redenerloop: function (dt) {
        boss.redenerloop();
    },

    mainloop: function (dt) {
        boss.gameloop();
        if (boss.isover) {

            var gameover = cc.LayerColor.create(cc.c4(0, 0, 0, 125), 480, 320);
            gameover.setPosition(cc.p(0, 0));
            this.addChild(gameover, 3);

            var gameoverlayer1 = cc.LayerColor.create(cc.c4(40, 40, 40, 255), 260, 140);
            gameoverlayer1.setPosition(cc.p(110, 110));
            this.addChild(gameoverlayer1, 3);

            var overWord = cc.LabelTTF.create("Game Over!", "Arial", 16);
            overWord.setPosition(cc.p(240, 160));
            this.addChild(overWord, 3);



            cc.Director.getInstance().pause();
        }
    },

    onKeyDown: function(key) { //这里是键盘事件，对人进行简单位移
        if (key == '87' || key == '38') { //w
            boss.up();
        } else if (key == '68' || key == '39') //d
        {
            boss.right();
        } else if (key == '65' || key == '37') //a
        {
            boss.left();
        } else if (key == '83' || key == '40') //s
        {
            boss.down();
        }
    },

});


var MenuTest = cc.Layer.extend({
    init: function () {

        //创建一个绿色层   
        var greenLayer = cc.LayerColor.create(cc.c4(60, 60, 60, 255), 480, 320);

        //创建菜单文字菜单要用到的Label
        var menuLabel1 = cc.LabelTTF.create("Game Star", "Arial", 20);
        var menuLabel2 = cc.LabelTTF.create("Quit", "Arial", 20);

        //创建菜单项（MenuItem）
        var menuItem1 = cc.MenuItemLabel.create(menuLabel1, this, this.menu1Selected);
        var menuItem2 = cc.MenuItemLabel.create(menuLabel2, this, this.menu2Selected);

        //创建游戏菜单（Menu）
        var menu = cc.Menu.create(menuItem1, menuItem2);

        //将菜单添加到绿色层里
        greenLayer.addChild(menu);
        this.addChild(greenLayer);

        //设置
        menuLabel2.setColor(cc.c3(0, 0, 0));
        menuItem1.setPosition(cc.p(0, 0));
        menuItem2.setPosition(cc.p(0, -40));

        return true;
    },

    menu1Selected: function (e) {
        var scene2 = new GameScene(); //Green.scene();
        var tranScene = cc.TransitionMoveInL.create(0.5, scene2);
        cc.Director.getInstance().replaceScene(tranScene);
    },

    menu2Selected: function (e) {
    }
});


var GameScene = cc.Scene.extend({
    //进入场景时
    onEnter: function () {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild(layer);
    }
});

var MenuScene = cc.Scene.extend({
    //进入场景时
    onEnter: function () {
        this._super();
        var layer = new MenuTest();
        layer.init();
        this.addChild(layer);
    }
});