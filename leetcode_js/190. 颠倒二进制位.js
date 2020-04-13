/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    // console.log(n);
    return parseInt(n.toString(2).padStart(32, 0).split('').reverse().join(''), 2);
};

console.log(reverseBits(0b00000010100101000001111010011100))
