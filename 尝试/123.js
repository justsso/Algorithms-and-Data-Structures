var a = function (ppp) {
    let c = ppp;
    return function () {
        console.log(ppp);
        c++;
        return c;
    }
}

var z= a(0);
var p = z();
p++;
console.log(z())
