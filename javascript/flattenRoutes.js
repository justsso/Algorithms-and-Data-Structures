const testCase = [
    {
        path: 'hello',
        routes: [
            {
                path: '/a'
            },
            {
                path: '/b'
            },
            {
                path: '/c'
            },
            {
                path: '/d',
                routes: [
                    {
                        path: ['/e','/f','/g']
                    }
                ]
            }
        ]
    }
]



function caseTest(itemArr) {
    if (itemArr == undefined){
        return []
    }
    let ans = []
    for (let i = 0; i < itemArr.length; i++) {
        if (typeof itemArr[i].path != "string"){
            ans.push(...itemArr[i].path)
            continue
        }
        ans.push(itemArr[i].path)
        childAns = caseTest(itemArr[i].routes)
        for (let j = 0; j < childAns.length; j++) {
            ans.push(itemArr[i].path + childAns[j])
        }
    }
    return ans
}

let ans = caseTest(testCase)
console.log(ans, "ans")

/**
 * 
 * 希望输出:
 * [
 *  'hello',
 *  'hello/a',
 *  'hello/b',
 *  'hello/c',
 *  'hello/d',
 *  'hello/d/e',
 *  'hello/d/f',
 *  'hello/d/g'
 * ]
 */

function flattenRoutes(data) {
    let arr = []
    for (let i = 0; i < data.length; i++) {
        arr.push(data[i].path)
        readPath(data[i].path, data[i].routes)
    }
    return arr;

    function readPath(prePath, urls) {
        for(let i = 0 ;i< urls.length; i++){
            if(typeof urls[i].path === "string"){
                arr.push(prePath + urls[i].path)
            }
            if(Array.isArray(urls[i].path)){
                urls[i].path.forEach(item => {
                    arr.push(prePath + item)
                })
            }
            if(urls[i].routes){
                readPath(prePath + urls[i].path,urls[i].routes )
            }
        }
    }
}

// const res = flattenRoutes(testCase);
// console.log(res)