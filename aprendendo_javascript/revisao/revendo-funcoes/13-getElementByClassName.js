const cursosTodos = [...document.getElementsByClassName('curso')];

const cursoC1 = [...document.getElementsByClassName('C1')];
const cursoC2 = [...document.getElementsByClassName('C2')];

console.log(cursoC1)
console.log(cursoC2)

cursoC2.map((el) => {
    el.classList.add('destaque');
})