//  二叉树的广度优先搜索
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
var g = new Node("g");
a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;
// 广度优先搜索
function f1(rootList, target) {
    if (rootList == null || rootList.length == 0) return false;
    var child = []; // 用来遍历整层的节点， 把一层的子节点加入到集合中 到下一层去判断。
    for (var i = 0; i < rootList.length; i++) {
        console.log(rootList[i].value);
        if (rootList[i] != null && rootList[i].value == target) {
            return true;
        } else {
            child.push(rootList[i].left);
            child.push(rootList[i].right);
        }
    }
    return f1(child, target);
}
console.log(f1([a], "e"));