/**
 * @description
 * @author justsso
 */

let arr = [
    {
        n: 'ab',
        name: '蟑螂'
    },
    {n: 'ab', name: '狮子'},
    {n: 'bc', name: '蝗虫'}
]
 arr.sort(function(firstObj, secondObj){
     if(firstObj.n < secondObj.n){
         return -1
     }else if(firstObj.n > secondObj.n){
         return 1
     }else{
         return 0
     }
 })
console.log(arr)
var stringArray = ["Blue", "Humpback", "Beluga"];
console.log('stringArray:' + stringArray.join());
console.log( +('cb' < 'ac'))
console.log('a'.localeCompare('c'))
