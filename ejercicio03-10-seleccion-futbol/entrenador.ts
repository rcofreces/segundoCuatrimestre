import { SeleccionFutbol } from "./seleccionFutbol";

export class Entrenador extends SeleccionFutbol {
  private nombre: string;
  private apellido: string;
  private nacionalidad: string;

  constructor(pPais: string, pFutbolista: Futbolista[], pEntrenador: Entrenador[], pMasajista: Masajista[], pNombre: string, pApellido: string, pNacionalidad: string) {
    super(pPais, pFutbolista, pEntrenador, pMasajista)
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.nacionalidad = pNacionalidad;
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

  public getNacionalidad(): string {
    return this.nacionalidad;
  }

  private setNacionalidad(nacionalidad: string): string {
    this.nacionalidad = nacionalidad;
    return this.nombre;
  }

}