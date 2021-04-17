/*
function foo(...args) {

}
 */


/*
* 思路：foo函数可以接收一个到多个参数，也可以连着调用foo函数，最后调用返回值的getValue()返回所有参数的和
* 所以我们每次调用foo()，就处理入参，将新传入的参数整合到以往的入参中，最后返回一个闭包(函数)，这个闭包还有一个getValue属性，当调用getValue时，
  再去计算所有的传入的参数
 */

function foo(... args){
    let target = (... args1) => foo(... [... args, ... args1])
    target.getValue = () => [... args].reduce((acc, current) => {
       return acc + current
    }, 0)
    return target;
}

var f1 = foo(1,2,3); console.log(f1.getValue());
// 6 输出是参数的和

var f2 = foo(1)(2,3); console.log(f2.getValue());
// 6

var f3 = foo(1)(2)(3)(4); console.log(f3.getValue());
// 10
