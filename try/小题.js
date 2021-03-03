// let arr = new Array(3)
// arr[0] = 2
// console.log(arr)
// let arr2 = arr.map((item, index) => {
//     item = '22'
//     console.log(index)
//    // return '1'
// })
// console.log(arr2)



/*
2.
* */


var length = 100;
function f1(){
    console.log(this.length)
}

var obj = {
    x: 10,
    f2: function (f1) {
        f1()
        console.log(arguments)
        arguments[0]()
    }
}

obj.f2(f1, 1)
