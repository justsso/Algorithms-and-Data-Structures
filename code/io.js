const glob = require("glob");
// 阻塞写法
// var result = null;
// console.time("glob")
// result = glob.sync(__dirname + "/**/*")
// console.timeEnd("glob")
// console.log(result)

// 非阻塞写法
// var result = null;
// console.time("glob")
// glob(__dirname + "/**/*", function(err, res) {
//     result = res
//     console.log(result)
// })
//
// console.timeEnd("glob")
// console.log(1 + 1);


// 回调 callback
function interview(callback){
    setTimeout(() => {
        if(Math.random() > 0.8){
            callback(null, 'success')
        } else {
            // throw new Error('fail')   // 这里外层的 try catch 是不会捕获到的，因为这里是在一个新的事件循环中。捕获不到错误，所以会造成nodejs process 崩溃
            callback(new Error("fail"))
        }
    }, 500)
}

try{
    interview(function (err, res){
        if(!err){
            console.log("smile")
        }
    })
}catch (e){
    console.log(e)
}

// 实现一个简单的 eventLoop
const eventloop = {
    quene: [], // Node.js 的队列存在多种类别的队列
    timeoutquene: [], // 定时任务的队列
    fsquene: [],   // 文件操作的队列
    loop() {
        while (this.quene.length){
            var callback = this.quene.shift();
            callback()
        }
        // 在每次循环的时候，会对所有的队列进行遍历，不通类型的队列操作不同

        this.fsquene.forEach(callback => {
            // 看哪一个文件操作完成了，如果完成了，就调用；
            // 下面是伪代码
            // if(done){
            //     callback()
            // }
        })
        setTimeout(this.loop.bind(this), 50)  // 50ms进入一个事件循环
    },
    add(callback){
        this.quene.push(callback)
    }
}

// eventloop.loop();
//
// setTimeout(() => {
//     eventloop.add('fswrite', function (){
//         console.log("第一个函数")
//     })
// }, 500)
// setTimeout(() => {
//     eventloop.add(function (){
//         console.log("第一个函数")
//     })
// }, 800)

