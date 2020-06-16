/**
 * @description
 * @author justsso
 */
/*
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

思路：先从小到大排序。遍历元素，然后设置两个指针，一旦遍历到元素大于0就不遍历了，因为后边的元素更大，不可能出现三数为0的现象

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) { //[0, 0, 0, 0]
    let result = []
    nums.sort((a, b) => a - b)  //先排序，以防出现重复的结果

    for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
        //然后利用双指针，解决两数之和的问题

        if (i > 0 && nums[i] === nums[i - 1]) continue   //和上一轮重复了呢

        //变成两数之和，双指针

        let r = twoSum(nums, i + 1, nums.length - 1, 0 - nums[i])
        result = result.concat(r)
    }
    return result
};

//利用双指针，从start到end查找和为sum的两个数，找到所有两数之和
function twoSum(nums, start, end, sum) {
    let r = []
    //符合条件的可能有多组，[-4, 【-1】, -1, 0, 1, 2]

    while (start < end) {
        if ((nums[start] + nums[end]) === sum) {
            r.push([0 - sum, nums[start], nums[end]])
            while (nums[start + 1] === nums[start]) {
                start++
            }
            start++
            while (nums[end - 1] === nums[end]) {
                end--
            }
            end--
        } else if ((nums[start] + nums[end]) < sum) {
            start++
        } else {
            end--
        }
    }
    return r;
}

// let nums = [-1, 0, 1, 2, -1, -4]  //[-4, -1, -1, 0, 1, 2]
// let r = threeSum(nums)
// console.log(r)

let nums2 = [0,0,0]  // [0, 0, 0]
let r2 = threeSum(nums2)
console.log(r2)

// let nums3 = [0, 0, 0, 0]
// let r3 = threeSum(nums3)
// console.log(r3)
