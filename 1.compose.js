// 实现一个compose函数
// 什么叫compose函数
// compose函数就是组合函数, 从后往前执行，把后面的函数返回值当成前面一个函数的参数
// 因为是嵌套的，所以执行的顺序是从后往前执行
// 用法如下:
// 用法如下:
function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 2;
}
function fn3(x) {
    return x + 3;
}
function fn4(x) {
    return x + 4;
}
const a = compose(fn1);
console.log(a(1)); // 1+4+3+2+1=11

function compose(...fns){
    if(!fns.length) return (v) => v
    if(fns.length === 1) return fns[0]
    return fns.reduce((pre,cur) => {
        return (...args) => pre(cur(...args))
    })
}