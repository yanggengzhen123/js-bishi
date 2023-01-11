// 题目描述:实现一个方法使多维数组变成一维数组
// 1、利用reduce，用是否是数组判断 如果是数组的话进行递归
// function flatter(arr) {
//     if (!arr.length) return;
//     return arr.reduce((pre, cur) => {
//         return Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur];
//     }, []);
// }

// 2、while循环 + concat
function flatter(arr) {
    if (!arr.length) return;
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr);
        console.log(arr);
    }
    return arr;
}
console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
