/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(strs.length === 0){
        return ""
    }
    let res = "";
    let arr = strs.map(item => item.length)
    let o = Math.min(... arr)

    let index = 0
    while (index < o) {
        let tag = strs[0][index]
        let filterArr = strs.filter(item => {
            if (item[index] !== tag) {
                return true
            }
        })

        if (filterArr.length !== 0) {
            return res;
        } else {
            res += tag
            index++
        }
    }
    return res;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// console.log(longestCommonPrefix(["dog", "racecar", "car"]))
// console.log(longestCommonPrefix([]))
