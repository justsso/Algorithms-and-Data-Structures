/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {

    // 根据nums初始化
    // 初始化 每位的数组和
    this._nums = [... nums];
    this._sumNums = []

     this._nums.forEach((item, index) => {
        if(index === 0){
            this._sumNums.push(item);
        }else {
            this._sumNums.push(this._sumNums[index -1] + item);
        }
    })
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this._sumNums[j] - this._sumNums [i] +this._nums[i]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */ 


 var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
 var param_1 = obj.sumRange(0, 2);
 var param_2 = obj.sumRange(2,5);
 console.log(param_1)
 console.log(param_2)
