function Map() {

    this.BLOCK_SIZE = 30;//游戏地图块大小
    this.W_ = 12;//地图宽，多少块
    this.H_ = 10;//地图高，多少块
    this.L_BLACK_ = 10;//游戏场地左边距
    this.T_BLACK_ = 10;//游戏场地下边距
    this.peo_x = 4;
    this.peo_y = 9;
    this.Goal = 5;
    this.nMap = MArray(this.W_, this.H_);//保存地图
    this.mapInit = new Array("000000000000",
                         "000022222200",
                         "002221111200",
                         "022314221220",
                         "023341411520",
                         "023314141220",
                         "022222211200",
                         "000000222200",
                         "000000000000",
                         "000000000000");//地图数据
    this.map = MArray(this.W_, this.H_);

    this.initMap = function (nScene) {
        for (var i = 0; i < this.H_; i++) {
            for (var j = 0; j < this.W_; j++) {
                this.map[i][j] = this.mapInit[i][j];
                var tSprite = cc.Sprite.create("res/p" + this.map[i][j] + ".jpg");
                tSprite.setPosition(cc.p(this.L_BLACK_ + this.BLOCK_SIZE / 2 + this.BLOCK_SIZE * (j), this.T_BLACK_ + this.BLOCK_SIZE / 2 + this.BLOCK_SIZE * (this.H_ - i - 1)));
                nScene.addChild(tSprite, 2);
                this.nMap[i][j] = tSprite;
            }
        }
    }


    this.goto = function (px, py, tx, ty, nScene) {

        var tSprite = cc.Sprite.create("res/p5.jpg");
        nScene.addChild(tSprite, 2);
        this.nMap[tx][ty] = tSprite;

        this.map[tx][ty] = this.map[px][py];

        if (this.mapInit[px][py] == 3) {
            var tSprite = cc.Sprite.create("res/p3.jpg");
            nScene.addChild(tSprite, 2);
            this.nMap[px][py] = tSprite;
            this.map[px][py] = this.mapInit[px][py];
        }
        else{
            var tSprite = cc.Sprite.create("res/p1.jpg");
            nScene.addChild(tSprite, 2);
            this.nMap[px][py] = tSprite;
            this.map[px][py] = '1';
        }
    }


    this.boxgoto = function (px, py, tx, ty, ttx, tty, nScene) {

        var tSprite = cc.Sprite.create("res/p4.jpg");
        nScene.addChild(tSprite, 2);
        this.nMap[ttx][tty] = tSprite;
        this.map[ttx][tty] = this.map[tx][ty];

        tSprite = cc.Sprite.create("res/p5.jpg");
        nScene.addChild(tSprite, 2);
        this.nMap[tx][ty] = tSprite;
        this.map[tx][ty] = this.map[px][py];

        if (this.mapInit[px][py] == 3) {
            var tSprite = cc.Sprite.create("res/p3.jpg");
            nScene.addChild(tSprite, 2);
            this.nMap[px][py] = tSprite;
            this.map[px][py] = this.mapInit[px][py];
        }
        else {
            var tSprite = cc.Sprite.create("res/p1.jpg");
            nScene.addChild(tSprite, 2);
            this.nMap[px][py] = tSprite;
            this.map[px][py] = '1';
        }
    }

    this.isover = function () {
        var num = 0;
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 12; j++) {
                if (this.mapInit[i][j] == 3 && this.map[i][j] == 4)
                    num++;
            }
        }
        if (num == this.Goal)
            return true;
        else
            return false;
    }

}