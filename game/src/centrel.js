function MainCentre(nScene) {

    //原点是画布左下角
    this.L_BLACK_ = 10;//游戏场地左边距
    this.T_BLACK_ = 10;//游戏场地下边距
    this.BLOCK_SIZE = 30;//游戏地图块大小
    this.W_ = 12;//地图宽，多少块
    this.H_ = 10;//地图高，多少块
    this.Step;
    this.Stepttf;
    this.peo_x;
    this.peo_y;
    this.isover;

    this.cMap = new Map(); //生成地图


    this.init = function () {
        this.cMap.initMap(nScene);
        this.peo_x = this.cMap.peo_x;
        this.peo_y = this.cMap.peo_y;
        this.Goal = this.cMap.Goal;
        this.Step = 0;
        this.Stepttf = cc.LabelTTF.create(this.Step, "Arial", 16);
        this.Stepttf.setPosition(cc.p(400, 260));
        nScene.addChild(this.Stepttf);
        this.isover = false;
    }


    this.redenerloop = function () {
        for (var j = 0; j < this.W_; j++) {
            for (var i = 0; i < this.H_; i++) {
                this.cMap.nMap[i][j].setPosition(cc.p(this.L_BLACK_ + this.BLOCK_SIZE / 2 + this.BLOCK_SIZE * (j), this.T_BLACK_ + this.BLOCK_SIZE / 2 + this.BLOCK_SIZE * (this.H_ - i - 1)));
            }
        }
    }


    this.gameloop = function () {
        this.isover = this.cMap.isover();
    }

    this.left = function () {

        var tx = this.peo_x;
        var ty = this.peo_y - 1;

        var kind = check_peogo(tx, ty, this.cMap.map);

        if (kind == 1) {
            this.cMap.goto(this.peo_x, this.peo_y, tx, ty, nScene);
            this.peo_x = tx;
            this.peo_y = ty;
            this.Step++;
            this.Stepttf.setString(this.Step);
        }

        if (kind == 2) {

            if (check_boxgo(tx, ty - 1, this.cMap.map) == 1) {

                this.cMap.boxgoto(this.peo_x, this.peo_y,tx, ty, tx, ty - 1, nScene);
                this.peo_x = tx;
                this.peo_y = ty;
                this.Step++;
                this.Stepttf.setString(this.Step);
            }
        }
    }


    this.right = function () {

        var tx = this.peo_x;
        var ty = this.peo_y + 1;


        var kind = check_peogo(tx, ty, this.cMap.map);

        if (kind == 1) {
            this.cMap.goto(this.peo_x, this.peo_y, tx, ty, nScene);
            this.peo_x = tx;
            this.peo_y = ty;
            this.Step++;
            this.Stepttf.setString(this.Step);
        }

        if (kind == 2) {

            if (check_boxgo(tx, ty + 1, this.cMap.map) == 1) {

                this.cMap.boxgoto(this.peo_x, this.peo_y, tx, ty, tx, ty + 1, nScene);
                this.peo_x = tx;
                this.peo_y = ty;
                this.Step++;
                this.Stepttf.setString(this.Step);
            }
        }
    }


    this.up = function () {

        var tx = this.peo_x - 1;
        var ty = this.peo_y;

        var kind = check_peogo(tx, ty, this.cMap.map);

        if (kind == 1) {
            this.cMap.goto(this.peo_x, this.peo_y, tx, ty, nScene);
            this.peo_x = tx;
            this.peo_y = ty;
            this.Step++;
            this.Stepttf.setString(this.Step);
        }

        if (kind == 2) {

            if (check_boxgo(tx - 1, ty, this.cMap.map) == 1) {

                this.cMap.boxgoto(this.peo_x, this.peo_y, tx, ty, tx - 1, ty, nScene);
                this.peo_x = tx;
                this.peo_y = ty;
                this.Step++;
                this.Stepttf.setString(this.Step);
            }
        }
    }


    this.down = function () {

        var tx = this.peo_x + 1;
        var ty = this.peo_y;


        var kind = check_peogo(tx, ty, this.cMap.map);

        if (kind == 1) {
            this.cMap.goto(this.peo_x, this.peo_y, tx, ty, nScene);
            this.peo_x = tx;
            this.peo_y = ty;
            this.Step++;
            this.Stepttf.setString(this.Step);
        }

        if (kind == 2) {

            if (check_boxgo(tx + 1, ty, this.cMap.map) == 1) {

                this.cMap.boxgoto(this.peo_x, this.peo_y, tx, ty, tx + 1, ty, nScene);
                this.peo_x = tx;
                this.peo_y = ty;
                this.Step++;
                this.Stepttf.setString(this.Step);
            }
        }
    }
}