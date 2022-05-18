/**
 * 简单使用：计算数组的和
 */
const array1 = [1, 2, 3, 4];

const sumWithInitial = array1.reduce((previousValue, currentValue, index, context) => {
    return previousValue + currentValue // 注意这里是返回结果作为下一次运行的previousValue
}, 0)
console.log(sumWithInitial); // 10

/**
 * 自己实现一个reduce
 */

Array.prototype.myReduce = function (callback, initValue) {
    const array = this;
    let start = 0;
    if (initValue === undefined) {
        start = 1;
        initValue = array[0]
    }
    if (array.length === 0 && initValue === undefined) {
        throw TypeError('Reduce of empty array with no initial value')
    }
    let accumulate = initValue;
    for (let i = start; i < array.length; i++) {
        accumulate = callback(accumulate, array[i], i, this)
    }
    return accumulate;
}

let sum = array1.myReduce((accumulate, currentValue, index) => accumulate + currentValue, 0)


// 异步串行
const f1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p1 running');
        resolve(1)
    }, 1000)
})

const f2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p2 running');
        resolve(2)
    }, 1000)
})

const array = [f1, f2];

const runPromiseInSequence = (array, value) => array.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(value)
)

runPromiseInSequence(array, 'init')

/**
 * 多维数组扁平化
 * 接收一个数组，返回一个数组
 * [1,[2,3], 4, [5, [6, [7,8]]]] => [1,2,3,4,5,6,7,8]
 * 
 */
let arr = [1, [2, 3], 4, [5, [6, [7, 8]]]];
let arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, [4]]]];

function flatDeep(arr) {
    return arr.reduce((prev, currentValue) => {
        if (Array.isArray(currentValue)) {
            return prev.concat(flatDeep(currentValue))
        }
        return prev.concat(currentValue)
    }, [])
}

// console.log(flatDeep(arr)); // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(flatDeep(arr1)); // [1, 2, 3, 4, 5, 6, 7, 8]


function flatDeepWidthDepth(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), []) :
        arr.slice();
};

// console.log(flatDeepWidthDepth(arr1, Infinity))

Array.prototype.myFlat = function(d = 1){
    if(d > 0){
        return this.reduce((prev, current) => {
            if(!Array.isArray(current)){
                return prev.concat(current)
            }else{
                return prev.concat(current.myFlat(d -1))
            }
        }, [])
    }else{
        return this.slice()
    }
}
console.log(arr1.myFlat(2))