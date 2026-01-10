const cursos = ["HTML", "CSS", "JAVASCRIPT"];

let c = cursos.map((el, i) => {
    return "<div>" + el + "<div/>";
})

console.log(c);