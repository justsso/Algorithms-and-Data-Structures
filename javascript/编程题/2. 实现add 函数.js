/**
 * 实现无限累加器
 * add(1); //1
 * add(1)(2); //3
 * add(1)(2)(3); // 6
 * add(1)(2)(3)(4) // 10
 */
// 此题每次函数都只接收一个参数
function add(a){  // a 是一个闭包
    function sum(b){
        a = a + b;
        return sum;
    }
    sum.toString = function(){  // 重写toString() 方法，打印函数会自动调用toString()方法
        return a
    }
    return sum;
}
// console.log(
//     add(1), //1
//     add(1)(2), //3
//     add(1)(2)(3), // 6
//     add(1)(2)(3)(4) // 10
// )
let res = "" + add(1)(2)
console.log(res)