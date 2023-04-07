// 双重for循环，每个i找到最小的做替换
function selectSort(arr){
    let len = arr.length
    for(let i = 0;i < len - 1;i++){
        let  min = i
        for(let j = i+1;j < len;j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(min !== i){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr
}
console.log(selectSort([3, 6, 2, 4, 1]));