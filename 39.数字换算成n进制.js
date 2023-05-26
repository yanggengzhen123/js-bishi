// 输入数字m和二进制n，写一个方法把m换算成n进制，比如输入（7,2）换算成111
// 先取余，再相除
function slove(m,n){
    let res = []
    while(m > n){
        res.push(m % n)
        m = Math.floor(m / n)
    }
    res.push(m)
    return res.reverse().join('')
}
console.log(slove(7,2));