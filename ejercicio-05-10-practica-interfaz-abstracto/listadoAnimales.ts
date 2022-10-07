import { Animal } from "./animal";

export class ListadoAnimales {
    private animales: Animal[];

    constructor(animales: Animal[]) {
        this.animales = animales;
    }

    public buscar(animalBuscado: Animal): boolean {
        let aux: number = 0;
        for (let i: number = 0; i < this.animales.length; i++) {
            if (animalBuscado === this.animales[i]) {
                aux = 1;
            }
        }
        if (aux === 1) {
            return true;
        } else {
            return false;
        }
    }

    public agregarAnimal(nuevoAnimal: Animal): void {
        this.animales.push(nuevoAnimal);
    }

    public removerAnimal(borrarAnimal: Animal): void  {
        for (let i: number = 0; i < this.animales.length; i++) {
            if (borrarAnimal === this.animales[i]) {
                this.animales.splice(i, 1);
            }
        }
    }
}