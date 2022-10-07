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

  public setNacionalidad(nacionalidad: string): void {
    this.nacionalidad = nacionalidad;
  }

  public realizarEntrenamiento(): void {
    console.log(`El entrenador ha realizado un entrenamiento`); 
  }

}
