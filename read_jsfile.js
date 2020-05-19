const fs = require('fs')
const path = require('path');

// const data = fs.readFileSync(path.resolve(__dirname, './one.js'), 'utf-8')
// console.log(data)
let stat =  fs.statSync('./one.js')
console.log(stat, 7)
for (const statKey in stat) {
    console.log(typeof stat[statKey], statKey)
}
