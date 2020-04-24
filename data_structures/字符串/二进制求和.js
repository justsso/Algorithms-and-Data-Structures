/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let i = a.length - 1, j = b.length - 1
    let sum = 0, jin = 0;
    let s = ""
    while (i > -1 && j > -1) {
        sum = parseInt(a[i], 10) + parseInt(b[j], 10) + jin
        if (sum > 1) {
            jin = Math.floor(sum / 2)
            sum = sum - 2
        } else {
            jin = 0
        }
        i--
        j--
        s += sum
    }


    //加入两个字符都遍历完了
    if (i === -1 && j === -1) {
        console.log(s, 28, jin)
        jin === 1 ? s += '1' : s += ''
        return s.split('').reverse().join('')
    }
    //两个字符串中短的那个遍历完了
    //现在遍历剩下的那个
    let sheng = i > j ? a : b;
    let k = Math.max(i, j)
    while (k > -1) {
        sum = +sheng[k] + jin
        if (sum > 1) {
            jin = Math.floor(sum / 2)
            sum = sum - 2
        } else {
            jin = 0
        }
        s += sum
        k--
    }
    if (jin === 1) {
        s += '1'
    }

    return s.split('').reverse().join('');
};

// console.log(addBinary("11", "1"))
// console.log(addBinary("1010", "1011"))
console.log(addBinary("1111", "1111"))
