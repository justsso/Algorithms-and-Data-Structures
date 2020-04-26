/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0, k = 0;
    while (i < nums.length) {

        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }
        i++
    }
    return k
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
console.log(removeElement([3, 2, 2, 3], 3))
