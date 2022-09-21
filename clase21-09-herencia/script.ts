class Televisor {
    private pulgadas: number;
    private marca: string;
    private modelo: string;

    constructor(pPulgadas: number, pMarca: string, pModelo: string) {
        this.pulgadas = pPulgadas;
        this.marca = pMarca;
        this.modelo = pModelo;
    }

    public getPulgadas():number {
        return this.pulgadas;
    }

    public setPulgadas(cantidad:number) {
        this.pulgadas = cantidad;
    }
    
    public getMarca():string {
        return this.marca;
    }

    public setMarca(marca:string) {
        this.marca = marca;
    }

    public getModelo():string {
        return this.modelo;
    }

    public setModelo(modelo:string) {
        this.modelo = modelo;
    }
}

class SmartTV extends Televisor {
    private wifi:boolean;
    private navegarInternet: boolean;

    constructor(pPulgadas: number, pMarca: string, pModelo: string) {
        super(pPulgadas, pMarca, pModelo);
        this.wifi = false;
        this.navegarInternet = true;
    }

    public encederWifi():boolean {
        if(this.wifi = false) {
            return true;
        } else {
            return false;
        }
    }

    public empezarANavegar():boolean {
        if(this.navegarInternet = false) {
            return true;
        } else {
            return false;
        }
    }
}

let televisor1 = new Televisor(49, "Samsung", "UH7000");
let smartTV1 = new SmartTV(70, "Sony", "SYS8670");

console.log(televisor1);
console.log(smartTV1);