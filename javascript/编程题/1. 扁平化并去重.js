/**
 * 将arr扁平化，去重
 */
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

let resultArr = [... new Set( arr.flat(Infinity).sort((a,b) => a -b ))];  
// 或者 
Array.from(new Set(arr.flat(Infinity).sort((a,b) => a - b)))


// 手写数组的flat，递归 + reduce + 判断 deep 是否大于0，支持Infinity

Array.prototype.myFlat = function (deep = 1){  //deep 默认是1
    return deep > 0 ? this.reduce((prev, current) => {
        return prev.concat(Array.isArray(current) ? current.myFlat(deep -1) : current)
    }, []) : this.slice();
}


