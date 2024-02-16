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
  var leftDeep = getDeep(root.left);
  var rightDeep = getDeep(root.right);
  if (Math.abs(leftDeep - rightDeep) < 2) { // 如果平衡，返回根节点
    return root;
  } else if (leftDeep > rightDeep) { // 不平衡左边深
    let changeTreeDeep = getDeep(root.left.right); // 变化分支
    let noChangeTreeDeep = getDeep(root.left.left); // 非变化分支
    if (changeTreeDeep > noChangeTreeDeep) {
      root.left = leftRotate(root.left); // 对左子树进行左单旋
    }
    return rightRotate(root); // 右旋
    
  } else { // 不平衡右边深
    let changeTreeDeep = getDeep(root.right.left); // 变化分支
    let noChangeTreeDeep = getDeep(root.right.right); // 非变化分支
    if (changeTreeDeep > noChangeTreeDeep) {
      root.right = rightRotate(root.right); // 对右子树进行右单旋
    }
    return leftRotate(root); // 左旋

  }
}

console.log(isBalance(node8));
var newRoot = change(node8);
console.log(isBalance(newRoot));
console.log(newRoot);

