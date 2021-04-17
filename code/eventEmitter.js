const EventEmitter = require("events").EventEmitter;

// EventEmitter实例写法

// class Geektime extends EventEmitter{
//     constructor() {
//         super();
//         setInterval(() => {
//             this.emit("newlesson", {price: Math.random() * 100})
//         }, 3000)
//     }
// }
// const geektime = new Geektime();
// geektime.addListener("newlesson", (res) => {
//     console.log("wow!" , res)
// })
// geektime.on("newlesson", (res) => {
//     console.log("wow!", res)
// })
// console.log( "geektime.on === geektime.addListener  =>",geektime.on === geektime.addListener)


// EventEmitter 实例中this的指向
// class MyEmitter extends EventEmitter {}
// const myEmitter  = new MyEmitter();
//
// myEmitter.on("event", function(a,b) {
//     console.log("function", a, b, this, this === myEmitter)
// })
//
// myEmitter.on("event", (a,b) => {
//     // 使用了es6箭头函数，this将不再指向myEmitter实例
//     console.log("es6", a, b, this)
// })
//
// myEmitter.emit("event", "1", 2)




// myEmitter.on("event", function(a,b) {
//     console.log(3)
// })
// myEmitter.on('error', (err) => {
//     console.error('whoops! there was an error');
// });

// error 事件是Nodejs中特殊情况，如果没有error的注册事件，那么当emit error时，会报错，打印错误堆栈，并且对出当前process
// myEmitter.emit('error', new Error('whoops!'));

// emitter先注册监听，发射事件才有可响应的函数被调用




const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});
myEE.on('foo', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());  // Prints: [ 'foo', 'bar', Symbol(symbol) ]
console.log(myEE.getMaxListeners()) // 10
console.log(myEE.listenerCount("foo")) // 2
console.log(myEE.listeners("foo"))  //[ [Function (anonymous)], [Function (anonymous)] ]
