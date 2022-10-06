import { Animal } from "./animal";
import { Mascota } from "./mascota";

export class Gato extends Animal implements Mascota {
    private nombre: string;

    constructor(pPatas: number, nombre: string) {
        super(pPatas);
        this.nombre = nombre;
    }

    public comer(): void {
        console.log(`El gato está comiendo`);
    }

    public caminar(patas: number): void {
        console.log(`El gato está caminando en ${patas} patas`)
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