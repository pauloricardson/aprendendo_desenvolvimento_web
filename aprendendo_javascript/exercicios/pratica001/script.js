const caixa1 = document.getElementById('caixa1');
const caixa2 = document.getElementById('caixa2');

const btn = document.getElementById('btn_copiar');
const cursos = document.querySelectorAll('.caixa1, .curso');

cursos.forEach((el) => {
    el.addEventListener('click', (evt) => {
        const select = evt.target;

        if (caixa2.contains(select)){
            caixa1.appendChild(select);
        }

        select.classList.toggle('selecionado');
    })
})

btn_copiar.addEventListener('click', (evt) => {
    const cursosSelecionados = document.querySelectorAll('.selecionado');

    cursosSelecionados.forEach((el) => {
        caixa2.appendChild(el)
    })
})

const cursosVoltar = document.querySelectorAll('.caixa2, .curso');


/*
cursosVoltar.forEach((el) => {
   el.addEventListener('click', (evt) => {
        const remover = evt.target;
        caixa1.appendChild(remover);
   })
})
*/