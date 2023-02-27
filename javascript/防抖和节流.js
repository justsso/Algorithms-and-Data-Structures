/**
 * 防抖
 * 当调用动作过n毫秒之后才执行该操作，若在这n毫秒内又调用此动作，则重新计算时间
 * 最后一次事件过后的wait时间才真正的调用
 * 缺点，不能立即触发，第一次调用也得wait时间之后了
 */
function debounce(fn, wait) {
    let timer = null
    return function (...args) {
        let context = this;  // 正确处理this
        // 如果定时器存在，事件触发就清空定时器
        if(timer){
            clearTimeout(timer);
        }

        timer = setTimeout(function()  {
            fn.apply(context, args)  // 处理参数
        }, wait)
    }
}

/**
 * debounce 优化，第一次触发能立即调用，还增加取消的操作
 */

function debounce(fn, wait, immediate){
    let timer = null;

    return function(...args){
        let context = this;

        if(timer){ clearTimeout(timer)}
        if(immediate){
            let callNow = !timer;
            timer = setTimeout(function(){
                timer = null;
            }, wait)
            if(callNow){
                fn.apply(context, args)
            }
        }else{
            timer = setTimeout(function(){
                fn.apply(context, args)
            }, wait)
        }
    }
}

function debounce(fn, wait, immediate){
    let timer = null;
    return function(...args ){
        let context = this;
        if(timer) clearTimeout(timer)

        if(immediate && !timer){
            // 第一次调用，立即执行
            fn.apply(context, args)
        }
        // 其他情况就防抖了，在最后一次事件的wait时间后执行
        timer = setTimeout(function(){
            fn.apply(context, args)
        }, wait)
    }
}



/**
 *  节流有两种主流实现方式，1时间戳 2定时器
 * 
 */

/** 时间戳法，第一次会立即执行，但是在事件停止触发后没有办法再执行事件 */
function throttle(fn, wait){
    let context, args;
    let previous = 0;
    return function(){
        let now = +Date.now();
        context = this;
        args = arguments;
        if(now - previous > wait){
            fn.apply(context, args)
            previous = now;
        }
    }
}

/** 定时器法，设置一个定时器，在触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器
 * 会在 wait 时间后第一次执行，事件停止触发后依然会再执行一次事件
 */
function throttle(fn, wait){
    let timer = null;

    return function(){
        let context = this;
        let args = arguments;
        if(!timer){
            timer = setTimeout(function(){
                // wait时间后清空定时器
                timer = null;  // timer = null 而不是 clearTimeout(timer)，因为clearTimeout()并不会让timer等于null
                fn.apply(context, args);
            }, wait)
        }
    }
}

/**
 * 结合两者优势，能控制是否会立即触发，能控制事件停止后是否再执行一次
 * options.leading false 表示禁用第一次执行
 * options.trailing false 表示禁用停止触发的回调
 */
function throttle(fn, wait, options){
    let timer = null;
    let previous = 0;
    let args, context;
    let later = function(){
        previous = options.leading === false ? 0 : new Date().getTime(); // 执行之后 previous = now的时间
        timer = null;
        fn.apply(context, args);
        if(!timer){
            context = args = null;
        }
    }

    let throttled = function(){
        let now = new Date().getTime();
        // 第一次时 previous = 0，leading = false 是禁用第一次执行
        if(!previous && options.leading === false) {
            previous = now;  // 第一次将previous = now
        }
        let remaining = wait - (now - previous);  // 下次触发 fn 的剩余时间
        context = this;
        args = arguments;
        // 如果没有剩余时间 或者你修改了系统时间
        if(remaining <=0 || remaining > wait){
            if(timer){
                clearTimeout(timer);
                timer = null;
            }
            // 就赶紧调用一次
            previous = now;
            fn.apply(context, args);
            if(!timer){
                context = args = null;
            }
        }else if(!timer && options.trailing !== false){
            timer = setTimeout(later, remaining)
        }
    }

    throttle.cancel = function(){
        clearTimeout(timer);  // 清空定时器
        previous = 0;  // previous 归0
        timer = null;  //  timer赋值null
    }

    return throttled;
}

/**
 * 防抖是用户一直操作，那么函数就一直不执行，
 * 优化，需要在一定的时间里执行一次
 */


function throttle3(fn ,wait, time){
    let timer = null;
    let previous = 0;
    return function (... args){
        let now = new Date().getTime();
        if(now - previous > time){
            clearTimeout(timer)
            fn.apply(this, args)
            previous = now
        }else{
            clearTimeout(timer)
            timer = setTimeout(() =>{
                fn.apply(this, args )
            }, wait)
        }
    }
}

window.onscroll = _debounce(log, 50, 1000)  // 50毫秒内触发的不响应，但是至少1秒内得执行一次


/**
 * 节流
 */

function throttle(fn, wait){
    return function(){

    }
}