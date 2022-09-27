import { SeleccionFutbol } from "./seleccionFubtol";

export class Masajista extends SeleccionFutbol {
  private nombre: string;
  private apellido: string;
  private sueldo: number;
  
  constructor(pPais: string, pFutbolista: Futbolista[], pEntrenador: Entrenador[], pMasajista: Masajista[], pNombre: string, pApellido: string, pSueldo: number) {
    super(pPais, pFutbolista, pEntrenador, pMasajista)
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.sueldo = pSueldo;
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

  public getSueldo(): number {
    return this.sueldo;
  }

  private setSueldo(sueldo: number): number {
    this.sueldo = sueldo;
    return this.sueldo;
  }

}