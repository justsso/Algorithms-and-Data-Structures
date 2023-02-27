/**
 * js是原型继承，不同与传统面向对象语言的类型继承。
 * js的继承有好几种方式，但最流行的是，组合式继承。
 * es6中的extends继承
 */


/**
 * 组合继承
 */


function Parent(name){
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}


Parent.prototype.getName = function(){
    console.log(this.name);
}

function Child(name, age){
    Parent.call(this, name);
    this.age = age;
}

Child.prototype = new Parent();  // Child 的原型对象是Parent实例
Child.prototype.constructor = Child;  // 因为改写了Child的原型对象的引用，所以这里手动把constructor写回去

var child1 = new Child('kevin', 18);
child1.colors.push('black');

console.log(child1.name);
console.log(child1.age);
console.log(child1.colors);


var child2 = new Child('daisy', 20);
console.log(child2.name);
console.log(child2.age);
console.log(child2.colors);

/**
 * ES6 extends 继承
 */

class 