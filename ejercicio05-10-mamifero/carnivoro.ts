import { Mamifero } from "./mamifero";

export class Carnivoro extends Mamifero {
    protected peso: number;

    constructor(especie: string, sexo: string, peso: number) {
        super(especie, sexo);
        this.peso = peso;
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPeso(peso: number): void {
        this.peso = peso;
    }

    public comer(): void {
        return console.log(`El animal come carne`);
    }
}