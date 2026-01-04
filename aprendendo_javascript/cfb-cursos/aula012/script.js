
const objs1 = document.getElementsByTagName("div");
const objs2 = [...document.getElementsByTagName("div")];

objs2.forEach(element => {
    element.innerHTML="Curso";
});

console.log(objs1);
console.log(objs2);
// operador spread
// const jogador1 = {nome: "Paulo", energia: 100, vidas: 3, magia: 150};
// const jogador2 = {nome: "Ricardson", energia: 100, vidas: 5, velociadade: 80};
// const jogador3 = {...jogador1, ...jogador2};

// let n1 = [10, 20, 30];
// let n2 = [11, 22, 33, 44, 55];
// let n3 = [...n1, ...n2];

// console.log("N1: " + n1);
// console.log("N2: " + n2);
// console.log("N3: " + n3);
// console.log("Tipo: " + typeof(n3));

// console.log(jogador3);

// const soma = (v1, v2, v3) => {
//     return v1 + v2 + v3;
// }

// let valores = [1, 5, 4];

// console.log(soma(...valores));