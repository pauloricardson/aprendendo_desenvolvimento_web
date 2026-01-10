"strict mode"

const VALOR_PADRAO = 0

let result = 0;

console.log(result);

function somar(a = VALOR_PADRAO, b = VALOR_PADRAO){
    result = a + b;
}

somar(10, 20);
console.log(result);