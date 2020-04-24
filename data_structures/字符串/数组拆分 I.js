/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let i = 0;
    nums.sort((a, b) => a - b)
    console.log(nums)
    let sum = 0;
    while (i < nums.length) {
        sum += Math.min(nums[i], nums[i + 1])
        // sum += nums[i]  这个用时比上面的长
        i += 2
    }

    return sum
};
// let a = arrayPairSum([1, 4, 3, 2])
console.log(arrayPairSum([1,1,2,2]))
// console.log(a)
