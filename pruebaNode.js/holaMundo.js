console.log("Bienvenidos a NODE");

let readlineSync = require('readline-sync');
let mensaje = readlineSync.question("Indique la altura de la persona en centimetros: ");
console.log(mensaje + " cm");