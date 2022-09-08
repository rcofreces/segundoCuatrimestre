let readlineSync = require('readline-sync');

let primeraVuelta = readlineSync.questionInt("Ingrese el tiempo de la primera vuelta en segundos: ");
let segundaVuelta = readlineSync.questionInt("Ingrese el tiempo de la segunda vuelta en segundos: ");
let terceraVuelta = readlineSync.questionInt("Ingrese el tiempo de la tercera vuelta en segundos: ");
let cuartaVuelta = readlineSync.questionInt("Ingrese el tiempo de la cuarta vuelta en segundos: ");
let tiempoTotal = primeraVuelta + segundaVuelta + terceraVuelta + cuartaVuelta;
let promedio = tiempoTotal / 4;

console.log("------------------------------------------------------");
console.log("El tiempo total de carrera en segundos es de: " + tiempoTotal);
console.log("------------------------------------------------------");
console.log("El promedio de vuelta en segundos es: " + promedio);
console.log("------------------------------------------------------");