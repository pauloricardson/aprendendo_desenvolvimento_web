const somar = function(...valores) {
    let res = 0;
    for (let v of valores) {
        res += v;
    }
    return res;
}

console.log(somar(10, 10, 10));

const somaConstrutor = new Function("v1", "v2", "v3", "return v1 + v2 + v3");

console.log(somaConstrutor(10, 20, 30));