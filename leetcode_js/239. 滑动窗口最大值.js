/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let i = 0;
    let j = k - 1;
    let max = Number.MIN_SAFE_INTEGER;
    let maxIndex = -1;
    let result = [];
    let tag = true

    while (j < nums.length) {
        if (tag) {
            //这里没有上一轮的最大值，充值最大值为最小数
            max = Number.MIN_SAFE_INTEGER
            for (let k = i; k <= j; k++) {
                if (nums[k] > max) {
                    max = nums[k]
                    maxIndex = k
                }
            }
            result.push(max)
        } else {
            //新进来的这个值只需要和最大值比较即可
            if (nums[j] > max) {
                max = nums[j]
                maxIndex = j
                result.push(max)
            } else {
                //最大值还是之前的不变
                result.push(max)
            }
        }
        if (maxIndex === i) {
            //上一轮的最大值出去了
            tag = true
        } else {
            //上一轮的最大值还会在下一轮中出现
            tag = false
        }

        i = i + 1;
        j = j + 1;
    }
    console.log(result)
    return result
};
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
maxSlidingWindow([1, -1], 1)
