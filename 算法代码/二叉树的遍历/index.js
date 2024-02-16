// 前序遍历，构建二叉树

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
// 前序遍历
function qianbian(root) {
    if (root == null) return; // 严谨性判断 出口
    console.log(root.value);
    qianbian(root.left);
    qianbian(root.right);
}
qianbian(a);
