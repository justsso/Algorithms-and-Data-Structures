var a = 100
module.exports = {
    a: a
}

//这种方式会切断ecports和module.exports的联系
exports = {
    a: 123
}
console.log('我是aaaa')
let x = {
    y: null
}

// if ((x === null) || (x != null && x.y !== null)){
//    // !x || x & x.y
//     console.log(1)
// } else {
//     console.log(2)
// }

if(!x || x?.y){
    console.log('1111')
}else{
    console.log('2222')
}
