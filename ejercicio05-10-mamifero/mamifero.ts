export class Mamifero {
    protected especie: string;
    protected sexo: string;

    constructor(especie: string, sexo: string) {
        this.especie = especie;
        this.sexo = sexo;
    }

    public getEspecie(): string {
        return this.especie;
    }

    public setEspecie(especie: string): void {
        this.especie = especie;
    }

    public getSexo(): string {
        return this.sexo;
    }

    public setSexo(sexo: string): void {
        this.sexo = sexo;
    }

    public comer(): void {
        return console.log(`El animal está comiendo`);
    }
}