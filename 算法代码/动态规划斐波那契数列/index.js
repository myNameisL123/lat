
// 0, 1 , 1 , 2, 3 , 5 , 8 , 13, 21  .......
// 给出第n位，问第n位的值为几？
function fibo(n) {
    if (n <= 0) return -1;
    if (n === 1) return 0;
    if (n === 2) return 1;
    var a = 0;
    var b = 1;
    var c;
    for (var i = 3; i <= n; i++) {
        c = a + b;
        // 如果还能往下走，那么就让他们往前窜一位
        a = b;
        b = c;
    }
    return c;
};
console.log(fibo(4));


// fibor 的状态转移方程是 f(n) = f(n-1) + f(n-2);

function fibor2(n) {
    // 我们只看当前的状态是怎么来的，至于之前的状态又是怎么来的我不考虑让它递归下去
    if (n <= 0) return -1;
    if (n === 1) return 0;
    if (n === 2) return 1;
    return fibor2(n - 1) + fibor2(n - 2)
}
console.log(fibor2(4));