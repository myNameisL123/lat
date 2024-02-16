// 图的广度优先搜索
function Node(value) {
    this.value = value;
    this.neighbor = [];
};
var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
var e = new Node("E");
a.neighbor.push(b);
a.neighbor.push(c);
b.neighbor.push(a);
b.neighbor.push(c);
b.neighbor.push(d);
c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);
d.neighbor.push(b);
d.neighbor.push(c);
d.neighbor.push(e);
e.neighbor.push(d);

// 广度优先搜索
function bfs(roots, target, path) {
    if (roots === null || roots.length === 0) return false;
    var nextNode = [];
    for (var i = 0; i < roots.length; i++) { // 比较 寻找
        if (path.indexOf(roots[i]) > -1) continue; // 为什么在循环里判断？因为你传进来的是一个集合在外面判断没有意义
        path.push(roots[i]);
        if (roots[i].value === target) return true;
        else nextNode = nextNode.concat(roots[i].neighbor);
        // 把当前节点的下一层的节点 添加到 nextNode这个集合中去，到下一次循环去判断
    }
    return bfs(nextNode, target, path);
};
// console.log(bfs([c], "A", []));


function bfs1(nodes, target, path) {
    if (nodes === null || nodes.length === 0) return false;
    var nextNode = [];
    for (var i = 0; i < nodes.length; i++) {
        if (path.indexOf(nodes[i]) > -1) continue;
        path.push(nodes[i]);
        if (nodes[i].value === target) return true;
        else nextNode = nextNode.concat(nodes[i].neighbor);
    }
    return bfs1(nextNode, target, path);

};
console.log(bfs1([c], "Z", []));