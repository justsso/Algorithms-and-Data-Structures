/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.zhan = []
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let value = -1;
    for (let i = 0; i < this.zhan.length; i++) {
        if (this.zhan[i].key === key) {
            //当前key 又更新了，所以改变它的位置到栈顶
            value = this.zhan[i].value;
            this.zhan.splice(i, 1);
            this.zhan.push({key: key, value: value});
        }
    }
    return value
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

//    查看zhan中是否已经存在这个元素，如果存在，把该元素拿到栈顶；如果不存在就走下面的逻辑->判断栈是否已满
    let index = -1;

    for (let i = 0; i < this.zhan.length; i++) {
        if (this.zhan[i].key === key) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        this.zhan.splice(index, 1);
        this.zhan.push({key: key, value: value})
    } else {
//    如果长度够，则直接放；如果长度不够了，则把栈低的推出，将该元素推进栈顶 [1,2,3,4,5]
        if (this.zhan.length === this.capacity) {
            this.zhan.shift();
        }
        this.zhan.push({key: key, value: value})
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/*
let cache = new LRUCache(2);
cache.put(2, 1);
cache.put(2, 2);
console.log(cache.get(2));       // 返回  1
cache.put(1, 1);    // 该操作会使得密钥 2 作废
console.log(cache, 68);
cache.put(4, 1);    // 该操作会使得密钥 1 作废
console.log(cache, 71);
console.log(cache.get(2));       // 返回 -1 (未找到)
*/

//利用Hash 写一遍

let LRUCache2 = function (capacity) {
    this.capacity = capacity;
    this.map = new Map();
};


LRUCache2.prototype.put = function (key, value) {
    //创建或者更新
    if (this.map.has(key)) {
        //    删掉旧值，重新set
        this.map.delete(key)
        this.map.set(key, value)
    } else {
        if (this.map.size === this.capacity) {
            //    去掉第一个，然后直接set新值即可
            let first_key = this.map.keys().next().value;
            this.map.delete(first_key);
            this.map.set(key, value)
        } else {
            this.map.set(key, value)
        }
    }
}

LRUCache2.prototype.get = function (key) {
    if (this.map.has(key)) {
        let value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    } else {
        return -1;
    }
}

let cache2 = new LRUCache2(2);
cache2.put(1, 1);
cache2.put(2, 2);
console.log(cache2)
console.log(cache2.get(1));       // 返回  1
console.log(cache2)
cache2.put(3, 3);    // 该操作会使得密钥 2 作废
console.log(cache2)
console.log(cache2.get(2));       // 返回 -1 (未找到)
cache2.put(4, 4);    // 该操作会使得密钥 1 作废
console.log(cache2)
cache2.get(1);       // 返回 -1 (未找到)
cache2.get(3);       // 返回  3
console.log(cache2.get(4));       // 返回  4
