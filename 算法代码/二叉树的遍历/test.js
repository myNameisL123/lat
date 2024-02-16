// 根据 中序和后序还原二叉树
var zhong = ["f", "c", "g", "a", "d", "b", "e"];
var hou = ["f", "g", "c", "d", "e", "b", "a"];
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function f1(zhong, hou) {
    if (zhong == null || hou == null || zhong.length == 0 || hou.length == 0 || zhong.length != zhong.length) return null;
    var root = new Node(hou[hou.length - 1]);
    var index = zhong.indexOf(root.value);
    var zhongleft = zhong.slice(0, index);
    var zhongright = zhong.slice(index + 1, zhong.length);
    var houleft = hou.slice(0, index);
    var houright = hou.slice(index, hou.length - 1);
    root.left = f1(zhongleft, houleft);
    root.right = f1(zhongright, houright);
    return root;
}
var root = f1(zhong,hou);
console.log(root.left);
console.log(root.right);

