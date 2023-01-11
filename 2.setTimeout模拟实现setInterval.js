// 题目描述:setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗
function mySetInterVal(fn, time) {
    let timer;
    function interval() {
        fn();
        timer = setTimeout(interval, time);
    }
    interval();
    return {
        cancel:() => {
            clearTimeout(timer)
        }
    }
}
mySetInterVal(() => {
    console.log(1111);
}, 1000);


// 扩展：我们能反过来使用setInterval 模拟实现setTimeout吗？ 
function mySetTimeout(fn,time){
    let timer
    timer = setInterval(() => {
        fn();
        clearInterval(timer)
    },time)
}
mySetTimeout(() => {
    console.log(22222);
}, 1000);