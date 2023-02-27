

function debounce(fn, time){
    let last = new Date().getTime();
    return  (args) => {
        let now = new Date().getTime();
        if(now - last > time){
            fn(args)
        }
        last  = now
    }
}

input.onchange = debounce(fn, time)