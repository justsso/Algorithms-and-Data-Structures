//插入排序，是把数组分成两部分，左边是排好序的，右边是未排序的；到遍历到右边的某个值，插入在左边合适的位置

/**
 * @param {[number]} nums
 */

function sort(nums) {
    let j
    for (let i = 1; i < nums.length; i++) {
        //0～i-1是排好序的，i~nums.length-1是未排序
        let current = nums[i]
        for ( j = i - 1; j >= 0 && nums[j] > current; j--) {
            nums[j + 1] = nums[j]
        }
        nums[j + 1] = current
    }
}

let arr = [2, 1, 7, 9, 5, 8]
sort(arr)
console.log(arr)
