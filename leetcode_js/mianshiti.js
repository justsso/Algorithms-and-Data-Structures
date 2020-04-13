/**
 * 业务需求中，经常有发起请求后，必须等待上一次请求结束才能执行下一次请求的需求。
 * 编写一个高阶函数，传递旧请求方法（执行后返回promise），返回一个新方法。连续触发时，
 * 若首次promise未执行完，后续promise直接废弃（不执行then/catch）
 * @param promiseFunction
 */

let firstPromise = function (promiseFunction) {
    let token = false;
    return function (...arguments) {
        return new Promise((resolve, reject) => {
            if (token) {
                return
            }
            token = true;
            promiseFunction.apply(this, arguments)
                .then(resolve)
                .catch(reject)
                .finally(() => {
                    //finally需要考虑垫片
                    token = false
                })
        })
    }
}
