var numSubarrayProductLessThanK = function(nums, k) {
    let left = 0; let right = 0; // 滑动窗口 窗口两端下标
    let result = 0;

    while(left < nums.length) {
        let cur = 1;
        let temp_i = left;
        while(temp_i <= right){
            cur = cur * nums[temp_i];
            temp_i ++;
        }
        console.log(cur)
        if(cur < k){
            result = result + 1;
            right = right + 1;
            if(right === nums.length){ // right到达数组的最后了，right 后面没数据了，这时滑动窗口重置，left 移动到 left + 1
                left = left + 1;
                right = left;
            }
        }else{
            left = left + 1;
            right = left;
        }
    }
    return result;
};

numSubarrayProductLessThanK([10, 5, 2, 6], 100); // 超时了
