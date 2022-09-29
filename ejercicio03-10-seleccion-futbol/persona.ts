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
