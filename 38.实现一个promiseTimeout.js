// 实现一个promiseTimeout方法，该方法接受两个参数，第一个参数为promise，第二个参数为number类型
// 1、若promise在第二个参数给定的时间内处于pending状态，则返回一个reject的promise，其reason为new Error('promise timeout')
// 2、若promise在第二个参数给定的时间内处于非pending的状态，则返回该pormise

const timeoutTime = (time) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(new Error('promise timeout'))
        },time)
    })
}
const promiseParmas = () => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(111)
        },1000)
    })
}
const promiseTimeout = (promise,time) => {
    return Promise.race([promise,timeoutTime(time)])
}
promiseTimeout(promiseParmas(),2000).then(res => {
    console.log(res);
})
