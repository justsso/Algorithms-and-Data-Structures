function fn(x = 3){
    console.log(x)
}

fn()
fn(1)
fn(undefined)
fn(null)

let promise = new Promise((resolve, reject) => {
    resolve('success1');
    reject('error1');
    resolve('success2')
})

promise.then((res) =>{
    console.log('then:',res)
}).catch((err) => {
    console.log('catch', err )
})



function equal(obj1, obj2){
    if(typeof obj1 !== typeof obj2){
        return false;
    }
    if(obj1 === null && obj2 === null){
        return true;
    }
    
}