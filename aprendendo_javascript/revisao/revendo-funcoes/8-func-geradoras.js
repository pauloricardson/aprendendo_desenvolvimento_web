// function* perguntas(){
//     const nome = yield 'Qual seu nome?'
//     const esporte = yield 'Qual seu esporte favorito?'
//     return `seu nome é ${nome}, seu esporte favorito é ${esporte}`
// }

// const itc = perguntas();

// console.log(itc.next());            // pergunta o nome
// console.log(itc.next('Paulo'));     // responde o nome
// console.log(itc.next('Natação'));   // responde o esporte

// function* contador(){
//     let i = 0;
//     while (true) {
//         yield i++;
//     }
// }

// const itc = contador();
// for (let i = 0; i < 10; i++) {
//     console.log(itc.next().value);
// }

function* gerarId(prefixo = "ID") {
    let id = 1;
    while (true) {
        // Retorna o prefixo concatenado com o número e incrementa
        yield `${prefixo}-${id++}`;
    }
}

// Instanciamos o gerador para usuários
const idUsuario = gerarId("USER");

console.log(idUsuario.next().value); // "USER-1"
console.log(idUsuario.next().value); // "USER-2"

// Podemos ter outra instância independente para produtos
const idProduto = gerarId("PROD");

console.log(idProduto.next().value); // "PROD-1"
console.log(idUsuario.next().value); // "USER-3" (O contador de usuários continua de onde parou)