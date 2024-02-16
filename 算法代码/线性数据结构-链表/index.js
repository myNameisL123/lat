
let c = {
    value: 3,
    next: null,
}

let b = {
    value: 2,
    next: c,
}

let a = {
    value: 1,
    next: b, //存的是对B地址的引用
}

// console.log(b.next == c);

// 链表的声明 其实就是创建一个构造函数，他们共用原型链，这样不会浪费内存 因为只开辟了一个原型对象的内存空间

function Node(value) {
    this.value = value;
    this.next = null;
}

var A = new Node(1);
var B = new Node(2);
var C = new Node(3);
var D = new Node(3);

A.next = B;
B.next = C;
C.next = D;
D.NEXT = null;

console.log(A.value); // 1
console.log(A.next.value); // 2
console.log(A.next.next.value); // 3
console.log(A.next.next.next.value); // 4