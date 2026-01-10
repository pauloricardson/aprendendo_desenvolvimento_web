function multiplicar() {
    let a = 2;
    let b = 10;
    let result = b * a;
    return result
}

function somar() {
    let c = multiplicar();
    let d = 10;
    let result = c + d;
    return result;
}

function par_ou_impar() {
    let valor = 2;
    if (valor % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

console.log(par_ou_impar());

function exemploTerminacao() {
return "fim";
// O código abaixo é "código morto" e nunca será executado
console.log("Esta mensagem nunca aparecerá.");
}