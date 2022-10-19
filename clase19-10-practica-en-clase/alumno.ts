import { Examen } from "./examen";
import { RendicionDeExamen } from "./rendicionExamen";

export class Alumno {
    private examenesRendidos: RendicionDeExamen[];
    private nombre: string;
    private dni: number;

    constructor(pExamenesRendidos: RendicionDeExamen[], pNombre: string, pDni: number) {
        this.examenesRendidos = pExamenesRendidos;
        this.nombre = pNombre;
        this.dni = pDni;
    }

    public alumno(nombre: string, dni: number): void {
        this.nombre = nombre;
        this.dni = dni;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getDni(): number {
        return this.dni;
    }

    public rendirExamen(examen: Examen, respuestas: number[]): boolean {
        if (examen.getTema() === examen.getTema()) {
            for (let i: number = 0; i < respuestas.length; i++) {
                respuestas.push(respuestas[i]);
                return true;
            }
            } else {
            return false;
        }
    }
}