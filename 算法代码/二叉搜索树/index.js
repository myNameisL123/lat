var Arr = [];
for (i = 0; i < 1000; i++) {
    Arr[i] = Math.floor(Math.random() * 10000);
}

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var num = 0;
function search(arr, target) {
    for (i = 0; i < arr.length; i++) {
        num += 1;
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
};
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
console.log(search(Arr, 2000));
console.log(num);

var root = buildSearchTree(Arr);
console.log(searchByTree(root, 2000));
console.log(num2);