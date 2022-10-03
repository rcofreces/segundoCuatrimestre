import { Mamifero } from "./mamifero"
import { Herbivoro } from "./herbivoro"
import { Carnivoro } from "./carnivoro"
import { Omnivoro } from "./ominovoro"

let mamifero1: Mamifero = new Mamifero("vaca", "hembra");
let mamifero2: Mamifero = new Mamifero("leon", "macho");
let mamifero3: Mamifero = new Mamifero("oso", "macho");

// let arrayMamimefos: Mamifero[] = [mamifero1, mamifero2, mamifero3];

/* console.log(mamifero1.getEspecie());
mamifero1.setEspecie("ballena");
console.log(mamifero1.getEspecie());

console.log(mamifero2.getSexo());
mamifero2.setSexo("hembra");
console.log(mamifero1.getSexo());

mamifero3.comer(); */

let herbivoro1: Herbivoro = new Herbivoro("oveja", "hembra", "blanco");
let herbivoro2: Herbivoro = new Herbivoro("caballo", "macho", "negro");

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

let carnivoro1: Carnivoro = new Carnivoro("leon", "macho", 450);
let carnivoro2: Carnivoro = new Carnivoro("leopardo", "hembra", 320);

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

let omnivoro1: Omnivoro = new Omnivoro("oso", "macho", false);
let omnivoro2: Omnivoro = new Omnivoro("gallina", "hembra", false);

// let arrayOmnivoros: Omnivoros = [omnivoro1, omnivoro2];

/* console.log(omnivoro1.getEspecie());
omnivoro1.setEspecie("zorro");
console.log(omnivoro1.getEspecie());

console.log(omnivoro2.getSexo());
omnivoro2.setSexo("macho");
console.log(omnivoro2.getSexo()); */

omnivoro1.esCuadripedo(true);
omnivoro2.esCuadripedo(false);

// omnivoro1.comer();