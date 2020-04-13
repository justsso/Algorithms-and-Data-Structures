/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//哈希表
var twoSum = function (numbers, target) {
    let m = new Map();
    for (let i = 0; i < numbers.length; i++) {
        if (m.has(target - numbers[i])) {
            return [m.get(target - numbers[i]), i + 1]
        } else {
            m.set(numbers[i], i + 1)
        }
    }
};

//双指针，利用已经排序的条件。不用全部遍历了


let numbers = [2, 7, 11, 15], target = 9;
console.log(twoSum(numbers, target));

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */


let twoSum2 = function (numbers, target) {
    let low = 0;
    let high = numbers.length - 1;
    while (low < high) {
        let temp_sum = numbers[low] + numbers[high];
        if (temp_sum === target) {
            return [low + 1, high + 1]
        } else if (temp_sum < target) {
            low += 1
        } else {
            high -= 1
        }
    }
    return [-1, -1]
}
