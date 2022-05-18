/**
 * 手写 Promise.all() 
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * 首先；解析 Promise.all() API
 * 接受参数是一个 promise 数组，.then() 的回调函数里的参数也是每个promise执行结果的数组，结果的顺序要和promise的顺序一致
 * 
 * 思路：
 * 1. 先判断参数是不是数组，不是数组抛出错误
 * 2. Promise.all() 返回的是promise 实例
 * 3. promise 数组是同时开始执行的，但不一定是同时结束的，返回结果的顺序要和原顺序保持一致
 * 4. 要用一个当前执行第几个，记住作为返回结果数组的下标
 * 5. 还有一个记录promise完成数量的标记，当有promise完成就+1，然后判断是否等于传入参数的长度，等于就 resolve() 出 执行结果
 * 
 * 参考：https://zhuanlan.zhihu.com/p/362648760
 * 
 */

Promise.all = function (params){
    
    return new Promise((resolve, reject) => {
        let promiseResult = [];
        let runCount = 0;  // 当前第几个
        let finishCount = 0;  // 执行完几个 promise

        for (const p of params) {
            let pIndex = runCount;
            runCount += 1;

            Promise.resolve(p).then((res) => {
                promiseResult[pIndex] = res;
                finishCount +=1;
                if(finishCount === params.length){
                    resolve(promiseResult)
                }
            }).catch(err => {
                reject(err)
            });
        }

        if(runCount === 0 ){
            resolve(params)
        }
    })
}