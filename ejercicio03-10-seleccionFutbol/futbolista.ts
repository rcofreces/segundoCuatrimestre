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
