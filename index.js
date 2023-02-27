function fun(){
    console.log(123)
}

let obj = {}

let newFun = fun.bind(obj)

Function.prototype.myBind = function(){
    let argArr =  Array.prototype.slice.call(arguments)
    let context = argArr[0];
    let args = argArr.slice(1)
    return function (){
        this.call(context, args)
    }
}

new Promise((resolve) => {
    console.log(1);
    resolve()
}).then(res => {
    console.log(1)
}).then(res => {
    console.log(1)
}).then(res => {
    console.log(1)
}).then(res => {
    console.log(1)
}).then(res => {
    console.log(1)
})