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
  
  protected setNombre(nombre: string): string {
    this.nombre = nombre;
    return this.nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  protected setApellido(apellido: string): string {
    this.apellido = apellido;
    return this.apellido;
  }
}