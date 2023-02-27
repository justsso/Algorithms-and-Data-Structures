/**
 * add(1,2,3) = 6
 * add(1,2)(3) = 6
 * add(1)(2)(3) = 6
 */
// 思路就是收集所有的参数，每次传递的参数是不定个数的
function add(... arg1){
    let fn = function(... arg2){
        return add.apply(null, arg1.concat(arg2))
    }
    fn.toString = function(){
        return arg1.reduce((a,b) => a + b)
    }
    return fn;
}
 
console.log(add(1)(2,3) == 6)  // 隐式类型转换
console.log(add(1)(2,3)(4) == 10) // 隐式类型转换
console.log(add(1)(2)(3).toString()) // 6
