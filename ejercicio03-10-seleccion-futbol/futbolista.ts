import { Persona } from "./persona";

export class Futbolista extends Persona {
  private dorsal: number;
  private equipo: string;
  
  constructor(pNombre: string, pApellido: string, pDorsal: number, pEquipo: string) {
    super(pNombre, pApellido);
    this.dorsal = pDorsal;
    this.equipo = pEquipo;
  }

  public getDorsal(): number {
    return this.dorsal;
  }

  private setDorsal(dorsal: number): number {
    this.dorsal = dorsal;
    return this.dorsal;
  }

  public getEquipo(): string {
    return this.equipo;
  }

  private setEquipo(equipo: string): string {
    this.equipo = equipo;
    return this.equipo;
  }

}