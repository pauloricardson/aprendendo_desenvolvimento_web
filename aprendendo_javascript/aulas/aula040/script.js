const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const cursos = ['teste' ,'HTML', 'CSS', 'Javascrip', 'PHP', 'React', 'MySQL', 'ReactNative']

// const novoElemento = document.createElement("div")
// novoElemento.setAttribute("id", "c7")
// novoElemento.setAttribute("class", "curso c1")
// novoElemento.innerHTML = "ReactNative"

// caixa1.appendChild(novoElemento)

cursos.map((el, i) => {
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c" + (i + 1));
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = (el)
    caixa1.appendChild(novoElemento)
})