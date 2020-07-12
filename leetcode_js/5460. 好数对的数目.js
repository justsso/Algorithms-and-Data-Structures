/**
 * @description
 * @author justsso
 */
/*
给你一个整数数组 nums 。
如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
返回好数对的数目。


示例 1：

输入：nums = [1,2,3,1,1,3]
输出：4
解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始
示例 2：

输入：nums = [1,1,1,1]
输出：6
解释：数组中的每组数字都是好数对
示例 3：

输入：nums = [1,2,3]
输出：0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-good-pairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let m = new Map()
    nums.forEach((item, index) => {
        if (m.has(item)) {
            let v = m.get(item)
            m.set(item, v + 1)
        } else {
            m.set(item, 1)
        }
    })
    let sum = 0;
    for (const [key, value] of m.entries()) {
        if (value > 1) {
            sum += getSumN(value - 1)
        }
    }

    return sum

    function getSumN(n) {
        if (n === 1) return 1
        return n + getSumN(n - 1)
    }
};
let result = numIdenticalPairs([1, 1, 1, 1])
console.log(result)
