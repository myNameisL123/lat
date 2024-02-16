// 1. 给出二叉树，写出前序中序后序遍历
// 2. 写出前序中序后序遍历的代码

// 3. 给出前序中序还原二叉树，要求写出后序遍历
// 代码还原二叉树的代码
var Qian = ["a", "c", "f", "g", "b", "d", "e"];
var Zhong = ["f", "c", "g", "a", "d", "b", "e"];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function f1(qian, zhong) {
    if (qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || qian.length != zhong.length) return null;
    // 找到根节点
    var root = new Node(qian[0]);
    //  在中序遍历中中找到 根节点第一次出现的位置，那么 它的左边就是左子树，右边就是右子树。
    var index = zhong.indexOf(root.value);
    var qianLeft = qian.slice(1, 1 + index); // 左子树
    var qianRight = qian.slice(1 + index, qian.length); // 右子树
    var zhongLeft = zhong.slice(0, index); // 左子树
    var zhongRight = zhong.slice(index + 1, zhong.length); // 右子树
    root.left = f1(qianLeft, zhongLeft); // 根据前序的左子树，和中序的左子树还原左子树，并赋值给root.left
    root.right = f1(qianRight, zhongRight); // 根据前序的右子树，和中序的右子树还原右子树，并赋值给root.right
    return root;
}
var root = f1(Qian, Zhong);
console.log(root.left);
console.log(root.right);


// 前序遍历 ： A CFG  BDE
// 中序遍历 ： FCG A DBE
// 后序遍历就是: FGC DEB A





// 4. 给出后序中序还原二叉树，要求写出前序遍历

// 后序：FGCDEB A
// 中序 ：FCG A DBE
// 前序：A CFG BDE 
