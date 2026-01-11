const divTodos = [...document.getElementsByTagName("div")];
const cursosC1 = [...document.getElementsByClassName("c1")];
const cursosC2 = [...document.getElementsByClassName("c2")];

const query_cursoTodos = [...document.querySelectorAll(".curso")];
const query_divEspecial = document.querySelectorAll("#c1");

const query_divTodas = [...document.querySelectorAll("div > p")];

console.log(query_divTodas);

// console.log(divTodos);
// console.log(cursosC1);
// console.log(cursosC2);
// console.log(cursoEspecial);

// cursosC2.map((el) => {
//     el.classList.add("destaque");
// });