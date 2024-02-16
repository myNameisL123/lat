// 图的深度优先搜索
function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
var e = new Node("E");

a.neighbor.push(b);
a.neighbor.push(c);
b.neighbor.push(a);
b.neighbor.push(c);
b.neighbor.push(d);
c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);
d.neighbor.push(b);
d.neighbor.push(c);
d.neighbor.push(e);
e.neighbor.push(d);

function deepSearch(root, target, path) {
    if (root === null) return false;
    if (path.indexOf(root) > -1) return false;
    if (root.value === target) return true;
    path.push(root); // 如果找过了就放到路径中去
    var result = false;
    for (var i = 0; i < root.neighbor.length; i++) {
        result |= deepSearch(root.neighbor[i], target, path);
    }
    return result ? true : false;
};
// console.log(deepSearch(b, "Z", []));

function deepSearch1(node, target, path) {
    if (node === null) return false;
    if (path.indexOf(node) > -1) return false;
    if (node.value === target) return true;
    path.push(node); // 如果找过了就放到路径中去
    var result = false;
    for (var i = 0; i < node.neighbor.length; i++) {
        result |= deepSearch1(node.neighbor[i], target, path);
    };
    return result ? true : false;
};

console.log(deepSearch1(a, "B", []));