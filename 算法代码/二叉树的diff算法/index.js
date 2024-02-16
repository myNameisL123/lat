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
a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;
// 第二棵树
var a2 = new Node("a");
var b2 = new Node("b");
var c2 = new Node("v");
var d2 = new Node("x");
var e2 = new Node("z");
var f2 = new Node("f");
var g2 = new Node("g");
a2.left = c2;
a2.right = b2;
c2.left = f2;
c2.right = g2;
b2.left = d2;
// b2.right = e2;
f2.right = e2;

// 新增了什么，修改了什么，删除了什么
// 数组里面的结构 
// origin 过去的节点  now:现在的节点
// {type: “新增”,origin: null,now:c2}  
// {type: “修改”,origin:c1,now: c2}
// {type: "删除",origin: c2, now:null}

/**
 * 
 * @param {第一棵树} root1 
 * @param {第二棵树} root2 
 * @param {保存比较之后新增修改删除的对应节点数据} diffList 
 * @param {过去的节点} origin
 * @param {新的节点} now
 * @returns 
 */

function diffTree(root1, root2, diffList) {
    if (root1 == root2) return diffList;
    if (root1 == null && root2 != null) { // 新增了节点
        diffList.push({ type: "新增", origin: null, now: root2 });
    } else if (root1 != null && root2 == null) { // 删除了节点
        diffList.push({ type: "删除", origin: root1, now: null });
    } else if (root1.value != root2.value) { // 相同位置的节点值不同，修改了节点
        diffList.push({ type: "修改", origin: root1, now: root2 })
        diffTree(root1.left, root2.left, diffList);
        diffTree(root1.right, root2.right, diffList);
    } else {
        diffTree(root1.left, root2.left, diffList);
        diffTree(root1.right, root2.right, diffList);
    }

}
var diffList = [];
diffTree(a, a2, diffList);
console.log(diffList);

