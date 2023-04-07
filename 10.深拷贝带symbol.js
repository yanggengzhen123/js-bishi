const isObject = (obj) => typeof obj === 'object' && obj !== null
const deepClone = (obj,hash = new WeakMap()) => {
    if(!isObject(obj)) return obj
    let target = Array.isArray(obj) ? [] : {}
    Reflect.ownKeys(obj).forEach(item => {
        if(isObject(obj[item])){
            target[obj] = deepClone(obj[item])
        }else{
            target[obj] = obj[item]
        }
    })
    return target
}
// var obj1 = {
// a:1,
// b:{a:2}
// };
// var obj2 = deepClone(obj1);
// console.log(obj1);