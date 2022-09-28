import { Persona } from "./persona";

export class Futbolista extends Persona {
  protected dorsal: number;
  protected equipo: string;
  
  constructor(pNombre: string, pApellido: string, pDorsal: number, pEquipo: string) {
    super(pNombre, pApellido);
    this.dorsal = pDorsal;
    this.equipo = pEquipo;
  }

  public getDorsal(): number {
    return this.dorsal;
  }

  public setDorsal(dorsal: number): void {
    this.dorsal = dorsal;
  }

  public getEquipo(): string {
    return this.equipo;
  }

  public setEquipo(equipo: string): void {
    this.equipo = equipo;
  }

  public jugarPartido(): void {
    return console.log(`El futbolista ha jugado un partido`);
  }
}

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