/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let m = new Map()
    let ma = -1
    let target = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (m.has(nums[i])) {
            m.set(nums[i], m.get(nums[i]) + 1)
        } else {
            m.set(nums[i], 1)
        }
        if (m.get(nums[i]) > ma) {
            ma = m.get(nums[i])
            target = nums[i]
        }
    }
    return target
};
console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
//不用Map做一遍
