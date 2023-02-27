class EventEmitter{
    constructor(){
        this.subscribers = [];
    }

    add(handler){
        this.subscribers.push(handler)
    }

    emit(){
        this.subscribers.forEach(subscriber => subscriber())
    }
}


function sum(){

}

function(){

}

function currying(){

}