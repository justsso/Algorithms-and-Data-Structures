/**
 * 描述：LazyMan 类，
 * const hack = new LazyMan();
 */

class LazyMan {
    constructor(name) {
        this.name = name;
    }

    named(name){
        this.name = name;
    }

    eat(){

        return this;
    }

    sleep(){

        return this;
    }

    next(){

    }
}