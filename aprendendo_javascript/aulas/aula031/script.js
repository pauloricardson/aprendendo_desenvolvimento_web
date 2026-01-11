let colecaoHTML = document.getElementsByTagName("div");

colecaoHTML = [...colecaoHTML];

console.log(colecaoHTML);

colecaoHTML.map((e) => {
    e.innerHTML = "CURSO";
})



