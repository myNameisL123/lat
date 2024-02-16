// 加点法

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
 * 
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

function getIndex(str) {
    for (var i = 0; i < pointSet.length; i++) {
        if (str == pointSet[i].value) return i;
    }
    return -1;
}

/**
 * @param {此方法是根据当前已经有的节点来进行判断，获取到距离最短的点，并连接他们然后返回}
 * @param {所有的点} pointSet 
 * @param {所有的边} distance 
 * @param {当前已经连接的点} nowPointSet 
 * @param {第一层循环是获取所有的起点，然后我们获取一个当前节点的序号}
 * @param {遍历这个序号在边的集合里面对应的行数是多少}
 * @param {然后看对应行数里面的每一个点，看看它是否在已经连接的集合中存在}
 * @param {并且这个点的距离是最短距离}
 */

function getMinDisNode(pointSet, distance, nowPointSet) {
    var fromNode = null; // 线段的起点
    var minDisNode = null; // 线段的终点
    var minDic = max; // 最短的距离
    // 根据当前已有的这些点为起点，依次判断连接其他的点的距离是多少
    for (var i = 0; i < nowPointSet.length; i++) { // 第一层循环是获取所有的起点
        var noPointIndex = getIndex(nowPointSet[i].value); // 获取当前节点的序号 
        for (var j = 0; j < distance[noPointIndex].length; j++) { // 并且通过它找到该下标在边集合里的位置
            var thisNode = pointSet[j]; // thisNode表示在distance中对应下标的每一个点。但是这个点不是对象
            if (nowPointSet.indexOf(thisNode) < 0 // 看看边集合中对应行数的点是否在已经连接的集合中存在  首先这个点不能是已经接入的点
                && distance[noPointIndex][j] < minDic) { // 其次点之间的距离是目前的最短距离,拿着几条边依次和MAX比较看谁最小，
                // micDIc会自动更新每一个比较的值，最后自动更新为最小的值
                fromNode = nowPointSet[i];
                minDisNode = thisNode;
                minDic = distance[noPointIndex][j];
            }
        }
    }
    fromNode.neighbor.push(minDisNode); // 起点的邻居是终点
    minDisNode.neighbor.push(fromNode); // 重点的邻居是起点  让他们连接到一起
    return minDisNode;
};

/**
 * 
 * @param {点的集合} pointSet 
 * @param {边的集合} distance 
 * @param {起始位置} start 
 */

function prim(pointSet, distance, start) {
    var nowPointSet = []; // 已经连接的点的集合
    nowPointSet.push(start);
    // 我们要通过起始的节点来获取最小代价的边
    while (true) {
        var minDesNode = getMinDisNode(pointSet, distance, nowPointSet);
        nowPointSet.push(minDesNode);
        if (nowPointSet.length == pointSet.length) {
            break;
        }
    }
};
prim(pointSet, distance, pointSet[1]);

console.log(pointSet);

