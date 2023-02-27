/**
 * 深拷贝
 * 循环引用、怎么遍历Symbol、判断类型（object、数组）、没有考虑Map Set Function 正则这些
 * 递归爆栈用迭代法
 */

// 递归写法
function deepClone(value, hashMap = new WeakMap()){
    if(!isObject(value)){  // 基本数据类型，返回值
        return value
    }

    // 对象或者数组
    if(hashMap.has(value)) return hashMap.get(value);

    // hashMap中存入 value:target的引用
    let target = Array.isArray(value) ? [] : {};
    hashMap.set(value, target);

    // 先判断symbol的key
    let symbolKeys = Object.getOwnPropertySymbols(value);
    if(symbolKeys.length){
        symbolKeys.forEach(symbolKey => {
            if(isObject(value[symbolKey])){
                target[symbolKey] = deepClone(value[symbolKey], hashMap);
            }else{
                target[symbolKey] = value[symbolKey];
            }
        })
    }


    // 再判断其他的可枚举的key
    for (const key in value) {
        if(Object.prototype.hasOwnProperty.call(value, key)){
            if(isObject(value[key])){
                target[key] = deepClone(value[key], hashMap)
            }else{
                target[key] = value[key];
            }
        }
    }
    return target;

}


// 迭代写法
function deepClone2(x){
    const root = {};

    // 栈
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: x
        }
    ];

    while(loopList.length){
        // 广度优先
        const node = loopList.pop();  // 出栈
        const {parent, key, data} = node;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        // parent是父元素，res是子元素

        let res = parent;
        if(typeof key !== 'undefined'){
            res = parent[key] = {}
        }


        for(let k in data){
            if(data.hasOwnProperty(k)){
                if(typeof data[k] === object){
                    // 入栈
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k]
                    })
                }else{
                    res[k] = data[k];
                }
            }
        }

    }

    return root;
}


function isObject(value){
   return typeof value === 'object' && value !== null
}