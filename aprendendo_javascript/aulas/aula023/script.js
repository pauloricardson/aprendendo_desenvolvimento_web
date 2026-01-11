// Parâmetros REST em funções Javascript
let res = 0;

function soma(...valores) {
    let res = 0;
    for (let n of valores) {
        res += n;
    }
    return res;
}

console.log(soma(3, 3, 10, 40, 49, 29, 384, 39398, 393));