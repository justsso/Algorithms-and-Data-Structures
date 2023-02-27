/**
 *  // const str = '12234abc56712'
    // 1. 编写一个函数, 返回字符串中的最长连续递增数字子序, 如上字符串返回结果应该为: '567'
    // 2. 时间复杂度最优解
 */

function theLongestString(s) {
    let start = 0;
    let n = 1;
    let maxLength = 1;

    for (let i  = 1 ; i < s.length; i++) {
        if (s[i - 1] >= '0' && s[i - 1] <= '9' && s[i] >= '0' && s[i] <= '9' && s[i] > s[i - 1]) {
            n = n + 1;
            maxLength = Math.max(maxLength, n);
            start = i - 1 - maxLength;
        } else {
            n = 1;
        }
    }
    return s.slice(start, start + maxLength)
}

var findLengthOfLCIS = function (nums) {
    var ans = 1;
    for (var i = 1, num = 1; i < nums.length; i++) {
        num = nums[i] > nums[i - 1] ? num + 1 : 1;
        ans = Math.max(ans, num);
    }
    return ans;
};

console.log(theLongestString('12234abc56712'));
console.log(theLongestString('1'));
console.log(theLongestString('a'));
console.log(theLongestString('a1'));