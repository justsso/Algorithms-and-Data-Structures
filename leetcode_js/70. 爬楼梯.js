/**
 * @description
 * @author justsso
 */
/*
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。
 */

/**
 * @param {number} n
 * @return {number}
 */
//动态规划题，找到状态转移方程
// f(x) = f(x-1) + f(x-2)
//  利用动态数组来优化
var climbStairs = function(n) {

   let p = 0,q = 1, r= 0;

    for (let i = 0; i < n; i++) {
        p = q
        q = r
        r = p+q
    }
    return r
};

console.log(climbStairs(6))
//这难道不是斐波那契额？
