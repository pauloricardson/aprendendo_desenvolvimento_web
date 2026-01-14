const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector("#btn-transferir");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target;

        if (caixa2.contains(curso)) {
            caixa1.appendChild(curso);
        }

        curso.classList.toggle("seletor");
    })
})

btn.addEventListener("click", () => {
    const cursosSelecionados = [...document.querySelectorAll(".seletor")];
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el);
    })
})