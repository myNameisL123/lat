// 如果生成一万个节点呢？
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
var node8 = new Node("8");
var node7 = new Node("7");
var node6 = new Node("6");
var node5 = new Node("5");
var node2 = new Node("2");

node8.left = node7;
node7.left = node6;
node6.left = node5;
node5.left = node2;


// 获取最深的层数
function getDeep(root) {
    if (root === null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

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
}

// 左旋
function leftRotate(root) {
    if (root.right === null) return root; // 左旋要求右子树不能为空
    var newRoot = root.right;
    var changeTree = root.right.left;
    root.right = changeTree;
    newRoot.left = root;
    return newRoot;
}

// 右旋
function rightRotate(root) {
    if (root.left === null) return root; // 右旋要求左子树不能为空
    var newRoot = root.left;
    var changeTree = root.left.right;
    root.left = changeTree;
    newRoot.right = root;
    return newRoot;
}

// 返回平衡之后的二叉树
function change(root) {
    if (isBalance(root)) return root; // 如果是平衡的，直接返回根节点
    if (root.left !== null) root.left = change(root.left);
    if (root.right !== null) root.right = change(root.right);
    var leftDeep = getDeep(root.left); // 获取左边深度
    var rightDeep = getDeep(root.right); // 获取右边的深度
    if (Math.abs(leftDeep - rightDeep) < 2) { // 如果平衡，返回根节点
        return root;
    } else if (leftDeep > rightDeep) { // 不平衡左边深
        let changeTreeDeep = getDeep(root.left.right); // 变化分支
        let noChangeTreeDeep = getDeep(root.left.left); // 非变化分支
        if (changeTreeDeep > noChangeTreeDeep) {
            root.left = leftRotate(root.left); // 对左子树进行左单旋
        }
        var newRoot = rightRotate(root); // 右旋
        newRoot.right = change(newRoot.right);// 防止右旋之后还不平衡，再对右侧来一遍
        newRoot = change(newRoot); // 防止再一遍之后还不平衡，再对整体来一遍
        return newRoot;
    } else { // 不平衡右边深
        let changeTreeDeep = getDeep(root.right.left); // 变化分支
        let noChangeTreeDeep = getDeep(root.right.right); // 非变化分支
        if (changeTreeDeep > noChangeTreeDeep) {
            root.right = rightRotate(root.right); // 对右子树进行右单旋
        };
        var newRoot = leftRotate(root); // 左旋
        newRoot.left = change(newRoot.left); // 防止左旋之后还不平衡，再对左侧来一遍
        newRoot = change(newRoot); // 防止再一遍之后还不平衡，再对整体来一遍
        return newRoot;
    }
}

function change1(root) {
    if (isBalance(root)) return root;
    if (root.left != null) root.left = change(root.left);
    if (root.right != null) root.right = change(root.right);
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if (leftDeep > rightDeep) {
        var changeTreeDeep = getDeep(root.left.right);
        var noChangeTreeDeep = getDeep(root.left.left);
        if (changeTreeDeep > noChangeTreeDeep) {
            root.left = leftRotate(root.left);
        }
        var newRoot = rightRotate(root);
        newRoot.right = change(newRoot.right);
        newRoot = change(newRoot);
        return newRoot;
    } else {
        var changeTreeDeep = getDeep(root.right.left);
        var noChangeTreeDeep = getDeep(root.right.right);
        if (changeTreeDeep > noChangeTreeDeep) {
            root.right = rightRotate(root.right);
        }
        var newRoot = leftRotate(root);
        newRoot.left = change(newRoot.left);
        newRoot = change(newRoot);
        return newRoot;
    }
};



//   console.log(isBalance(node8));
//   var newRoot = change(node8);
//   console.log(isBalance(newRoot));
//   console.log(newRoot);
// 用来创建二叉搜索树的左右子树
function addNode(root, num) {
    if (root == null) return;
    if (root.value == num) return;
    if (root.value < num) { // 目标值比当前节点大
        if (root.right == null) root.right = new Node(num); // 如果右侧为空则创建
        else addNode(root.right, num); // 如果右侧不为空，则向右侧递归
    } else { // 目标值比当前节点小
        if (root.left == null) root.left = new Node(num);
        else addNode(root.left, num);
    }
};
// 用来创建二叉搜索树
function buildSearchTree(arr) {
    if (arr === null || arr.length == 0) return null;
    var root = new Node(arr[0]);
    for (i = 1; i < arr.length; i++) {
        addNode(root, arr[i]);
    }
    return root;
};

var num2 = 0;
// 如何使用二叉搜索树去搜索
function searchByTree(root, target) {
    if (root === null) return false;
    num2 += 1;
    if (root.value === target) {
        return true;
    };
    if (root.value > target) return searchByTree(root.left, target);
    else return searchByTree(root.right, target);
};

var arr = [];
for (i = 0; i < 10000; i++) {
    arr.push(Math.floor(Math.random() * 10000));
}
var root = buildSearchTree(arr);
console.log(searchByTree(root, 1000))
console.log(num2);
var newRoot = change(root);/*  */
num2 = 0;
console.log(searchByTree(newRoot, 1000));
console.log(num2);
console.log(isBalance(newRoot));

