
/**
 * @description
 * @author justsso
 */

function createChainedFunction(...funcs){
    return funcs
        .filter(f => f !== null && typeof f !== 'undefined')
        .reduce((acc, f) => {
            if (typeof f !== 'function') {
                throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
            }

            if (acc === undefined) {
                return f;
            }

            return  (...args) => {
                acc.apply(this, args);
                f.apply(this, args);
            };
        }, undefined);
}

function onClose(){
    console.log('onClose')
}

function remove(key){
    console.log('remove', key)
}
let func = createChainedFunction(() => remove(2), onClose)
console.log(func)
