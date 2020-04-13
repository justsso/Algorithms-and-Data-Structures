let kkk = {
    keys: function () {
        function* myGenerator() {
            console.log(123)
            while (true) {
                const random = Math.random().toString(16).slice(2, 8)
                yield `0x${random}`
            }
        }

        return myGenerator()
    }
}

    let gen = kkk.keys()
console.log( gen.next())
console.log( gen.next())

