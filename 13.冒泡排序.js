// 冒泡排序，双重for循环 j和j+1进行交换
function bubbleSort(arr) {
    let len = arr.length - 1
    for(let i = 0;i < len;i++){
        for(let j = 0;j < len - i;j++){
            if(arr[j] > arr[j + 1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([3, 6, 2, 4, 1]));