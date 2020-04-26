//双指针
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let i = 0, j = 0;
    let result = -1;
    while (i < nums.length) {
        if (nums[i] === 1) {
            i++
        } else {
            result = Math.max(result, i - j)
            j = i + 1
            i++
        }
    }
    result = Math.max(result, i - j)
    return result
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
