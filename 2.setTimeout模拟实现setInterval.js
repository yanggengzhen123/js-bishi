// 为什么要用setTimeout模拟setInterval?
// 因为 如果主线程发生阻塞，而setInterval的时间间隔又很短，这个时候，到第二个间隔的时候，执行的是第一个setInterval的事件，第二个事件将会被取消

function mySetInterval(fn, t) {
    let timer = null
    function setInterval() {
        fn()
        timer = setTimeout(setInterval,t)
    }
    setInterval()
    return () => clearTimeout(timer)
}

const aa =  mySetInterval(() => {
    console.log(1111);
}, 1000);
aa.clear()



// 如果用setInterval实现setTimeout呢？