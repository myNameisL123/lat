// let arr = [4, 1, 6, 9, 3, 2, 8, 7];

// function getMin(arr) {
//     if (arr == null || arr.length == 0) return;
//     var index = -1;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] != null && arr[i] < arr[index] || arr[i] != null && index == -1) {
//             index = i;
//         }
//     }
//     var result = arr[index];
//     arr[index] = null;
//     return result;
// }

// function sort(arr) {
//     var newArr = new Array(arr.length);
//     for (var i = 0; i < newArr.length; i++) {
//         newArr[i] = getMin(arr);
//     }
//     return newArr;
// }

// console.log(sort(arr));



// 冒泡排序




const arr = [4, 1, 6, 9, 3, 2, 8, 7];
// 排序不是比较大小
// 排序的本质是比较和交换
function compare(a, b) { // 比较之后需要得出是否需要交换
    if (b < a) return true; // 正序还是逆序  现在是正序
    else return false;
}

function exchange(arr, a, b) { //将数组中ab位置里的值进行交换
    [arr[a], arr[b]] = [arr[b], arr[a]]; //解构赋值
}

function sort(arr) { // 这个sort可以是冒泡 也可以是选择也可以是其他排序
    if (arr == null || arr.length == 0) return;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) { // 减 i 表示 你比了几圈 就减少几次比较 因为之前已经比过了没必要了
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1);
            }
        }
    }
}
sort(arr);
console.log(arr);

