import { SeleccionFutbol } from "./seleccionFutbol";
import { Futbolista } from "./futbolista";
import { Entrenador } from "./entrenador";
import { Masajista } from "./masajista";


let vehiculo1 = new Vehiculo('verde', false);
// vehiculo1.moverse();

let avion1 = new Avion("rojo", false, 4);
// avion1.setColor('rojo');
// avion1.color = 'verde';
console.log(avion1.getColor());

let auto1 = new Automovil('celeste', true);