let arr = [1,2,[3,4,[5,6]],7]

// let newArr = arr.flat(Infinity);
// console.log(newArr)
let zhan = 2;
Array.prototype.myFlat = function(num = 1){
    let arr = []
    for(let i = 0 ;i<this.length; i++){
        if(!Array.isArray(this[i])){
            arr.push(this[i])
        }else{
            if(num<zhan){
                arr.push(... this[i].myFlat(num - 1));
                zhan ++;
            }else{
                arr.push(this[i])
            }
        }
    }
    return arr;
}

let myArr = arr.myFlat(1);
console.log(myArr)

let arr6=[2,2,3];
let arr2 = arr6.reduce((prev,curr,index)=>{
    console.log(index) // 1 2
    return prev+curr*curr // 2 + 2*2=6 6+3*3=15
});
console.log(arr2) // 15

let arr3 = arr6.reduce((prev, curr, index) => {
    console.log(index) // 0 1 2
    return prev + curr * curr // 0+2*2 = 4 4+2*2=8 8+3*3=17
}, 0)
console.log(arr3) // 17
console.log(arr6.concat(5,6,[7]))

/**
 * 利用栈来拍平数组
 */
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
     //出栈
    const next = stack.shift();
    if (Array.isArray(next)) {
    //解构后入栈
      stack.push(...next);
    } else {
     //非子数组入栈
      res.push(next);
    }
  }
  return res;
}
console.log(flatten(arr1));// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

Object.defineProperty