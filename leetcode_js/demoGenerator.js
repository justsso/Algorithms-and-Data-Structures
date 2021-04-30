// 1. generator函数可以自动执行，可以一直next()得到一个随机数
// let Infinite_loop_generator = {
//     keys: function () {
//         function* myGenerator() {
//             console.log(123)
//             while (true) {
//                 const random = Math.random().toString(16).slice(2, 8)
//                 yield `0x${random}`
//             }
//         }

//         return myGenerator()
//     }
// }

// let gen = Infinite_loop_generator.keys()
// console.log( gen.next())
// console.log( gen.next())

//2. generator同步进行，可以暂停，也可以继续

//3. generators数据交互：可以往外传参数，外部也可以通过next()向内部传参数

//4. generator错误处理：可以捕获到内部的错误

//5. generator函数的异步应用
//传统的异步有回调函数、事件监听、发布订阅、Promise

let fetch = require("node-fetch");
// 定义generator方式
function* gen5() {
  let url = "https://api.github.com/users/github";
  let result = yield fetch(url);
  console.log(result.bio);
}

// 执行方法

let g5 = gen5();

g5.next()
  .value.then((data) => {
    console.log(data);
    return data.json();
  })
  .then(function (data) {
    g.next(data);
  });

//6. 实现generator函数的自动执行

// generator + promise => async await

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

// 使用方法
// _asyncToGenerator(gen)();


function getData(time) {
    return new Promise(resolve => setTimeout(() => resolve(Math.random()), time));
}

function getSumData(data1, time){
    return new Promise(resolve => {
        setTimeout(() => resolve(data1 + Math.random()), time)
    })
}

function* gen8(){
    console.log("start");
    let data1= yield getData(1000)
    let data2 = yield getSumData(data1, 1000)
    console.log(data2, "data2");
    console.log("end");
}


// generator 自动执行器
function run(gen){
    var g = gen();
  
    function next(data){
      var result = g.next(data);
      if (result.done) return result.value;
      result.value.then(function(data){
        next(data);
      });
    }
  
    next();
  }
  
  run(gen);
