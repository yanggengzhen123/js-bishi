// 双重for循环，从头开始 每个i找到最小的做替换（闭包）
function selectSort(arr){
    for(let i = 0;i < arr.length;i++){
        let min = arr[i]
        for(let j = i + 1;j < arr.length;j++){
            if(arr[j] < min){
                [arr[j],arr[i]] = [arr[i],arr[j]]
            }
        }
    }
    return arr
}
console.log(selectSort([3, 6, 2, 4, 1]));