/**
 * @param {number[]} nums
 * @return {number}
 */
//思路： 直接遍历就好，一旦找到了符合条件的数，直接返回索引
var dominantIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = 0;
        for (j = 0; j < nums.length; j++) {
            if (i !== j) {
                if (nums[i] < nums[j] * 2) {
                    break
                }
            }
        }
        if (j === nums.length) {
            return i
        }
    }
    return -1
};

let nums = [3, 6, 1, 0]
console.log(dominantIndex(nums))

//第二个思路：
// 先遍历一遍，找到最大值的索引，然后再遍历一遍，如果找到小于其二倍的数，那么就返回-1。最后返回最大值索引
var dominantIndex2 = function (nums) {
    let maxIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i
        }
    }

    // maxIndex
    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIndex && nums[maxIndex] < 2 * nums[i]) {
            return -1
        }
    }

    return maxIndex

};
