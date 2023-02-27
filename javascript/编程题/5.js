async function request(url) {
    // 返回 content
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`success${url}`)
        }, 10 + Math.random())
    })
}

async function requestLimit(urls, limit = 3) {

    function start(current, p) {
        p.then(content => {
            result[current] = content;
            count++;
            if (count < urls.length) {
                start(count, request(urls(count)))
            } else {
                return result;
            }

        })
    }


    start()

}

async function requestLimit(urls, limit = 3) {
    if (urls.length <= limit) {
        return Promise.all([urls].map(url => request(url)))
    }

    let result = [];




    let count = 0;

    for (let i = 0; i < limit.lenth; i++) {
        start(request(urls[count++]))
    }


    function start(current, p) {
        p.then(content => {
            res[current] = content;
            count++;
            if (count < urls.length) {
                start(request(urls[count]))
            } else {
                return result;
            }
        })
    }

    start(request(urls[count]))

    return result;
}


async function requestLimitV2(urls, limit = 3) {

    return new Promise((resolve, reject) => {
        var times = 0;
        var index = 0;
        var ans = []
        while (true) {
            if (index >= urls.length) {
                break
            }
            if (times >= limit) {
                continue
            }
            times++;
            (function (index, urls) {
                request(urls[index]).then((content) => {
                    ans[index] = content
                    times--;
                })
            })(index++, urls)
        }
        resolve(ans)
    })


}

var urls = ['1', '2', '3', '4', '5', '6']

requestLimitV2(urls).then((ans)=>{
    console.log(ans)
})

console.log("start1")