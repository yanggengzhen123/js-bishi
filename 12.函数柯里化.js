function currying(fn, ...args) {
    let fnLength = fn.length
    // 利用闭包
    let allArgs = [...args]
    const res = (...childArgs) => {
        allArgs = [...allArgs,...childArgs]
        if(allArgs.length === fnLength){
            return fn(...allArgs)
        }else{
            return res
        }
    }
    return res
} 

// 用法如下：
const add = (a, b, c, d) => a + b + c + d;
const a = currying(add, 1);
console.log(a(2,3)(4))
