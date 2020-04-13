// 数组中 forEach 用法
let arr = [1, 2, 3]
let f = {name: 'jkl'}
arr.forEach(function (value, index, array) {
    console.log(value, index, array, this)
})


//自己实现 forEach，用call
Array.prototype.forEach = function (callbackFn, thisArg = undefined) {
    //用for循环遍历每个元素
    let len = this.length
    for (let i = 0; i < len; i++) {
        callbackFn.call(thisArg, this[i], i, this)
    }
}

//自己实现forEach， 用bind （bind)返回一个函数
Array.prototype.forEach = function (callbackFn, thisArg) {
    let callBack = callbackFn.bind(thisArg)
    for (let i = 0; i < this.length; i++) {
        callBack(this[i], i, this)
    }
}
