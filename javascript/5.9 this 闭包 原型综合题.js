const Foo = function (a) {
    function bar() {
        console.log(a);
    }

    this.baz = function(){
        console.log(a);
    }
}

Foo.prototype = {
    biz: function (){
        console.log(a)
    }
};

const f = new Foo(3);

f.bar();
f.baz();
f.biz();

/**
 * 放在浏览器里面
 */