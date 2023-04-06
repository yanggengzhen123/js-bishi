function uniqueArr(arr){
    return [...new Set(arr)]
}
function uniqueArr(arr){
    return arr.reduce((pre,cur) =>{
        if(!pre.includes(cur)){
            pre.push(cur)
        }
        return pre
    },[])
}
const iqueArr = [1,2,3,4,5,1]
console.log(uniqueArr(iqueArr))
