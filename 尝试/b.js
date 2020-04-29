// var result = require('./a')
// console.log(result)
// console.log(module.exports === exports)
// console.log(require.extensions)
// var myjson = require('./c');
// console.log(myjson)


var arr = [1, 2, 3, 4, 5]

arr[Symbol.toPrimitive] = function (hint) {
    if (hint === 'default' || hint === 'number') {
        //    求所有数字之和
        return this.reduce((pre, cur) => {
            return pre + cur
        }, 0)
    }
    console.log(hint)
}

console.log(arr + 10)
