import { Mamifero } from "./mamifero";

export class Herbivoro extends Mamifero {
    private color: string;

    constructor(especie: string, sexo: string, color: string) {
        super(especie, sexo);
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public comer(): void {
        console.log(`El animal come plantas`);
    }
}