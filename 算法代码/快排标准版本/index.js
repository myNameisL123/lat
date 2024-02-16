// 快排标准版本
let Arr = Array(4, 1, 6, 9, 3, 2, 8, 7);
function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}
/**
 * 
 * @param {数组} arr 
 * @param {起始位置} begin 
 * @param {结束位置} end 
 * @param {左闭右开}
 */
function quickSorts(arr, begin, end) {
    if (begin >= end - 1) return; // 如果 数组的长度为0或者一个 那么后续不执行 算法的出口
    var left = begin; // 左指针
    var right = end; // 右指针
    do {
        do left++; while (left < right && arr[left] < arr[begin]);
        //左指针小于右指针且左指针指向的位置小于起始位置的值当不满足这个条件跳出循环
        do right--; while (right > left && arr[right] > arr[begin]);
        // 右指针指向的位置大于左指针位置的值，且 右指针对应的值要大于 起始位置的值，否则跳出循环
        if (left < right) swap(arr, left, right);// 只有这种情况才交换
    } while (left < right);
    var swapPoint = left == right ? right - 1 : right; // 要交换的位置
    swap(arr, begin, swapPoint); // 和起始位置进行互换  这是第一圈
    quickSorts(arr, begin, swapPoint);
    quickSorts(arr, swapPoint + 1, end);
}
function quickSort(arr) {
    quickSorts(arr, 0, arr.length);
}
quickSort(Arr)
console.log(Arr);