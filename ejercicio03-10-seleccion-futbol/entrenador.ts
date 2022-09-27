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

}

let entrenador1 = new Entrenador("Pep", "Guardiola", "Español");
let entrenador2 = new Entrenador("Zinedine", "Zidane", "Francés");

let listadoEntrenador: Entrenador[] = [entrenador1, entrenador2];
console.log(listadoEntrenador);

console.log(entrenador1.getNombre());
console.log(entrenador2.getApellido());

entrenador1.setApellido("Bilardo");
entrenador2.setNombre("Raúl");

console.log(entrenador1.getApellido());
console.log(entrenador2.getNombre());

console.log(entrenador1.getNacionalidad());
entrenador2.setNacionalidad("Argentino");
console.log(entrenador2.getNacionalidad());