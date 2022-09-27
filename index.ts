class SeleccionFutbol{
    protected pais: string;
    protected listadoFutbolista: Futbolista[];
    protected listadoEntrenador: Entrenador[];
    protected listadoMasajista: Masajista[];
    
    constructor(pPais: string, pFutbolista: Futbolista[], pEntrenador: Entrenador[], pMasajista: Masajista[]) {
      this.pais = pPais;
      this.listadoFutbolista = pFutbolista;
      this.listadoEntrenador = pEntrenador;
      this.listadoMasajista = pMasajista;
    }
    
    private getPais(): string {
      return this.pais;
    }
    
    private setPais(pais: string): string {
      this.pais = pais;
      return this.pais;
    }
  
    protected convocarFutbolista(futbolista: Futbolista): void {
      this.listadoFutbolista.push(futbolista);
      console.log(`El futbolista ${futbolista.getNombre()} ${futbolista.getApellido()} fue convocado`);
    }
  
    protected despedirFutbolista(futbolista: Futbolista): void {
      for (let i: number = 0; i < this.listadoFutbolista.length; i++) {
        if ((futbolista.getNombre() === this.listadoFutbolista[i].getNombre()) && (futbolista.getApellido() === this.listadoFutbolista[i].getApellido())) {
          this.listadoFutbolista.splice(i, 1);
          return console.log(`El futbolista ${futbolista.getNombre()} ${futbolista.getApellido()} fue despedido`);
        }
      }
      return console.log(`No se encontró al futbolista ${futbolista.getNombre()} ${futbolista.getApellido()}`);
    }
  
    protected contratarEntrenador(entrenador: Entrenador): void {
      this.listadoEntrenador.push(entrenador);
      console.log(`El entrenador ${entrenador.getNombre()} ${entrenador.getApellido()} fue contratado`);
    }
    
    protected despedirEntrenador(entrenador: Entrenador): void {
      for (let i: number = 0; i < this.listadoEntrenador.length; i++) {
        if ((entrenador.getNombre() === this.listadoEntrenador[i].getNombre()) && (entrenador.getApellido() === this.listadoEntrenador[i].getApellido())) {
          this.listadoEntrenador.splice(i, 1);
          return console.log(`El entrenador ${entrenador.getNombre()} ${entrenador.getApellido()} fue despedido`);
        }
      }
      return console.log(`No se encontró al entrenador ${entrenador.getNombre()} ${entrenador.getApellido()}`);
    }
    
    protected contratarMasajista(masajista: Masajista): void {
      this.listadoMasajista.push(masajista);
      console.log(`El masajista ${masajista.getNombre()} ${masajista.getApellido()} fue contratado`);
    }
    
    protected despedirMasajista(masajista: Masajista): void {
      for (let i: number = 0; i < this.listadoMasajista.length; i++) {
        if ((masajista.getNombre() === this.listadoMasajista[i].getNombre()) && (masajista.getApellido() === this.listadoMasajista[i].getApellido())) {
          this.listadoMasajista.splice(i, 1);
          return console.log(`El masajista ${masajista.getNombre()} ${masajista.getApellido()} fue despedido`);
        }
      }
      return console.log(`No se encontró al masajista ${masajista.getNombre()} ${masajista.getApellido()}`);
    }
  }

class Futbolista extends SeleccionFutbol {
  private nombre: string;
  private apellido: string;
  private dorsal: number;
  private equipo: string;
  
  constructor(pPais: string, pFutbolista: Futbolista[], pEntrenador: Entrenador[], pMasajista: Masajista[], pNombre: string, pApellido: string, pDorsal: number, pEquipo: string) {
    super(pPais, pFutbolista, pEntrenador, pMasajista)
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.dorsal = pDorsal;
    this.equipo = pEquipo;
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

  public getDorsal(): number {
    return this.dorsal;
  }

  private setDorsal(dorsal: number): number {
    this.dorsal = dorsal;
    return this.dorsal;
  }

  public getEquipo(): string {
    return this.equipo;
  }

  private setEquipo(equipo: string): string {
    this.equipo = equipo;
    return this.equipo;
  }

}

class Entrenador extends SeleccionFutbol {
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

class Masajista extends SeleccionFutbol {
  private nombre: string;
  private apellido: string;
  private sueldo: number;
  protected listadoFutbolista: Futbolista[];
  protected listadoEntrenador: Entrenador[];
  
  constructor(pPais: string, pFutbolista: Futbolista[], pEntrenador: Entrenador[], pMasajista: Masajista[], pNombre: string, pApellido: string, pSueldo: number) {
    super(pPais, pFutbolista, pEntrenador, pMasajista);
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