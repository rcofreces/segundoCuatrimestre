import { Alumno } from "./alumno";
import { Examen } from "./examen";

export class RendicionDeExamen {
    private examen: Examen;
    private respuestas: number[];

    constructor(pExamen: Examen, pRespuestas: number[]) {
        this.examen = pExamen;
        this.respuestas = pRespuestas;
    }

    public rendicionDeExamen(examen: Examen, respuestas: number[]): void {
        if (examen.getTema() === examen.getTema()) {
            for (let i: number = 0; i < respuestas.length; i++) {
                respuestas.push(respuestas[i]);
            }
        }
    }

    public getExamen(): Examen {
        return this.examen;
    }

    public estaAprobado(): boolean {
        for (let i: number = 0; i < this.respuestas.length; i++) {
            if (this.respuestas[i] === Alumno.rendirExamen()) {

        }
            return true;
        } else {
            return false;
        }
    }
}