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