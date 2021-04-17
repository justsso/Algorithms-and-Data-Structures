// var result = require('./a')
// console.log(result)
// console.log(module.exports === exports)
// console.log(require.extensions)
// var myjson = require('./c');
// console.log(myjson)


// var arr = [1, 2, 3, 4, 5]
//
// arr[Symbol.toPrimitive] = function (hint) {
//     if (hint === 'default' || hint === 'number') {
//         //    求所有数字之和
//         return this.reduce((pre, cur) => {
//             return pre + cur
//         }, 0)
//     }
//     console.log(hint)
// }
//
// console.log(arr + 10)

function runAsync (x) {
    return new Promise(r => setTimeout(function () {
            // r(x, console.log(x));
            console.log(x)
            r(x)
    }
    , 1000));
}

// runAsync(1).then(() => runAsync(2)).then(() => runAsync(3)).then(() => runAsync(5))

// let o = new Promise(resolve => {
//     setTimeout(() => {
//         resolve(1,console.log("hahah"))
//     }, 1000)
// })
// o.then(res => {
//     console.log(res)
// })

Promise.all([runAsync(1), runAsync(2), runAsync(3)]).then(res => console.log(res))