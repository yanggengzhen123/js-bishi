
// JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个
class Scheduler {
    constructor(limit){
        this.maxCount = limit
        this.asyncPool = [] // 存放所有promise实例
        this.runCount = 0 // 正在进行的个数
    }
    add(time, order){
        const asyncPromise = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(order);
                    resolve(order)
                },time)
            })
        }
        this.asyncPool.push(asyncPromise)
    }
    taskStart(){
        for(let i = 0;i < this.maxCount;i++){
            this.request()
        }
    }
    request(){
        if(!this.asyncPool || !this.asyncPool.length || this.runCount >= this.maxCount) return
        this.runCount++
        this.asyncPool.shift()().then(() => {
            this.runCount--
            this.request() //递归request
        })
    }
}
const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(time, order);
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();