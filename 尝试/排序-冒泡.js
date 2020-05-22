//思路：每一轮，从数组的首位开始，把较大的值往后交换，直到最大的值在数组末尾；
//然后查找第二轮，直到没有发生交换，说明已经排好序了。
/**
 * @param {[number]}nums
 *
 */

function  sort(nums){
    let hasChange = true //标记变量
    for (let i = 0; i < nums.length -1 && hasChange; i++) { //遍历的次数
        hasChange = false //每一轮都要初始化标记变量为false
        for (let j = 0; j < nums.length -1 -i; j++) {  //每次从头遍历到尾，尾部确定的就不用再比较了
            if(nums[j]>nums[j+1]){
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
                hasChange = true
            }
        }
    }
}
let arr = [1,2,7,5,8,9]
let arr2 = [1,1,1]
sort(arr)
sort(arr2)
console.log(arr, arr2)
