

function MArray(nW, nH) {

    var tarray = new Array();
    for (var i = 0; i < nH; i++) {
        tarray[i] = new Array();
        }
    return tarray;
}

function check_peogo(nX, nY, map) {//按之前执行

    if (nX < 0 || nX >= 10 || nY < 0 || nY >= 12)
        return 0;

    if (map[nX][nY] == 0 || map[nX][nY] == 2)
        return 0;

    if (map[nX][nY] == 1 || map[nX][nY] == 3)
        return 1;

    if (map[nX][nY] == 4)
        return 2;
}

function check_boxgo(nX, nY, map) {//箱子下一步

    if (nX < 0 || nX >= 10 || nY < 0 || nY >= 12)
        return 0;

    if (map[nX][nY] == 1 || map[nX][nY] == 3)
        return 1;

    return 0;
}