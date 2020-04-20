// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    //先判断0行
    if (numRows === 0) {
        return []
    }

    let row = 1, arr = [[1]];
    while (row < numRows) {

        let rowArr = []
        rowArr.push(1)
        let i = 0
        while (i < arr[row - 1].length - 1) {
            rowArr.push(arr[row - 1][i] + arr[row - 1][i + 1])
            i++
        }
        rowArr.push(1)
        arr.push(rowArr)
        row++
    }
    return arr
};
console.log(generate(5))
