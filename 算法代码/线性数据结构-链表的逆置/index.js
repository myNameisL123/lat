function Node(value) {
    this.value = value;
    this.next = null;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function nizhi(root) {
    if (root.next.next == null) { // 代表当前节点是倒数第二个节点
        root.next.next = root; // 让最后一个节点指向倒数第二个节点
        return root.next;
    } else {
        var result = nizhi(root.next);
        root.next.next = root; // 不管你是哪个节点我都让下一个节点指向我
        root.next = null; //  让自身的next 为空 不然就会和你的下家互相指向
        console.log(result);
        return result;
    }

}
var newRoot = nizhi(node1);

function bianli(root) {
    if (root == null) return;
    console.log(root.value);
    bianli(root.next);
}
bianli(newRoot);