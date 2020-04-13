/**
 * @param {number} x
 * @return {number}
 */

//计算法
var reverse = function (x) {
    console.log(x)
    let result = 0;
    let fuhao = x < 0;
    let wei = 1;

    let temp_x = Math.abs(x);
    //求位数
    while (temp_x / 10 >= 1) {
        wei += 1
        temp_x = temp_x / 10
    }
    // console.log(wei, 14)
    let temp_x2 = Math.abs(x);

    while (wei > 0) {
        result += temp_x2 % 10 * Math.pow(10, wei - 1);
        //如果已经溢出，则直接返回0
        temp_x2 = Math.floor(temp_x2 / 10);
        wei = wei - 1;
    }

    if (fuhao) {
        result = -result;
    }
    if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
        result = 0
    }
    return result;
};

// console.log(reverse(123))
// console.log(Math.pow(2, 31))

//利用字符串方法
/**
 * @param x {number}
 * @return {number}
 */

let reverse2 = function (x) {
    console.log(x)
    let fuhao = x < 0, result = 0;
    let temp_x = Math.abs(x);
    let str_x = "" + temp_x;
    str_x = str_x.split("").reverse().join("");
    temp_x = Number(str_x);
    fuhao ? result = -temp_x : result = temp_x

    if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
        result = 0
    }
    return result;

}
// console.log(reverse2(1212412432459))

let reverse3 = function (x) {
    let result = 0, _Max = Math.pow(2, 31) - 1, _MiN = -Math.pow(2, 31);
    let temp_x = Math.abs(x);
    while (temp_x !== 0) {
        result = result * 10 + temp_x % 10;
        if (result > _Max) {
            return 0;
        }
        temp_x = Math.floor(temp_x / 10)
    }
    result = x < 0 ? -result : result;
    if (result > _Max || result < _MiN) {
        return 0
    }
    return result;
}

console.log( reverse3(123))


//Math.floor向下取整
//负数向下取整
