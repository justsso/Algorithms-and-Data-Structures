// var a = function (ppp) {
//     let c = ppp;
//     return function () {
//         console.log(ppp);
//         c++;
//         return c;
//     }
// }
//
// var z= a(0);
// var p = z();
// p++;
// console.log(z())
//
// const proxy = new Proxy({}, {
//     get(target, p, receiver) {
//         console.log(`getting ${p}`)
//         return Reflect.get(target, p, receiver)
//     },
//
//     set(target, p, value, receiver) {
//         console.log(`setting ${p}`)
//         return Reflect.set(target, p, receiver)
//     }
// })
//
// console.log(proxy.a)
//Proxy实际上重载了点运算符，

const handle = {
    get(target, p, receiver) {
        inver(p, 'get')
        return target[p]
    },
    set(target, p, value, receiver) {
        inver(p, 'set')
        target[p] = value
        return true;
    }
}

function inver(key, action) {
    if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} ${key}`)
    }
}

// try {
//     const target = {}
//     const proxy = new Proxy(target, handle)
//     proxy._prop
// } catch (e) {
//     console.log(e)
// }


//setter 和 getter 做简单类型检查

// let _name = 'joe';
// const user = {
//     get name() {
//         return _name
//     },
//     set name(value) {
//         if (typeof value !== 'string') {
//             throw new Error('传入类型不是字符串')
//         } else {
//             _name = value
//         }
//     }
// }
//
// user.name = 'hello'
// user.name = 123


//Proxy做类型检查

const user = new Proxy({_name: 'joe'}, {
    set(target, p, value, receiver) {
        if (p === '_name' && typeof value !== 'string') {
            throw new Error('传入类型不是字符串')
        }
        return Reflect.set(target, p, value)
    }
})

// user._name = 'hello'
// user._name = 456


//利用Proxy封装类型检查

function checktype(obj, definition) {
    return new Proxy(obj, {
        set(obj, key, value, receiver) {
            if (key in definition && typeof value !== definition[key]) {
                throw new Error(`${key}类型应该是: ${definition[key]}`)
            }
            return Reflect.set(obj, key, value)
        }
    })
}

class User {
    constructor(name, age) {
        //this 是实例
        return checktype(this, {
            name: 'string',
            age: 'number'
        })
    }
}

// let joe = new User()
// joe.name = 'joe';
// joe.age = '12'

let joe = new User({
    name: 11,
    age: '23'
})
// joe.age = 8
//
// let joe = new User('name', 34)
// console.log(joe)

console.log(module)















