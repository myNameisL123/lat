var Arr = Array(4, 1, 6, 9, 3, 2, 8, 7);

// 快排
function quickSort(arr) {
    if (arr === null || arr.length === 0) return [];
    // 1.选班长
    var leader = arr[0]
    // 2.小的站左边，大的站在右边
    var left = [];
    var right = [];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < leader) left.push(arr[i]);
        else right.push(arr[i])
    }
    left = quickSort(left);
    right = quickSort(right);
    left.push(leader);
    return [...left, ...right];/* SSS */
}

console.log(quickSort(Arr));

