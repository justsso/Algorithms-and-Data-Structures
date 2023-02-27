//双指针法
//两个指针一开始指向两壁，然后有规律的移动两个指针，一定不会丢失最大值
//一定要证明，为什么高度小的那个要往中间移动。因为只有它移动才会有可能出现面积比它大的，如果移动高的那个，就一定没可能比当前面积更大了
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let res = 0, i = 0, j = height.length - 1;

    while (i < j) {
        let area = Math.min(height[i], height[j]) * (j - i)
        res = Math.max(res, area)
        if (height[i] <= height[j]) {
            i++
        } else {
            j--
        }
    }
    return res
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

let arr = [1,2,3]
arr.reduce(function(pre, current){
    return pre + current
}, 0)

Array.prototype.myReduce = function(fun, init){
    let arr = this;
    let result = null;
    if(!init){
        result = arr[0]
    }else {
        result = init;
    }
    let start = init ? 0 : 1;
    for(let i = start; i< arr.length; i++){
        result = fun(result, arr[i])
    }
   return result
}
