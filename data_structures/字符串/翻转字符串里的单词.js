/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.trim()
    return s.split(' ').filter(item => item !== '').reverse().join(' ')
};
console.log(reverseWords("  hello world!  "))
console.log(reverseWords("a good   example"))
