/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    if (digits[0] === 0) return [1]
    let result = [], jin = 1

    for (let i = digits.length - 1; i > -1; i--) {
        let zhi = 0;
        if (jin) {
            zhi = digits[i] + jin > 9 ? digits[i] + jin - 10 : digits[i] + jin;
        } else {
            zhi = digits[i]
        }

        result.push(zhi)

        jin = Math.floor((digits[i] + jin) / 10)
    }
    if (jin) {
        result.push(jin)
    }
    result = result.reverse()
    return result
};

let num = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log(plusOne(num))
