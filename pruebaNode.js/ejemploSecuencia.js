let readlineSync = require('readline-sync');

let primerNumero = readlineSync.questionInt("Indique el primer numero a sumar: ");
let segundoNumero = readlineSync.questionInt("Indique el segundo numero a sumar: ");
let resultado = primerNumero + segundoNumero;

console.log("El resultado de la suma es: " + resultado);