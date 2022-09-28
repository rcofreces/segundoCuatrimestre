export class Persona {
  protected nombre: string;
  protected apellido: string;
  
  constructor(pNombre: string, pApellido: string) {
    this.nombre = pNombre;
    this.apellido = pApellido;
  }

  public getNombre(): string {
    return this.nombre;
  }
  
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public setApellido(apellido: string): void {
    this.apellido = apellido;
  }
}

let persona1: Persona = new Persona("Ricardo", "Gramuglia");
let persona2: Persona = new Persona("Eduardo", "Caballero");

console.log(persona1.getNombre());
console.log(persona2.getApellido());

persona1.setApellido("Guemes");
persona2.setNombre("Julieta");

console.log(persona1.getApellido());
console.log(persona2.getNombre());

