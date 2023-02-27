/**
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5

示例 2:
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 
 * @param {number[]} nums 
 * @param {*} k 
 * @return {number}
 */
// 思路：暴力：从大到小排序，排到第K个就返回那个当前的元素
var findKthLargest = function (nums, k) {
    for(let i = 0; i < nums.length ; i++){
        for(let j = i+1; j < nums.length; j++){

        }
    }

}
// 思路：快排

// 思路：堆排序
