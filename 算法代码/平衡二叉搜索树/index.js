function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
var e = new Node("E");
var f = new Node("F");
var g = new Node("G");
var h = new Node("H");
var j = new Node("J");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.right = h;
e.right = j;

//获取最深的层数
function getDeep(root) {
    if (root === null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    // 判断左边的大还是右边的大，然后再加上我当前的叶子节点
    return Math.max(leftDeep, rightDeep) + 1;
};
// 是否为平衡二叉树
function isBalance(root) {
    if (root === null) return true;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);

    if (Math.abs(leftDeep - rightDeep) > 1) { // 不平衡
        return false;
    } else {
        return isBalance(root.left) && isBalance(root.right);
    }

};
console.log(isBalance(b));