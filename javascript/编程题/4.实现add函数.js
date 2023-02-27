/**
 * 实现一个通用的currying函数，
 */

function sum(... args){
    return args.reduce((prev, current) => prev + current, 0);
}


// 要求：实现 currying 函数
/**
 * 思路：返回的函数调用不传参时，就计算所有参数的和，然后清空累计的参数为空数组；否则就把每次的参数放在数组里
 */

function currying(fn){
    const context = this;
    let allArgs = []
    function help(...args){
        if(args.length){
            allArgs = allArgs.concat(args)
            return help
        }else{
            let result =  fn.apply(context, allArgs);
            allArgs = [];
            return result;
        }
    }
    return help;
}



let currySum = currying(sum);
console.log(currySum, 27)
console.log( currySum(1)()) ;// 1
console.log(currySum(1,2)(3)()); // 6
console.log(currySum(1)(2)(3)(4)()); // 10
