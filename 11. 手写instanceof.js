const myInstanceOf = (left,right) => {
    // 或者使用Object.getPrototypeOF(left) === left.__proto__
    while(true){
        if(!left) return false
        if(left.__proto__ === right.prototype) return true
        left = left.__proto__
    }
}