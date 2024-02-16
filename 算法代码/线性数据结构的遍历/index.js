let arr = [1, 2, 3, 4, 5, 6, 7, 8];



function bian(arr) {
    //  算法的要素 严谨性判断，这里是防止参数为空
    if (arr == null) return;
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    };
};

bian(arr);


// 下面的如何遍历？
function Node(value) {
    this.value = value;
    this.next = null;
};

let Node1 = new Node(1);
let Node2 = new Node(2);
let Node3 = new Node(3);
let Node4 = new Node(4);
let Node5 = new Node(5);

Node1.next = Node2;
Node2.next = Node3;
Node3.next = Node4;
Node4.next = Node5;

function bianLint(root) {
    let temp = root;
    while (true) {
        if (temp != null) {
            console.log(temp.value);
        } else {
            break;
        }
        temp = temp.next;
    }
};
// bianLint(Node1);