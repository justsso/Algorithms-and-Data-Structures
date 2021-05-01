function compose(...rest) {
    return function (component) {
        rest.forEach(item => {
            component = item(component)
        })
        return component
    }
}

function fn1(X) {
    console.log('fn1 start')
    X += '_fn1'
    console.log('fn1 end')
    return X
}

function fn2(x) {
    console.log('fn2 start')
    x += '_fn2'
    console.log('fn2 end')
    return x
}

function fn3(x) {
    console.log('fn3 start')
    x += '_fn3'
    console.log('fn3 end')
    return x
}

let F = compose(fn1, fn2, fn3);

let component = 'component'
let newComponent = F(component)
console.log(newComponent)
//希望 newComponent 是一个被依此包裹的新组件
/*
* fn1 start
* component_fn1
* fn1 end
* fn2 start
* component_fn1_fn2
* fn2 end
* fn3 start
* component_fn1_fn2_fn3
* fn3 end
*
* component_fn1_fn2_fn3
* */
