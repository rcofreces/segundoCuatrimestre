"use strict";
exports.__esModule = true;
var mamifero_1 = require("./mamifero");
var herbivoro_1 = require("./herbivoro");
var carnivoro_1 = require("./carnivoro");
var ominovoro_1 = require("./ominovoro");
var mamifero1 = new mamifero_1.Mamifero("vaca", "hembra");
var mamifero2 = new mamifero_1.Mamifero("leon", "macho");
var mamifero3 = new mamifero_1.Mamifero("oso", "macho");
// let arrayMamimefos: Mamifero[] = [mamifero1, mamifero2, mamifero3];
/* console.log(mamifero1.getEspecie());
mamifero1.setEspecie("ballena");
console.log(mamifero1.getEspecie());

console.log(mamifero2.getSexo());
mamifero2.setSexo("hembra");
console.log(mamifero1.getSexo());

mamifero3.comer(); */
var herbivoro1 = new herbivoro_1.Herbivoro("oveja", "hembra", "blanco");
var herbivoro2 = new herbivoro_1.Herbivoro("caballo", "macho", "negro");
// let arrayHerbivoros: Herbivoro = [herbivoro1, herbivoro2];
/* console.log(herbivoro1.getEspecie());
herbivoro1.setEspecie("yegua");
console.log(herbivoro1.getEspecie());

console.log(herbivoro2.getSexo());
herbivoro2.setSexo("hembra");
console.log(herbivoro2.getSexo());

console.log(herbivoro1.getColor());
herbivoro1.setColor("Beige");
console.log(herbivoro1.getColor());

herbivoro2.comer(); */
var carnivoro1 = new carnivoro_1.Carnivoro("leon", "macho", 450);
var carnivoro2 = new carnivoro_1.Carnivoro("leopardo", "hembra", 320);
// let arrayCarnivoros: Carnivoro = [carnivoro1, carnivoro2];
/* console.log(carnivoro1.getEspecie());
carnivoro1.setEspecie("tigre");
console.log(carnivoro1.getEspecie());

console.log(carnivoro2.getSexo());
carnivoro2.setSexo("macho");
console.log(carnivoro2.getSexo());

console.log(carnivoro1.getPeso());
carnivoro1.setPeso(1200);
console.log(carnivoro1.getPeso());

carnivoro2.comer(); */
var omnivoro1 = new ominovoro_1.Omnivoro("oso", "macho", true);
var omnivoro2 = new ominovoro_1.Omnivoro("gallina", "hembra", false);
// let arrayOmnivoros: Omnivoros = [omnivoro1, omnivoro2];
/* console.log(omnivoro1.getEspecie());
omnivoro1.setEspecie("zorro");
console.log(omnivoro1.getEspecie());

console.log(omnivoro2.getSexo());
omnivoro2.setSexo("macho");
console.log(omnivoro2.getSexo()); */
omnivoro1.esCuadripedo();
omnivoro2.esCuadripedo();
// omnivoro1.comer();
