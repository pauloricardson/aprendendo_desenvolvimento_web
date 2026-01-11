function numMaior(a, b) {
    if (a > b) {
        return "Número maior: " + a;
    }
    return "Número maior: " + b;
}

// console.log(numMaior(10, 5))

// resolução com arrow function

let arrowMaior = (a, b) => {
    if (a > b) {
        return "Número maior: " + a;
    }
    return "Número maior: " + b;
}

//console.log(arrowMaior(45, 20));

// resolução do professor

function maxNumber(number1, number2) {
    if (number1 > number2) return number1;
    return number2;
}

let result = maxNumber(3, 2);

console.log(result);

// outra forma

function maxNumber2 (a, b){
    return a > b ? a : b;
}