/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let leftSum = 0, rightSum = 0;
    if(!nums || nums.length < 2) return -1;
    let sum = nums.reduce((n1, n2) => (n1 + n2))


    for (let i = 0; i < nums.length; i++) {
        if (i - 1 > -1) {
            leftSum += nums[i - 1]
        } else {
            leftSum += 0
        }
        rightSum = sum - leftSum - nums[i]
        if (leftSum === rightSum) {
            return i
        }
    }

    return -1
};
let nums = [1, 2, 3]
console.log(pivotIndex(nums))
