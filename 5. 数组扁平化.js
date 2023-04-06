function flatter(arr){
    if(!arr.length) return
    return arr.reduce((pre,cur) => {
        return Array.isArray(cur) ? [...pre,...flatter(cur)] : [...pre,cur]
    },[]) 
}
console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]));