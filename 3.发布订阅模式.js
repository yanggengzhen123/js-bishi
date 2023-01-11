// 题目描述:实现一个发布订阅模式拥有 on emit once off 方法
class EventEmitter {
    constructor(){
        this.event = {}
    }
    on(type,callback){
        if(!this.event[type]){
            this.event[type] = [callback]
        }else{
            this.event[type].push(callback)
        }
    }
    emit(type,...args){
        this.event[type] && this.event[type].forEach(fn => fn(...args))
    }
    off(type,callback){
        if(!this.event[type]) return
        this.event[type] = this.event[type].filter(fn => fn !== callback)
    }
    once(type,callback){
        const fn = () => {
            callback()
            this.off(type,fn)
        }
        this.on(type,fn)
    }
}

const event1 = new EventEmitter();

const handle = (...rest) => {
  console.log(rest);
};

event1.on("click", handle);

event1.emit("click", 1, 2, 3, 4);

event1.off("click", handle);

event1.emit("click", 1, 2);

event1.once("dbClick", () => {
  console.log(123456);
});
event1.emit("dbClick");
event1.emit("dbClick");