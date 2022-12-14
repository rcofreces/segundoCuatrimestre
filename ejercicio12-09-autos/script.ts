class Auto {
    
    private estaPrendido: boolean;
    private valorCombustible: number;
    private velocidadActual: number;
    private modelo: string;
    private marca: string;
    private anio: number;

    constructor(paramPrendido:boolean, paramCombustible:number, paramVelocidad:number, paramModelo: string, paramMarca: string, paramAnio: number) {
        this.estaPrendido = paramPrendido;
        this.valorCombustible = paramCombustible;
        this.velocidadActual = paramVelocidad;
        this.modelo = paramModelo;
        this.marca = paramMarca;
        this.anio = paramAnio;
    };

    prenderApagar():void {
        if(this.estaPrendido === true) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }
    };

    obtenerCombustible():number {
        return this.valorCombustible;
    };

    obtenerVelocidad():number {
        return this.velocidadActual;
    };

    acelerar(cantidad: number):number {
        let valor: number = cantidad;
        this.velocidadActual = this.velocidadActual + valor;
        return this.velocidadActual;
    };

    frenar(cantidad: number):number {
        let valor: number = cantidad;
        this.velocidadActual = this.velocidadActual - valor;
        return this.velocidadActual;
    };

}

let primerAuto = new Auto(true, 100, 60, "Toyota", "Hilux", 2018);
let segundoAuto = new Auto(false, 67, 0, "Volkswagen", "Golf", 2021);

console.log(primerAuto.obtenerVelocidad());
console.log(primerAuto.acelerar(40));