/**
 * @description
 * @author justsso
 */

/*
reduce 换算

Array.reduce(callback(accumulator, currentValue[, index, array])[, initialValue])
reduce为数组中的每一个元素依次执行callback函数，不包括数组中被删除或从未被赋值的元素，接受四个参数
reduce 接受一个可以接受两个参数
第一个参数是必选的，是一个函数，该函数有4个参数，accumulator currentValue  index array
accumulator: 雷计器累计回调的返回值，如果传入了initialValue，从0位开始；如果没有传入initialValue，从1位开始
第二哥参数是可选的，initialValue初始值

 */

let value = [].reduce((previousValue, currentValue) => {
    console.log(previousValue,currentValue)
}, 10)
console.log(value)

let value2 = [1].reduce((acc, curr) => {console.log(curr)})
console.log(value2)
let arr = [1,2,3,4,5]


let arr2 = [
    {
        n: 'ab'
    },
    {
        n: 'bc'
    },
    {
        n: 'ac'
    }
]
let obj = {
    name: 'jsy',
    age : 15
}
let obj2 = {
    age: 16,
    name: 'jsy'
}
// console.log(JSON.stringify(obj, null, 2))
// console.log(JSON.stringify(obj2, null, 2))
// console.log( Math.max(undefined,obj2.age))

/*
将二维数组转化为一维
 */
let flatten = [[0,1],[2,3],[4,5]].reduce((accu, curent) => {
    return accu.concat(curent)
}, [])
console.log(flatten)


let arr3 = [1,2,,3]
let resultArr ;
resultArr=
arr3.map((item, index, array) => {
    return item + array.length
})
console.log(resultArr, resultArr.length)

Object.defineProperty(Array.prototype, 'reduce', {
    value: function(callback, initialValue){
        if(this === null){
        throw new TypeError('Array.prototype.reduce called on Null or Undefined')
        }

        if(typeof callback !== 'function'){
            throw new TypeError(callback+ 'is not a function')
        }

        let o = Object(this)
        console.log(o, this)

    }
})

