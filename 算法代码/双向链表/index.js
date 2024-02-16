// 双向链表
// 我不但可以指向我的下一家 也可以指向我的上一家
// 节点
function Node(value) {
    this.value = value;
    this.next = null; // 空间
    this.pre = null; // 空间
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.pre = node1;
node2.next = node3;
node3.pre = node2;
node3.next = node4;
node4.pre = node3;
node4.next = node5;
node5.pre = node4;

// 双向链表的优点 ： 无论给出哪一个节点都能对整个链表进行遍历,没有头也没有尾。
// 双向链表的缺点： 多耗费一个引用的空间，而且构建双向链表比较复杂。

function bianli(root) {
    if (root == null) return;
    console.log(root.value);
    bianli(root.next);
};
bianli(node1);
