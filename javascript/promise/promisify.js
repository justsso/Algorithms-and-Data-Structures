/**
 * 将一个回调样式的函数 promise 化。
 */

// 首先回调样式的函数，比如 readFile(path, callback(res, err){ }).

function promisify(fn){
    return new Promise((resolve, reject) => {
        fn()
    })
}