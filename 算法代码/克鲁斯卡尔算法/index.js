// 加边法

var max = 1000000;
var pointSet = []; // 点的集合
var distance = [  // 边的集合
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0],
];

/**
 * F
 * @param {图的节点创建} value 
 */
function Node(value) {
    this.value = value;
    this.neighbor = [];
};

var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
var e = new Node("E");

pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

// 测试判断两条边能否连接，需要知道我哪些点被连起来了
function canLink(resultList, tempBegin, tempEnd) {
    // 测试首先判断tempBegin 这个参数在哪个部落
    // tempEnd 这个参数又在哪个部落
    var beginIn = null;
    var endIn = null;
    for (var i = 0; i < resultList.length; i++) {
        if (resultList[i].indexOf(tempBegin) > -1) {
            beginIn = resultList[i];
        };
        if (resultList[i].indexOf(tempEnd) > -1) {
            endIn = resultList[i];
        };
    };
    //  两个点 都是新的点 (都不在任何部落里) -- 可以连接 ， 产生新的部落
    // beginIn在A部落，end没有部落 ==  A部落扩张一个村庄
    // end在A部落，begin没有部落 == A部落扩张一个村庄
    // beginIn在A部落，end在B部落 == 将AB两个部落合并
    // beginIn和end在同一个部落， == 不可以连接
    if (beginIn != null && endIn != null && beginIn === endIn) {
        return false;
    };
    return true;
};

// 真实的连接
function link(resultList, tempBegin, tempEnd) {
    var beginIn = null;
    var endIn = null;
    for (var i = 0; i < resultList.length; i++) {
        if (resultList[i].indexOf(tempBegin) > -1) {
            beginIn = resultList[i];
        };
        if (resultList[i].indexOf(tempEnd) > -1) {
            endIn = resultList[i];
        };
    };
    //  两个点 都是新的点 (都不在任何部落里) -- 可以连接 ， 产生新的部落
    if (beginIn == null && endIn == null) {
        var newArr = [];
        newArr.push(tempBegin);
        newArr.push(tempEnd);
        resultList.push(newArr);
    } else if (beginIn != null && endIn == null) {    // beginIn在A部落，end没有部落 ==  A部落扩张一个村庄
        beginIn.push(tempEnd);

    } else if (beginIn == null && endIn != null) {    // end在A部落，begin没有部落 == A部落扩张一个村庄
        endIn.push(tempBegin);

    } else if (beginIn != null && endIn != null && beginIn != endIn) {     // beginIn在A部落，end在B部落 == 将AB两个部落合并
        var allIn = beginIn.concat(endIn);
        var needRemove = resultList.indexOf(endIn);
        resultList.splice(needRemove, 1);
        needRemove = resultList.indexOf(beginIn);
        resultList.splice(needRemove, 1);
        resultList.push(allIn);
    };
    // 将两个点连接起来成为邻居
    tempBegin.neighbor.push(tempEnd);
    tempEnd.neighbor.push(tempBegin);
};

function kruakal(pointSet, distance) {
    var resultList = []; // 这里是二维数组,此数组代表的是有多少个"部落"

    while (true) {
        var minDis = max; // 设置最小的边
        var begin = null; // 起点
        var end = null;  // 终点
        for (var i = 0; i < distance.length; i++) {
            for (var j = 0; j < distance[i].length; j++) {
                //  随便找两个点 看一下它们 是不是最短的
                var tempBegin = pointSet[i];
                var tempEnd = pointSet[j];
                //  i != j 是为了去掉自己到自己的距离，因为都为0
                if (i != j && distance[i][j] < minDis && canLink(resultList, tempBegin, tempEnd)) {
                    minDis = distance[i][j];
                    begin = tempBegin;
                    end = tempEnd;
                };
            };
        };
        link(resultList, begin, end);
        if (resultList.length === 1 && resultList[0].length === pointSet.length) { //  只存在一个部落
            break;
        };
    }
};

kruakal(pointSet, distance);
console.log(pointSet);