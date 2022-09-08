let readlineSync = require('readline-sync');

let base = readlineSync.questionInt("Indique la base del rectangulo: ");
let altura = readlineSync.questionInt("Indique la altura del rectangulo: ");
let area = base * altura;

console.log("El area del rectángulo es: " + area);