//实现一个基本的计算器来计算一个简单的字符串表达式的值。
//
// 字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格  。

/**
 * @param {string} s
 * @return {number}
 */
//思路： 利用栈的思想
//    注意：数字可以是多位数
var calculate = function (s) {
    let i = 0, zhan = [];
    let str = '0123456789';
    while (i < s.length) {
        if (s[i] === '(' || s[i] === '+' || s[i] === '-') {
            zhan.push(s[i])
            i++
        } else if (s[i] === ')') {
            //一直到栈的(出现，全部出栈
            let index = zhan.lastIndexOf('(')
            let slice_arr = zhan.slice(index)
            zhan.splice(index)
            let sum = 0;
            let fuhao = "";
            for (let j = 1; j < slice_arr.length; j++) {
                if (slice_arr[j] === '+') {
                    fuhao = slice_arr[j]
                } else if (slice_arr[j] === '-') {
                    fuhao = slice_arr[j]
                } else {
                    if (fuhao === '+') {
                        sum += slice_arr[j]
                    } else if (fuhao === '-') {
                        sum -= slice_arr[j]
                    } else {
                        if (slice_arr[j] !== '(' && slice_arr[j] !== ')') {
                            sum = slice_arr[j]
                        }
                    }
                }
            }
            zhan.push(sum)
            i++
        } else if (str.indexOf(s[i]) !== -1) {
            //取出数字
            let _num = ""
            while (str.indexOf(s[i]) !== -1 && i < s.length) {
                _num = _num + s[i]
                i++
            }

            //如果栈顶是符号，和栈为空，则压入;
            if (zhan.length === 0 || zhan[zhan.length - 1] === '+' || zhan[zhan.length - 1] === '-' || zhan[zhan.length - 1] === '(') {
                zhan.push(Number(_num))
            }
        } else {
            i ++
        }
    }

    //计算栈中的值
    let sum = 0;
    let fuhao = "";
    for (let j = 0; j < zhan.length; j++) {
        if (zhan[j] === '+') {
            fuhao = '+'
        } else if (zhan[j] === '-') {
            fuhao = '-'
        } else {
            if (fuhao === '+') {
                sum += zhan[j]
            } else if (fuhao === '-') {
                sum -= zhan[j]
            } else {
                if (zhan[j] !== '(' && zhan[j] !== ')') {
                    sum = zhan[j]
                }
            }
        }
    }
    return sum
};

// console.log(calculate("(1+(4+5+2)-3)+(6+8)"))
console.log(calculate("2147483647"))
// console.log(calculate("12+34"))
// console.log(calculate("1 + 1"))
