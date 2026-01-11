// const oddEven = (value) => {
//     if (value % 2 === 0) return value + " é par";
//     return value + " é impar";
// }

// let result = oddEven(-4);

// console.log(result);

function fizzBuzz(input) {
    if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz'
    if (typeof input !== 'number') return 'Na ta Number';
    if (input % 3 === 0) return 'Fizz';
    if (input % 5 === 0) return 'Buzz';
    return input;
}

let result = fizzBuzz(11);
console.log(result);