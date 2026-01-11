// Funções paratrizadas

// function num(p1) {
//     return p1;
// }


// let array = new Array(3);

// array[0] = num(3);
// array[1] = num(50);
// array[2] = num(100);

// for (let valor of array) {
//     console.log(valor);
// }

// function soma(n1 = 0, n2 = 0) {
//     console.log(n1 + n2);
// }

const VALOR_PADRAO = 0;

let valor = 0;

function add(v) {
    return valor + v;
}

valor = add(10);

console.log(valor);

valor = add(5);

console.log(valor);

function soma(n1 = VALOR_PADRAO, n2 = VALOR_PADRAO) {
    return n1 + n2;
}

console.log(soma(10));