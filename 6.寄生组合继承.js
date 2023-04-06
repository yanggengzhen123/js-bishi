// //构造函数继承缺点：不能继承原型上的方法，原型链继承缺点，father的引用类型的，两个new会造成共享
// 组合继承缺点，new 了两次father
// 寄生组合式继承 1、改变new 为Father.call(this) 2、改变Children.prototype = Father.prototype 3、children.prototype.constructor = children
function Parent(name) {
    this.name = name;
    this.say = () => {
        console.log(111);
    };
}
function Children(...rest){
    return Parent.call(this,...rest)
}
Children.prototype = Object.create(Parent.prototype)
Children.prototype.constructor = Children
let child = new Children("111");
console.log(child.name);
child.say();
// child.play();
