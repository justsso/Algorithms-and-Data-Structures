
/**
 * 题目描述：JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个。完善下面代码中的 Scheduler 类，使得以下程序能正确输出。
 *  class Scheduler {
        add(promiseCreator) { ... }
    }

    const timeout = (time) => new Promise(resolve => setTimeout(resolve, time));

    const scheduler = new Scheduler();

    const addTask = (time, order) => {
        scheduler.add(() => timeout(time)).then(() => console.log(order))
    }

    addTask(1000, '1')
    addTask(500, '2')
    addTask(300, '3')
    addTask(400, '4')

    输出： 2 3 1 4 
    一开始，1 2 两个任务进入队列
    500ms 时，2完成，输出2，任务3进队列
    800ms 时，3完成，输出3，任务4进队列
    1000ms 时，1完成，输出1，队列里只有任务4了
    1200ms 时，4完成，输出4，队列空了
     
 */

/**
 * 分析要点：new Scheduler() 无参数，
 * 1. scheduler.add().then()，add() 方法可以.then，说明add() 方法返回一个promise
 * add()方法等待传入的 promiseCreator 完成之后，add().then() 才执行
 * 
 * 2. scheduler 里面的promise 队列会自动执行，不需要其他的触发
 * 所有任务添加到任务队列后，我们的例子是 连着4次同步调用addTask() 自动开始执行任务。add() 会自动触发 队列里 promise的执行，所以抽离出一个run方法
 * 
 * 换句话说只要能进入执行队列，就一定会执行。当一个任务执行完了之后，队列会空出一个，然后会被添入一个任务
 * 
 * promiseCreator 是一个函数，函数签名是 function promiseCreator(): <Promise> {}
 * 
 * 有一个变量是当前正在执行的 任务的个数，如果个数少于 max，就 shift() 一个任务去执行
 * 
 */


class Scheduler {
	constructor(count = 2) {
		this.count = count;
		this.queue = []; // 将 add() 方法接收的promise暂存
		this.run = []; // 执行队列
	}

	add(task) {
		this.queue.push(task)
		return this.schedule()
	}

	schedule() {
		if (this.run.length < this.count && this.queue.length) {  // 执行队列run[]长度小于最大执行量，且暂存promise队列非空
		  	const task = this.queue.shift()  
		  	const promise = task().then(() => {
		  		this.run.splice(this.run.indexOf(promise), 1)  // 异步 当前promise 执行完毕后，在run[] 中删除它，run[]的长度也会减1
		  	})
		  	this.run.push(promise);  // 同步 在 run[] 里面添加当前执行的 promise
		  	return promise  //  因为 add() 方法要返回一个promise，而上面的promise.then 返回的就是一个 promise
		} else {   // 其他情况，run[].length === this.count 或者 this.queue 为空
		  	return Promise.race(this.run).then(() => this.schedule())
		}
	}
}


const timeout = (time) => new Promise(resolve => {
	setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
	scheduler.add(() => timeout(time)).then(() => console.log(order))   // add() 方法返回的是个 promise 哦
}


  addTask(1000, '1')
  addTask(500, '2')
  addTask(300, '3')
  addTask(400, '4')
  

  /**
 * 
 * 复习 promise 的各种调用
 * 
 * promise.all([])
 * promise.race()
 * promise.allSettled()
 * 
 * 
 * .then() 之后返回的是一个新的promise实例，不是原来的promise。所以 promise 可以链式调用
 * 
 */

