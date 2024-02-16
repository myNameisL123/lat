// 变态青蛙跳台阶,青蛙变态 它有可能从地面直接跳

// 这只青蛙，一次可以跳 1 级台阶，2级台阶，或n级台阶。
// 问这只青蛙跳上n级台阶有多少种方法？

// 状态方程 = f(n) = f(n-1) + f(n-2) + f(n-3)+ ...... + f(2) + f(1) + f(0)

function jump(n) {
    if (n <= 0) return -1;
    if (n === 1) return 1;
    if (n === 2) return 2;
    var result = 0; // 表示当前的台阶数量
    for (var i = 1; i < n; i++) {
        result += jump(n - i);
    }
    return result + 1; // 加1代表从0级台阶直接跳上去的情况。
};
// 1,1,1,1
// 1,1,2
// 1,2,1
// 2,1,1
// 2,2
// 1,3
// 3,1
// 4
console.log(jump(4));
