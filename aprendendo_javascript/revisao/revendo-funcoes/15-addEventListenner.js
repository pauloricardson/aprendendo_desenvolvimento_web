const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((el) => {
    el.addEventListener('click', (evt) => {

        const selec = evt.target;
        selec.classList.add('destaque');

    })
})