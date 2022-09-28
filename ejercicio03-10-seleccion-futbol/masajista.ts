import { Persona } from "./persona";

export class Masajista extends Persona {
  protected sueldo: number;
  
  constructor(pNombre: string, pApellido: string, pSueldo: number) {
    super(pNombre, pApellido);
    this.sueldo = pSueldo;
  }

  public getSueldo(): number {
    return this.sueldo;
  }

  public setSueldo(sueldo: number): void {
    this.sueldo = sueldo;
  }

  public darMasaje(): void {
    return console.log(`Usted ha recibido un masaje`);
  }

}

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