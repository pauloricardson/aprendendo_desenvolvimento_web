"use strict"; // todas as variáveis devem ser declaradas com let ou const

function somar(...valores) {
    let result = 0;
    for (let v of valores) {
        result += v;
    }
    return result;
}

function somar2(...valores) {
    let result2 = 0;
    for (let i = 0; i < valores.length; i++) {
        result2 += valores[i];
    }
    return result2;
}

function somar3(...valores) {
    let result3 = 0;
    for (let v in valores) {
        result3 += valores[v];
    }
    return result3;
}

console.log(somar(10, 10, 10, 10));
console.log(somar2(10, 10, 10, 10, 3));
console.log(somar3(10, 10, 10, 10, 3, 8));