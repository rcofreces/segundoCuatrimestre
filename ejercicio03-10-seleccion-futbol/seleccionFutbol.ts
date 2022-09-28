import { Futbolista } from "./futbolista";
import { Entrenador } from "./entrenador";
import { Masajista } from "./masajista";

export class SeleccionFutbol {
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
  
  public getPais(): string {
    return this.pais;
  }
  
  public setPais(pais: string): void {
    this.pais = pais;
  }

  public convocarFutbolista(futbolista: Futbolista): void {
    this.listadoFutbolista.push(futbolista);
    console.log(`El futbolista ${futbolista.getNombre()} ${futbolista.getApellido()} fue convocado`);
  }

  public despedirFutbolista(futbolista: Futbolista): void {
    for (let i: number = 0; i < this.listadoFutbolista.length; i++) {
      if ((futbolista.getNombre() === this.listadoFutbolista[i].getNombre()) && (futbolista.getApellido() === this.listadoFutbolista[i].getApellido())) {
        this.listadoFutbolista.splice(i, 1);
        return console.log(`El futbolista ${futbolista.getNombre()} ${futbolista.getApellido()} fue despedido`);
      }
    }
    return console.log(`No se encontró al futbolista ${futbolista.getNombre()} ${futbolista.getApellido()}`);
  }

  public contratarEntrenador(entrenador: Entrenador): void {
    this.listadoEntrenador.push(entrenador);
    console.log(`El entrenador ${entrenador.getNombre()} ${entrenador.getApellido()} fue contratado`);
  }
  
  public despedirEntrenador(entrenador: Entrenador): void {
    for (let i: number = 0; i < this.listadoEntrenador.length; i++) {
      if ((entrenador.getNombre() === this.listadoEntrenador[i].getNombre()) && (entrenador.getApellido() === this.listadoEntrenador[i].getApellido())) {
        this.listadoEntrenador.splice(i, 1);
        return console.log(`El entrenador ${entrenador.getNombre()} ${entrenador.getApellido()} fue despedido`);
      }
    }
    return console.log(`No se encontró al entrenador ${entrenador.getNombre()} ${entrenador.getApellido()}`);
  }
  
  public contratarMasajista(masajista: Masajista): void {
    this.listadoMasajista.push(masajista);
    console.log(`El masajista ${masajista.getNombre()} ${masajista.getApellido()} fue contratado`);
  }
  
  public despedirMasajista(masajista: Masajista): void {
    for (let i: number = 0; i < this.listadoMasajista.length; i++) {
      if ((masajista.getNombre() === this.listadoMasajista[i].getNombre()) && (masajista.getApellido() === this.listadoMasajista[i].getApellido())) {
        this.listadoMasajista.splice(i, 1);
        return console.log(`El masajista ${masajista.getNombre()} ${masajista.getApellido()} fue despedido`);
      }
    }
    return console.log(`No se encontró al masajista ${masajista.getNombre()} ${masajista.getApellido()}`);
  }
}

let seleccion1: SeleccionFutbol = new SeleccionFutbol("Argentina");