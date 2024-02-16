// 左右子树互换后后算同一个树的比较
// 二叉树的比较
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
// 第一棵树
var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
var g = new Node("g");
a.right = c;
a.left = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;
// 第二棵树
var a2 = new Node("a");
var b2 = new Node("b");
var c2 = new Node("c");
var d2 = new Node("d");
var e2 = new Node("e");
var f2 = new Node("f");
var g2 = new Node("g");
a2.left = c2;
a2.right = b2;
c2.left = f2;
c2.right = g2;
b2.left = d2;
b2.right = e2;

function compareTree(root1, root2) {
    if (root1 == root2) return true; // 是同一棵树
    if (root1 == null && root2 != null || root2 == null && root1 != null) return false; //其中一个为空另一个不为空
    if (root1.value != root2.value) return false; // 相同位置的值不相等。
    return compareTree(root1.left, root2.left) && compareTree(root1.right, root2.right)
    || compareTree(root1.left, root2.right) && compareTree(root1.right, root2.left);
}
console.log(compareTree(a, a2));
