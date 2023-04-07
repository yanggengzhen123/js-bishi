// 手写new操作符
function myNew(Parent,...args){
  let obj = {}
  obj = Object.create(Parent.prototype)
  let res = Parent.apply(obj,args)
  // 如果Person有return且 return的是object或function
  if(res && (typeof res === 'object' || typeof res === 'function')){
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