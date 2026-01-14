const caixa1 = document.getElementById('caixa1');
const cursos = [...document.querySelectorAll('.curso')];

caixa1.addEventListener('click', (evt) => {
    const select = evt.target;
    select.classList.add('seletor');
    console.log(evt.target)
})

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        evt.stopPropagation();
    })
})