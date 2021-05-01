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
