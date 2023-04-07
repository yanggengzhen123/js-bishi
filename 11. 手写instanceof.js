const myInstanceOf = (left,right) => {
    while(true){
        if(!left) return false
        console.log(left);
        if(left.__proto__ === right.prototype) return true
        left = left.__proto__
    }
}
let myInstance = 5
console.log(myInstanceOf(myInstance,Number));