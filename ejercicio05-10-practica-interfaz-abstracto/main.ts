import { Animal } from "./animal";
import { Araña } from "./araña";
import { Gato } from "./gato";
import { Pez } from "./pez";
import { ListadoAnimales } from "./listadoAnimales";

let gatito1 = new Gato (5, "Michi1");
let gatito2 = new Gato (4, "Michi2");
let puercoAraña1 = new Araña (8);
let puercoAraña2 = new Araña (6);
let pezLagarto1 = new Pez (0, "Nemo");
let pezLagarto2 = new Pez (0, "Dory");

let arregloDeAnimales: Animal[] = [gatito1, gatito2, puercoAraña1, puercoAraña2, pezLagarto1];

let nuestrosAnimales: ListadoAnimales = new ListadoAnimales(arregloDeAnimales);

let resultado: boolean = nuestrosAnimales.buscar(pezLagarto2);
console.log("Primera busqueda", resultado);

nuestrosAnimales.agregarAnimal(pezLagarto2);
resultado = nuestrosAnimales.buscar(pezLagarto2);
console.log("Segunda busqueda", resultado);

let consulta: number = arregloDeAnimales[3].getPatas();
console.log("Consulta devuelve", consulta);