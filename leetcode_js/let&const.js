//存在变量提升
// var a = 1;
// (function () {
//     console.log(a)
//     var a = 2
// })()


//没有变量提升，let声明变量之前访问会报错 is not defined
// var a = 1;
// (function () {
//     console.log(a)
//     let a = 2
// })()


/*
console.log(a)
var a = 1 //undefined

console.log(a)
let a = 1 //ReferenceError: a is not defined
*/
var arr = []

var _loop = function _loop(i) {
    arr[i] = function () {
        console.log(i)
    }
}


for (var i = 0; i < 10; i++) {
    _loop(i)
}

arr[2]() //10
// console.log(i) //10


// var brr = []
// for (let i = 0; i < 10; i++) {
//     brr[i] = function () {
//         console.log(i)
//     }
// }
//
// brr[2]()
// console.log(i)


// for (var i = 0; i < 3; i++) {
//     var i = 'abc';
//     console.log(i);
// }
// abc

// for(let i =0 ;i< 10 ;i++){
//
// }
// console.log(i)

// const name = 'Friday'
// name = 'Sunday'



const people = {
    name: 'Jack',
    age: 21
}
people.age = 22
console.log(people)
