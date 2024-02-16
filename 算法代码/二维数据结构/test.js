// 四行八列 二维数组
const Arr = new Array(4);

for (var i = 0; i < Arr.length; i++) {
    Arr[i] = new Array(8);
}

function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");

a.neighbor.push(b);
a.neighbor.push(c);
a.neighbor.push(f);
b.neighbor.push(a);
b.neighbor.push(e);
b.neighbor.push(d);
c.neighbor.push(c);
d.neighbor.push(b);
e.neighbor.push(b);
