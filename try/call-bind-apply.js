let a=0;
const obj={
	a:1,
	b:function () {
		console.log(this.a);
	},
};
const obj1={
	a:2
}
const fun=obj.b;
fun();  // undefined
fun.apply(obj); //1
fun.bind(obj1).call(obj); //2

const fun1=fun.bind(obj1)
let c = new fun()  //它返回的会是什么呢?  // undefined

function Person(){
    this.a = 2
    console.log(this.a)
}

// let p = new Person()
