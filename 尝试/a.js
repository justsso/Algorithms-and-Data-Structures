var a = 100
module.exports = {
    a: a
}

//这种方式会切断ecports和module.exports的联系
exports = {
    a: 123
}
console.log('我是aaaa')
