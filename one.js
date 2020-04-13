let wait = function (time) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('wait执行结束')
            resolve()
        }, time)
    })
}
wait(1000)

