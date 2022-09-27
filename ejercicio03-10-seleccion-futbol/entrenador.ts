import { Persona } from "./persona";

export class Entrenador extends Persona {
  private nacionalidad: string;

  constructor(pNombre: string, pApellido: string, pNacionalidad: string) {
    super(pNombre, pApellido);
    this.nacionalidad = pNacionalidad;
  }

  public getNacionalidad(): string {
    return this.nacionalidad;
  }

  private setNacionalidad(nacionalidad: string): string {
    this.nacionalidad = nacionalidad;
    return this.nombre;
  }

}