class Decodificador {

    private modelo: string;
    private marca: string;

    constructor(paramModelo: string, paramMarca: string) {
        this.modelo = paramModelo;
        this.marca = paramMarca;
    }

    public getModelo() {
        return this.modelo;
    }

    public getMarca() {
        return this.marca;
    }

}

class Televisor {
    
    private estaPrendido: boolean;
    private volumenActual: number;
    private decodificador: Decodificador;

    constructor(paramPrendido:boolean, paramVolumen:number, paramDecodificador: Decodificador) {
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.decodificador = paramDecodificador;
    };

    prenderApagar():void {
        if(this.estaPrendido === true) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }
    };

    getVolumen():number {
        return this.volumenActual;
    };

    setSubirVolumen():void {
        this.volumenActual = this.volumenActual++;
    };

    setBajarVolumen():void {
        this.volumenActual = this.volumenActual--;
    };

    getDecodificador() {
        return this.decodificador;
    }

}

let deco1 = new Decodificador("marca", "modelo");
let tv1 = new Televisor(true, 26, deco1);

console.log(tv1.getDecodificador());