/**
 * 和数组相关的
 */
// 数据去重

let arr = [1,2,1,2,4,3,1,5];








// string2Number('10', 2) => 2
// string2Number('10', 10) => 10
// string2Number('F', 10) => 15
// 用 A-Z 表示大于10 的数  radix -> [2:36]
// let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// 倒着计算，不符合人类思考，但方便计算机
function string2Number(str, radix){
    let result = 0;
    let diff = 'A'.charCodeAt(0) - 10;
    [... str].reverse().forEach((s, index) => {
        if( 'A' <= s && s <= 'Z' ){
            s =  s.charCodeAt(0) -  diff
        }
        result += Math.pow(radix, index) * Number(s)
    })
    return result;
}

// 正序计算，比较符合人类思考，选择这个，代码是写给人看的
function string2Number2(str, radix){
    const len = str.length;
    const diff = 'A'.charCodeAt(0) - 10;
    let result = 0;
    for(let i = 0; i< len; i++){
        let n = str[i];
        if(str[i] >= 'A' && str[i] <= 'Z'){
            n = str[i].charCodeAt(0) - diff
        }
        result += Number(n) * Math.pow(radix, len - 1 - i)
    }
    return result;
}
    


console.log(string2Number('10', 2))
console.log(string2Number('10', 10))
console.log(string2Number('FA', 10))

console.log(string2Number2('10', 2))
console.log(string2Number2('10', 10))
console.log(string2Number2('FA', 10))