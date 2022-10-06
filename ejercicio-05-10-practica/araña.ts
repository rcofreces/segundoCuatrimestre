import { Animal } from "./animal";

class Arania extends Animal {

    constructor(pPatas: number) {
        super(pPatas);
    }

    public comer(): void {
        console.log(`La araña está comiendo`);
    }

    public caminar(patas: number): void {
        console.log(`La araña esta caminando en ${patas} patas`)
    }
}