
// JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个
class Scheduler {
    constructor(limit){
        this.asyncPool = [] // 存放promise实例的缓存
        this.max = limit 
        this.runCount = 0 //正在执行的异步promise
    }
    add(time,order){
        this.asyncPool.push(
            new Promise(resolve => {
                setTimeout(() => {
                    resolve(order)
                },time)
            })
        )
    }
    taskStart(){
        for(let i = 0;i < this.max;i++){
            this.request()
        }
    }
    // 递归遍历
    request(){
        if(this.runCount > this.max || this.asyncPool.length <= 0) return
        this.runCount++
        this.asyncPool.shift()().then(res => {
            this.runCount--
            this.request()
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