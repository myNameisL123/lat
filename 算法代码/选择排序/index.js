var arr = [4, 1, 6, 9, 3, 2, 8, 7];

function compate(a, b) {
    if (a < b) return true;
    else return false;
}

function exchange(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]; // 交换的是数字对应的下标 而不是 数字本身。
}

// 选择排序的，内层循环 每一圈选出一个最大的，然后放在后面
function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var maxIndex = 0;
        for (var j = 0; j < arr.length - 1 - i; j++) { // 减 i 表示 你比了几次 就 较少对应的比较次数
            if (compate(arr[maxIndex], arr[j])) {
                maxIndex = j; // 找到最小的
            }
        }
        exchange(arr, maxIndex, arr.length - 1 - i); // 交换的是数字对应的下标 而不是 数字本身。
    }
}
sort(arr);
console.log(arr);

 // 任何一种排序算法，都没有优劣之分，只有是否适合的场景。