import { Persona } from "./persona";

export class Masajista extends Persona {
  private sueldo: number;
  
  constructor(pNombre: string, pApellido: string, pSueldo: number) {
    super(pNombre, pApellido);
    this.sueldo = pSueldo;
  }

  private getSueldo(): number {
    return this.sueldo;
  }

  private setSueldo(sueldo: number): number {
    this.sueldo = sueldo;
    return this.sueldo;
  }

  public darMasaje(): void {
    return console.log(`Usted ha recibido un masaje`);
  }

}