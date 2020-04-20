/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0, j = 0, re = 0, set = new Set()

    while (j < s.length) {
        j = i
        while (j < s.length && !set.has(s[j])) {
            set.add(s[j])
            j++
        }
        re = Math.max(j - i, re)
        set.clear()
        i++
    }
    return re
};
// console.log(lengthOfLongestSubstring(''))
let set = new Set()
set.add(1).add(2).add(3)
set.delete( set.keys().next().value)
set.add(1)
// console.log(set)

/**
 * @param {string} s
 * @return {number}
 */

//滑动窗口
var lengthOfLongestSubstring2 = function (s) {
    let i = 0, j = 0, re = 0, set = new Set()

    while (j < s.length) {

        while (j < s.length && !set.has(s[j])) {
            set.add(s[j])
            j++
        }
        re = Math.max(j - i, re)
        set.delete(set.keys().next().value)
        i++
    }
    return re
}
console.log(lengthOfLongestSubstring2("pwwkew"))
console.log(lengthOfLongestSubstring2("bbbbb"))
console.log(lengthOfLongestSubstring2("0"))


//优化滑动窗口
let lengthOfLongestSubstring3 = function (s) {

}
