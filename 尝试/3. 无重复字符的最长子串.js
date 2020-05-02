/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0, right = 0;
    let m = new Map();
    let maxLength = 0;

    while (right < s.length) {

        if (!m.has(s[right])) {
            m.set(s[right], right)
            right++
        } else {
            maxLength = Math.max(right - l, maxLength)

            let index = m.get(s[right]);
            l = index + 1
            right = l
            m.clear()
        }
    }
    maxLength = Math.max(right - l, maxLength)

    return maxLength

};
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("   "))
console.log("  4  ".length)
