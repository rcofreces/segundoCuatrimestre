import { Futbolista } from "./futbolista";
import { Entrenador } from "./entrenador";
import { Masajista } from "./masajista";

export class SeleccionFutbol{
  private pais: string;
  private listadoFutbolista: Futbolista[];
  private listadoEntrenador: Entrenador[];
  private listadoMasajista: Masajista[];
  
  constructor(pPais: string, pFutbolista: Futbolista[], pEntrenador: Entrenador[], pMasajista: Masajista[]) {
    this.pais = pPais;
    this.listadoFutbolista = pFutbolista;
    this.listadoEntrenador = pEntrenador;
    this.listadoMasajista = pMasajista;
  }
  
  public getPais(): string {
    return this.pais;
  }
  
  private setPais(pais: string): string {
    this.pais = pais;
    return this.pais;
  }

  private convocarFutbolista(futbolista: Futbolista): void {
    this.listadoFutbolista.push(futbolista);
    console.log(`El futbolista ${futbolista.getNombre()} ${futbolista.getApellido()} fue convocado`);
  }

  private despedirFutbolista(futbolista: Futbolista): void {
    for (let i: number = 0; i < this.listadoFutbolista.length; i++) {
      if ((futbolista.getNombre() === this.listadoFutbolista[i].getNombre()) && (futbolista.getApellido() === this.listadoFutbolista[i].getApellido())) {
        this.listadoFutbolista.splice(i, 1);
        return console.log(`El futbolista ${futbolista.getNombre()} ${futbolista.getApellido()} fue despedido`);
      }
    }
    return console.log(`No se encontró al futbolista ${futbolista.getNombre()} ${futbolista.getApellido()}`);
  }

  private contratarEntrenador(entrenador: Entrenador): void {
    this.listadoEntrenador.push(entrenador);
    console.log(`El entrenador ${entrenador.getNombre()} ${entrenador.getApellido()} fue contratado`);
  }
  
  private despedirEntrenador(entrenador: Entrenador): void {
    for (let i: number = 0; i < this.listadoEntrenador.length; i++) {
      if ((entrenador.getNombre() === this.listadoEntrenador[i].getNombre()) && (entrenador.getApellido() === this.listadoEntrenador[i].getApellido())) {
        this.listadoEntrenador.splice(i, 1);
        return console.log(`El entrenador ${entrenador.getNombre()} ${entrenador.getApellido()} fue despedido`);
      }
    }
    return console.log(`No se encontró al entrenador ${entrenador.getNombre()} ${entrenador.getApellido()}`);
  }
  
  private contratarMasajista(masajista: Masajista): void {
    this.listadoMasajista.push(masajista);
    console.log(`El masajista ${masajista.getNombre()} ${masajista.getApellido()} fue contratado`);
  }
  
  private despedirMasajista(masajista: Masajista): void {
    for (let i: number = 0; i < this.listadoMasajista.length; i++) {
      if ((masajista.getNombre() === this.listadoMasajista[i].getNombre()) && (masajista.getApellido() === this.listadoMasajista[i].getApellido())) {
        this.listadoMasajista.splice(i, 1);
        return console.log(`El masajista ${masajista.getNombre()} ${masajista.getApellido()} fue despedido`);
      }
    }
    return console.log(`No se encontró al masajista ${masajista.getNombre()} ${masajista.getApellido()}`);
  }
}

let seleccion1 = new SeleccionFutbol("Argentina");