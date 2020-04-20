let wait = function (time) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('wait执行结束')
            resolve()
        }, time)
    })
}
// wait(1000)

// class person{
//
// }

//new 返回一个对象实例，只不过这个对象的constructor指向一个构造器，也就是函数

function Fun(a,b){
   this.a = a
    this.b =b
    Fun.prototype.name = '123'
}

let f1 = new Fun(1,2)

console.log( Object.getPrototypeOf(f1) === Fun.prototype)
