/**
 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 示例 1:

 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]  1 2 2 2 2 2 3 4 5
 输出: 2
  

 限制：

 1 <= 数组长度 <= 50000
 注意：本题与主站 169 题相同：https://leetcode-cn.com/problems/majority-element/
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */
/*
思路1：有一个数字出现的次数超过数组长度的一半，那么无论怎么排序，最后在数组中间位置的那个数一定就是那个数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
    if (nums.length === 0) {
        return 0
    }

    maopaoSort(nums)
    return nums[Math.floor(nums.length / 2)]
};

function maopaoSort(nums) {
    let tag = false
    for (let i = 0; i < nums.length; i++) {
        tag = false
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                tag = true
                changeTwo(nums, j, j + 1)
            }
        }
        if (!tag) {  // 说明这一轮没有发生交换，就不必再继续比较了
            break;
        }
    }
}

function changeTwo(nums, i, j) {
    let _temp = nums[i]
    nums[i] = nums[j]
    nums[j] = _temp
}

let nums = [1, 2, 3, 2, 2, 2, 5, 4, 2]
// console.log(majorityElement(nums))

/*
思路2： 使用Map 存储相同的数字各自出现几次，最后在map中挑出次数大于1/2的那个
 */

let majorityElement2 = (nums) => {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    let half_num = nums.length / 2
    for (let [key, value] of map.entries()) {
        if (value > half_num) {
            return key
        }
    }
    return 0
}

// console.log(majorityElement2([]))

/*
思路3： 摩尔投票法
每一次迭代，默认当前第一个数是众数，然后相抵消，一旦和为0，则进行下一轮的迭代
 */

let majorityElement3 = (nums) => {
    if(nums.length ===0) return 0
    let x = nums[0]
    let sum = 1;

    for (let i = 1; i < nums.length; i++) {
        if(sum === 0){
            x = nums[i]
        }
        if(nums[i] === x){
            sum +=1
        }else{
            sum -=1
        }
    }
    return x
}

console.log(majorityElement3([]))
