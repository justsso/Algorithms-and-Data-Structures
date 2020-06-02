/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
    return n === 0 ? 0 : sumNums(n - 1) + n;
};


/**
 * @param {number} n
 * @return {number}
 */
let sumNums2 = function (n) {
    n > 1 && (n += sumNums2(n - 1))
    return n;
}


let sumNums3 = function (n) {
    return (n+1)*n>>1;
}
console.log(sumNums3(2))
console.log(sumNums2(9))
