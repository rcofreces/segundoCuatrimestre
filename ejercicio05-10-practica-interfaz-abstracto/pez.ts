import { Animal } from "./animal";
import { Mascota } from "./mascota";

export class Pez extends Animal implements Mascota {
    private nombre: string;

    constructor(pPatas: number, nombre: string) {
        super(pPatas);
        this.nombre = nombre;
    }

    public comer() {
        console.log(`El gato está comiendo`);
    }

    public caminar(patas: number): void {
        this.nadar();
    }

    public nadar(): void {
        console.log(`El pez está nadando`)
    }

    public jugar(nombre: string): void {
        console.log(`El gato ${nombre} está jugando`);
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
}