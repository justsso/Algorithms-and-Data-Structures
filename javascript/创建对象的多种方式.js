/**
 * 工厂模式
 */
function createPerson(name){
    var o = new Object();
    o.name = name;
    o.getName = function(){
        console.log(this.name)
    }
    return o

}

/**
 * 构造函数模式
 */

function Person(name){
    this.name = name;
    this.getName = function(){
        console.log(this.name);
    }
}


var person1 = new Person('kevin');


/**
 *  原型模式
 *  函数不用每次重建了，函数在原型对象上共享
 */
function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){  // 没有重写Person.prototype
    console.log(this.name)
}

var person1 = new Person('kevin');


function Person(name){
    this.name = name;
    if(typeof this.getName !== 'function') {
        Person.prototype.getName = function(){  // 动态原型模式
            console.log(this.name);
        }
    }
}

var person1 = new Person();