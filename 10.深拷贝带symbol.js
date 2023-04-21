const isObject = (obj) => typeof obj === 'object' && typeof obj !== null
const deepClone = (obj,hash = new WeakMap()) => {
    if(!isObject(obj)) return obj
    if(hash.has(obj)){
        return has.get(obj)
    }
    let deepObj = Array.isArray(obj) ? [] : {}
    hash.set(obj,deepObj)
    Reflect.ownKeys(obj).forEach(key => {
        deepObj[key] = isObject(obj[key]) ? deepClone(obj[key],hash) : obj[key]
    })
    return deepObj
}
// 要防止循环引用的问题出现
var obj1 = {
a:1,
b:{a:2}
};
var obj2 = deepClone(obj1);
console.log(obj1);