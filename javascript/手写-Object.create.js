/**
 * Object.create(o)
 * Creates an object that has the specified prototype or that has null prototype.

@param o — Object to use as a prototype. May be null.

将传入的对象作为创建的对象的原型
 */

function createObj(o){
    function F(){}
    F.prototype = o;
    return new F();
}