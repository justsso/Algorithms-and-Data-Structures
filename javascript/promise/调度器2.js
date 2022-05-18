class Scheduler {

    constructor() {
        this.max = 2;
        this.queue = []; // 接收所有 add()中 promiseCreator的队列
        this.currentRunSum = 0;

        // 在 constructor 函数中用 Promise.resolve() 自动执行

        Promise.resolve().then(() => { // 生成一个 微任务
            this.run()
        })
        
    }

    add(promiseCreator) {
        this.queue.push(promiseCreator)
        // return this.run(promiseCreator);    // 一旦有add()操作就自动触发 run

    }

    run() {
        while (this.currentRunSum < this.max) {
            let first = this.queue.shift();
            if (first) {
                this.currentRunSum++;
                first().then((res) => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                }).finally(() => {
                    this.currentRunSum--;
                    this.run();
                })
            } else {
                return;
            }
        }
    }
}

// 下面测试
const timeout = (time, order) => new Promise(resolve => setTimeout(() => {
    resolve(order)
}, time));

const scheduler = new Scheduler();

const addTask = (time, order) => {
    scheduler.add(() => timeout(time, order));
}

addTask(1000, '1')  // addTask 是同步执行任务
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')


