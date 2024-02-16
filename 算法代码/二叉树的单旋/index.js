function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var node2 = new Node("2");
var node5 = new Node("5");
var node3 = new Node("3");
var node6 = new Node("6");

node2.right = node5;
node5.left = node3;
node5.right = node6;

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
// 左旋
/**
 * 
 * @param {
 * 1.找到新根
 * 2.找到变化分支
 * 3.让当前旋转节点的右子树为变化分支
 * 4.让新根的左孩子为旋转节点
 * 5.返回新的根节点} root 
 */
function leftRotate(root) {
    // 1.找到新根
    var newRoot = root.right;
    //  2.找到变化分支,当前旋转节点的左孩子
    var changeTree = root.right.left;
    // 3.让当前旋转节点的右子树为变化分支
    root.right = changeTree;
    // 4.让新根的左孩子为旋转节点
    newRoot.left = root;
    // 5.返回新的根节点
    return newRoot;
};
//  右旋
/***
 * 
 * @param {*
 * 1.找到新根
 * 2.找到变化分支
 * 3.让当前旋转节点的左子树为变化分支
 * 4.让新根的右孩子为旋转节点
 * 5.返回新的根节点
 * } root 
 */
function rightRotate(root) {
    // * 1.找到新根
    var newRoot = root.left;
    // * 2.找到变化分支
    var changeTree = root.left.right;
    // * 3.让当前旋转节点的左子树为变化分支
    root.left = changeTree;
    // * 4.让新根的右孩子为旋转节点
    newRoot.right = root;
    // * 5.返回新的根节点
    return newRoot;
};

function change(root) { // 返回平衡之后二叉树
    if (isBalance(root)) return root; // 返回平衡之后的根节点
    if (root.left != null) root.left = change(root.left);
    if (root.right != null) root.right = change(root.right);

    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);

    if (Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if (leftDeep > rightDeep) { // 不平衡左边深
        // 右旋
        return rightRotate(root);

    } else { // 不平衡右边深
        // 左旋
        return leftRotate(root);
    }
};


console.log(isBalance(node2));

var newRoot = change(node2);
console.log(isBalance(newRoot));
console.log(newRoot);