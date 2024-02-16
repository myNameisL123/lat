// 树的深度优先搜索
function Node(value) {
    this.value = value;
    this.child = [];
}
var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
var e = new Node("E");
var f = new Node("F");
a.child.push(c);
a.child.push(f);
a.child.push(b);
b.child.push(d);
b.child.push(e);
// 深度优先搜索
function deepSearch(root, target) {
    if (root === null) return false;
    if (root.value === target) {
        return true;
    }
    var result = false;
    for (var i = 0; i < root.child.length; i++) {
        result |= deepSearch(root.child[i], target); // |= 一真则真
    }
    return result ? true : false;
};
console.log(deepSearch(a, "Z"));

