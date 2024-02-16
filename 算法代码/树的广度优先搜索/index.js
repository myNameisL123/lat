// 树的广度优先搜索
function Node(value) {
    this.value = value;
    this.child = [];
}
var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
var e = new Node("E");
var f = new Node("F");
a.child.push(c);
a.child.push(f);
a.child.push(b);
b.child.push(d);
b.child.push(e);

// 树的广度优先搜索
function bfs(roots, target) {
    if (roots === null || roots.length === 0) return false;
    var childs = []; // 集合保存整层遍历的节点，到下一层去判断。
    for (var i = 0; i < roots.length; i++) {
        if (roots[i] != null && roots[i].value === target) {
            return true;
        } else {
            childs = [...childs, ...roots[i].child];
        }
    }
    return bfs(childs, target);
};

console.log(bfs([a], "C"));