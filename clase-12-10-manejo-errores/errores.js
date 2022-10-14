"use strict";
exports.__esModule = true;
var errorPersonalizado_1 = require("./errorPersonalizado");
function dispararError(paramMensaje) {
    throw new errorPersonalizado_1.ErrorPersonalizado(paramMensaje);
}
function sumarValores(valores) {
    if (valores.length === 0) {
        throw new Error('Este error muestra que el arreglo llegó vacio');
    }
    var sumaTotal = 0;
    for (var i = 0; i < valores.length; i++) {
        sumaTotal = sumaTotal + valores[i];
    }
    if (sumaTotal > 20) {
        throw new errorPersonalizado_1.ErrorPersonalizado('Este error muestra que la suma supera 20');
    }
    if (sumaTotal < 10) {
        dispararError('Este error muestra que la suma es menor a 10');
    }
    return sumaTotal;
}
//Comienzo del Main
var valores = [2, 3, 1];
var resultado;
try {
    resultado = sumarValores(valores);
    console.log(resultado);
}
catch (error) {
    console.log(error);
}
