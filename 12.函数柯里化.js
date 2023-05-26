// function currying(fn, ...args) {
//     // 利用闭包
//     let allArgs = [...args]
//     return function res (...childArgs) {
//         allArgs = [...allArgs,...childArgs]
//         debugger
//         if(allArgs.length === fn.length){
//             // return fn(...allArgs)
//             const val = fn(...allArgs)
//             allArgs = []
//             return val
//         }else{
//             return res
//         }
//     }
// }

// // 用法如下：
// const add = (a, b, c, d) => a + b + c + d;
// const a = currying(add, 1);
// console.log(a(4)(2,3))
// console.log(a(4)(2)(3));
// console.log(a(2)(3,4));

const currying = (fn) => {
    let args = [];
    return function temp(...newArgs) {
        console.log(args);
        debugger
        args = [...args,...newArgs]
        if (!newArgs.length) {
            const val = fn.apply(this, args);
            args = [];
            return val;
        } else {
            return temp;
        }
    };
};
const adding = (...args) => args.reduce((pre, cur) => pre + cur, 0);
let addCurry = currying(adding);
console.log(addCurry(1)(2)(3)(4, 5)()); //15
console.log(addCurry(1)(2)(3, 4, 5)()); //15
console.log(addCurry(1)(2, 3, 4, 5)()); //15
