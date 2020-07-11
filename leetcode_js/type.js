/**
 * @description
 * @author justsso
 */
// let a = 0;
// for (let b=0;b<1000;b++){
//     setTimeout(()=>{
//         a++;
//     },10);
// }
//
// setTimeout(()=>{
//     console.log(a)
// },1000);
/*
第一题
 */
var tag = 0

function test1() {
    return tag
}

function test2(tag) {
    tag = 1
    return tag
}

function test3() {
    return (
        test2()
    )
}

// console.log(test3())
// console.log(test2())
// console.log(test1())


/*
* 第二题
* */
// var a = {}
// var b = {
//     key: "a"
// }
// var c = {
//     key: "c"
// }
// a[b] = "123"
// a[c] = "456"
// console.log(a[b])

/*
第三题
 */

for (var i = 0; i < 10; i++) {
    setTimeout((i) => {
        console.log(i)
    }, 1000, i)
}
