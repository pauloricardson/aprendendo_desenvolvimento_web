let colocacao = 4;

switch (colocacao) {
    case 1:
        console.log("1º lugar");
        break;
    case 2:
        console.log("2º lugar");
        break;
    case 3:
        console.log("3º lugar");
        break;
    case 4: case 5: case 6:
        console.log("Premio de participacao");
        break
    default:
        console.log("Não subiu ao pódio");
        break;
}