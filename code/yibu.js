(async function (){
    try{
        await interview(1)
        await interview(2)
        await interview(3)

        // await 后面可以跟 promise

        await Promise.all([]) // await后面可以跟并行的promise
    }catch (e){
        return console.log('cry at' + e.round)
    }
    console.log('smile')
})()

function interview(round){
    return new Promise(((resolve, reject) => {
        if(Math.random() > 0.5){
            resolve()
        }else{
            reject()
        }
    }))
}

var map = new Map();