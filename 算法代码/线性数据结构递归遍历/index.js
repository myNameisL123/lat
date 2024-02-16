const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function bianArr(arr, i) {
    if (arr == null || arr.length <= i) return;
    console.log(arr[i]);
    bianArr(arr, i + 1);
}
bianArr(arr, 0);

function Node(value) {
    this.value = value;
    this.next = null;
}
let Node1 = new Node(1);
let Node2 = new Node(2);
let Node3 = new Node(3);
let Node4 = new Node(4);
let Node5 = new Node(5);

Node1.next = Node2;
Node2.next = Node3;
Node3.next = Node4;
Node4.next = Node5;
// 最简单的理解自己调自己就是递归
function bianLine(root) {
    // 递归遍历必须有出口 return 否则会无限遍历下去,除非报错但是算法题不允许报错
    if (root == null) return;
    console.log(root.value);
    bianLine(root.next);
}
// bianLine(Node1);