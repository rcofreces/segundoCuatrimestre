export abstract class Animal {
    private patas: number;

    constructor(pPatas: number) {
        this.patas = pPatas;
    }

    public getPatas(): number {
        return this.patas;
    }

    public setPatas(patas: number): void {
        this.patas = patas;
    }

    abstract comer(): void;
    
    abstract caminar(patas: number): void;
}