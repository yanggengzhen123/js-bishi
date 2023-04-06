function myNew(Fn,...args){
    // 创建一个空对象
    let obj = {}
    // 原型链继承方法
    obj.__proto__ = Fn.prototype
    // 执行构造函数，改变this指向空对象，如果构造函数有返回且返回为引用类型，则返回为引用类型
    let res =  Fn.apply(obj,args)
    if(res && typeof res === 'object'){
        return res
    }
    return obj
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function() {
  console.log(this.age);
};
let p1 = myNew(Person, "lihua", 18);
console.log(p1.name);
console.log(p1);
p1.say();