// 青蛙跳台阶问题
// 一个青蛙一次只能跳一级台阶，或者跳两级台阶
// 问： 这个青蛙跳上n级台阶有多少种跳法？

// 如果这只青蛙，最后跳上了第n级台阶，那么最后一次跳跃之前它一定在n-1级台阶或n-2级台阶
// 那么跳上第n级台阶有多少种情况就变成了，两个子问题
// 跳上n-1级台阶的跳法 加上 跳上n-2级台阶的跳法

// 按照此逻辑递推，跳上n-1级台阶可以拆解为两个子问题
// 既：跳上n-2级台阶的跳法 加上 跳上n-3级台阶的跳法

// 状态转移方程就是 fn = f(n-1) + f(n-2)/*  */
function jump(n) {
    if (n <= 0) return -1;
    if (n == 1) return 1;
    if (n == 2) return 2;
    return jump(n - 1) + jump(n - 2);
};
console.log(jump(10));
