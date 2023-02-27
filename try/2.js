function flat_sort(arr){
    let flatArr = flat(arr);
    let uniqueArr = [... new Set(flatArr)]
    return uniqueArr.sort((firstEl, secondEl) => {
        if(firstEl < secondEl){
            return -1
        }else{
            return 1
        }
    })
}

function flat(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i])){
            result = result.concat(arr[i])
        }else{
            result = result.concat(flat(arr[i]))
        }
    }
    return result
}

let arr = [1,2,5,4,[3,2]]
let result = flat_sort(arr)
console.log(result)


function isHuiwen(str){
    let len = str.length;
    for(let i = 0; i < str.length; i++){
        if(str[i] !== str[len -1 -i]){
            return false
        }
    }
    return true
}
