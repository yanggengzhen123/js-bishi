// 快排--时间复杂度 nlogn~ n^2 之间
function quickSort(arr) {
    if(arr.length < 2) return arr
    let cur = arr[arr.length - 1]
    let left = arr.filter((item,i) => item <= cur && i !== arr.length - 1)
    let right = arr.filter((item,i) => item > cur)
    return [...quickSort(left),cur,...quickSort(right)]
}
console.log(quickSort([3, 6, 2, 4, 1]));