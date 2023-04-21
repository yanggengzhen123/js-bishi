const myInstanceOf = (left,right) => {
    while(true){
        if(left === null) return false
        left = left.__proto__
        if(left === right.prototype){
            return true
        }
    }
}
let myInstance = 5
console.log(myInstanceOf(myInstance,Number));