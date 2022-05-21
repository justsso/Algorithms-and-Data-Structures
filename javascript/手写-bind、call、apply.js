/**
 * bind call apply 改变函数的this对象指向
 * call和apply是函数直接执行了，但是参数传递不同，call是参数列表，apply是参数数组。
 * bind不会直接执行，而是返回一个新的函数。新的函数如果被new操作符当做构造函数调用，那么this指向new创建出来的实例。
 */

/**
 * bind
 * 形如，let fun2 = fun1.bind(context, arg1,arg1...)
 * 第一个参数是要绑定的this对象，如果参数是空或者undefined，那么this会绑定到全局对象上面
 * bind返回一个函数
 * bind返回的函数如果当做构造函数调用，new操作符的优先级会大于bind。里面的this指向new创建出来的实例
 */

/** bind 的实现借助 apply 或者 call */
Function.prototype.bind = function(context){
    var fun = this;  // 因为是模拟实现bind，所以就不用let这种ES6中的语法了
    var args1 = Array.prototype.slice.call(arguments, 1); // 截取其余的参数
    // 接下来要知道返回的函数是作为普通的函数调用，还是用作构造函数

    var F = function(){}   
    F.prototype =  this.prototype;  // 伪造一个构造函数，函数的原型等于fun的原型，为了判断函数是不是用作构造函数了

    var bound = function(){
        var args2 = Array.prototype.slice.call(arguments, 1); // bind返回的函数，在调用时的其余参数
        var finalArgs = args1.concat(args2);  // 整理所有的参数
        // 利用this关键字的指向，如果用作构造函数，那么this指向实例，实例 instanceof 构造函数的关系
        return fun.apply(this instanceof F ? this : context  ,finalArgs);
    }
    bound.prototype = new F();  // 和原来的函数建立关系
    return bound;
}


/**
 * call
 * fun1.call(context, arg1,arg2,...)
 * 第一个参数是要绑定的this对象，其余参数正常传入，用逗号隔开
 * 函数直接执行了
 */

/**
 * apply
 * fun1.apply(context, [arg1, arg2,...])
 * 第一个参数是要绑定的this对象，其余参数用数组的形式传入
 * 函数直接执行了
 */

Function.prototype.apply = function(context, args){
    if(typeof args === 'undefined' || args === null){
        args = [];
    }

    if(typeof context === 'undefined' || context === null){
        context = window;
    }

    var fun = this;
    context = new Object(context);
    var key = Symbol(1); // 添加一个独一无二的key
    context[key].fun = fun;
    var result = context[key](... args);  // 利用了对象上面调用一个函数，函数内部肯定指向这个对象
    delete context[key];  // 调用完后再删除这个独一无二的key
    return result;
}