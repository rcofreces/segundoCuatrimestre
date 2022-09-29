import { Persona } from "./persona";
import { Futbolista } from "./futbolista";
import { Entrenador } from "./entrenador";
import { Masajista } from "./masajista";
import { SeleccionFutbol } from "./seleccionFutbol";

/* Persona */
let persona1: Persona = new Persona("Ricardo", "Gramuglia");
let persona2: Persona = new Persona("Eduardo", "Caballero");

console.log(persona1.getNombre());
console.log(persona2.getApellido());

persona1.setApellido("Guemes");
persona2.setNombre("Julieta");

console.log(persona1.getApellido());
console.log(persona2.getNombre());

/* Futbolista */
let futbolista1: Futbolista = new Futbolista("Diego", "Maradona", 10, "Boca Juniors");
let futbolista2: Futbolista = new Futbolista("Lionel", "Messi", 30, "Barcelona");

let listadoFutbolista: Futbolista[] = [futbolista1, futbolista2];
console.log(listadoFutbolista);

console.log(futbolista1.getNombre());
console.log(futbolista2.getApellido());

futbolista1.setApellido("Pelé");
futbolista2.setNombre("Román");

console.log(futbolista1.getApellido());
console.log(futbolista2.getNombre());

console.log(futbolista1.getDorsal());
futbolista2.setDorsal(99);
console.log(futbolista2.getDorsal());

console.log(futbolista1.getEquipo());
futbolista2.setEquipo("San Lorenzo");
console.log(futbolista2.getEquipo());

futbolista1.jugarPartido();

 /* Entrenador */
 let entrenador1: Entrenador = new Entrenador("Pep", "Guardiola", "Español");
let entrenador2: Entrenador = new Entrenador("Zinedine", "Zidane", "Francés");

let listadoEntrenador: Entrenador[] = [entrenador1, entrenador2];
console.log(listadoEntrenador);

console.log(entrenador1.getNombre());
console.log(entrenador2.getApellido());

entrenador1.setApellido("Bilardo");
entrenador2.setNombre("Raúl");

console.log(entrenador1.getApellido());
console.log(entrenador2.getNombre());

console.log(entrenador1.getNacionalidad());
entrenador2.setNacionalidad("Argentino");
console.log(entrenador2.getNacionalidad());

entrenador1.realizarEntrenamiento();

/* Masajista */
let masajista1: Masajista = new Masajista("María", "Alvarez", 3000);
let masajista2: Masajista = new Masajista("Nicolás", "Gómez", 2500);

let listadoMasajista: Masajista[] = [masajista1, masajista2];
console.log(listadoMasajista);

console.log(masajista1.getNombre());
console.log(masajista2.getApellido());

masajista1.setApellido("Tito");
masajista2.setNombre("Patricio");

console.log(masajista1.getApellido());
console.log(masajista2.getNombre());

console.log(masajista1.getSueldo());
masajista2.setSueldo(10000);
console.log(masajista2.getSueldo());

masajista2.darMasaje();

/* Selección de Fútbol */
let seleccion1: SeleccionFutbol = new SeleccionFutbol("Argentina", listadoFutbolista, listadoEntrenador, listadoMasajista);
let seleccion2: SeleccionFutbol = new SeleccionFutbol("Brasil", listadoFutbolista, listadoEntrenador, listadoMasajista);

console.log(seleccion1.getPais());
console.log(seleccion2.setPais("España"));
console.log(seleccion1.getPais());

seleccion1.convocarFutbolista(futbolista1);
console.log(futbolista1);
seleccion2.despedirFutbolista(futbolista2);
console.log(futbolista2);

seleccion1.contratarEntrenador(entrenador1);
console.log(entrenador1);
seleccion2.despedirEntrenador(entrenador2);
console.log(entrenador2);

seleccion1.contratarMasajista(masajista1);
console.log(masajista1);
seleccion2.despedirMasajista(masajista2);
console.log(masajista2);