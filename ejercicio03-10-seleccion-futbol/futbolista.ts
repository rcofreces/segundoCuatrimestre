import { SeleccionFutbol } from "./seleccionFutbol";

export class Futbolista extends SeleccionFutbol {
  private nombre: string;
  private apellido: string;
  private dorsal: number;
  private equipo: string;
  
  constructor(pPais: string, pFutbolista: Futbolista[], pEntrenador: Entrenador[], pMasajista: Masajista[], pNombre: string, pApellido: string, pDorsal: number, pEquipo: string) {
    super(pPais, pFutbolista, pEntrenador, pMasajista)
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.dorsal = pDorsal;
    this.equipo = pEquipo;
  }

  public getNombre(): string {
    return this.nombre;
  }
  
  private setNombre(nombre: string): string {
    this.nombre = nombre;
    return this.nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  private setApellido(apellido: string): string {
    this.apellido = apellido;
    return this.apellido;
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