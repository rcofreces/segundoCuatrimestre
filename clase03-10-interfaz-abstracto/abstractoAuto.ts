interface Auto {
    acelerar(): void;
    getVelocidadActual(): number;
}

abstract class AutoCiudad implements Auto {
    protected velocidadActual: number;
    private estaPrendido: boolean;

    constructor() {
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }

    abstract acelerar(): void;

    public prender(): void {
        this.estaPrendido = true;
    }

    public apagar(): void {
        this.estaPrendido = false;
    }

    public estadoMotor(): boolean {
        return this.estaPrendido;
    }

    abstract getVelocidadActual(): number;
}

class AutoCiudadChico extends AutoCiudad {

    public acelerar(): void {
        this.velocidadActual += 10;
    }

    public getVelocidadActual(): number {
        return this.velocidadActual;
    }

}