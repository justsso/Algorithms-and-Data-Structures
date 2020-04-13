/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let secondIndex = nums.indexOf(target - nums[i]);
        if (secondIndex !== -1 && secondIndex !== i) {
            return [i, secondIndex]
        }
    }
};
let nums = [3, 2, 4], target = 6
let r = twoSum(nums, target)
// console.log(r)

//find  findIndex接收的参数都是回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的值，然后返回该成员或者该成员的位置。如果没有符合条件的成员，返回Undefined
// 回调函数有三个参数，当前值，
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//时间复杂度 O(n平方)
let twoSum1 = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === target - nums[i]) {
                return [i, j]
            }
        }
    }
}

// console.log(twoSum1(nums, target))

//以空间换时间，使用哈希表


/**
 *
 * @param {number []}nums
 * @param {number} target
 */

//一遍Hash，以空间换时间
let twoSum2 = function (nums, target) {
    const m = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (m.has(target - nums[i])) {
            return [m.get(target - nums[i]), i]
        } else {
            m.set(nums[i], i)
        }
    }
}

console.log(twoSum2(nums, target))
