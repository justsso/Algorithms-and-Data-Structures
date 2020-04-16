/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let stack = [], result = []
    for (let i = 0; i < T.length; i++) {
        if (stack.length === 0 || T[i] <= stack[stack.length - 1].value) {
            stack.push({value: T[i], index: i})
        } else {
            //比较T[i]和栈顶元素
            let index = stack[stack.length - 1].index
            result[index] = i - index
            //栈顶出栈
            stack.pop()
            //当前元素下一轮还要和栈顶元素比较，所以i -1
            i = i - 1
        }
    }
    while (stack.length !== 0) {
        let top = stack.pop().index
        result[top] = 0
    }
    return result

};
//思路： 利用栈存储一个递减序列
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures))
