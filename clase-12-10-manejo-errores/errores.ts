import {ErrorPersonalizado} from './errorPersonalizado';

function dispararError(paramMensaje:string) {
    throw new ErrorPersonalizado(paramMensaje);
}

function sumarValores(valores: number[]): number {
   
    if (valores.length === 0) {
        throw new Error('Este error muestra que el arreglo llegó vacio');
    }
   
    let sumaTotal = 0;

    for (let i: number = 0; i < valores.length; i++) {
        sumaTotal = sumaTotal + valores[i];
    }

    if (sumaTotal > 20) {
       throw new ErrorPersonalizado('Este error muestra que la suma supera 20');
    }

    if (sumaTotal < 10) {
        dispararError('Este error muestra que la suma es menor a 10');
     }

    return sumaTotal;
}

//Comienzo del Main
let valores: number[] = [2, 3, 1];
let resultado: number;


try {
    resultado = sumarValores(valores);
    console.log(resultado);
} catch(error) {
    console.log(error);
}




