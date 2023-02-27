/**
 * 原生 new 的使用
 * function Person(){
 * 
 * }
 * let p = new Person();
 * 现在，手动实现一个 new 操作。
 * 
 * 思路：
 * 我们不能创造一个新的操作 像new xx() 这样，我们只能用个函数 myNew(fn, ... params) 方式来模仿了
 * 
 * 前提，我们约定，myNew() 传入的参数不定，第1个总是构造函数，其余是构造函数的参数。params.shift()得到构造函数
 * 
 * 1. 第一步是建立一个对象 obj，并且对象的原型先链接到原型对象上，原型对象是 构造函数的prototype ==> fn.prototype。可以用 Object.create() 链接；
 * 2. 然后执行构造函数，但是要显示修改this指向到我们新的对象上来， fn.apply(obj, params)
 * 3. 因为执行构造函数也有可能返回的不是对象，所以这里进行判断，第2步构造函数的执行结果如果是对象就返回，否则 返回 第1步创建的 obj
 */
function myNew(){
    let Con = [].shift.call(arguments);  // 取出传入的构造函数

    let obj = Object.create(Con.prototype); // 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性

    let res =  Con.apply(obj, arguments) // 绑定this，执行Con函数
    return res instanceof Object ? res : obj; // 优先返回构造函数中的返回追
}

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.say = function(){
    console.log("hello world", this.name)
}

let one = new Person("x", 18)
one.say()
console.log(one instanceof Object)


let two = myNew(Person, "y", 20)
console.log(two, two.name, two.age)
two.say()
