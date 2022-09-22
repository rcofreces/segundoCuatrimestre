class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;

    constructor(pEstaPrendido: boolean, pBateriaActual: number){
        this.estaPrendido = pEstaPrendido;
        this.bateriaActual = pBateriaActual;
    }

    public mandarMensaje(mensaje: string) {
        console.log(`Se envió el siguiente mensaje: ${mensaje}`);
    }

    public hacerLlamada(persona:string) {
        console.log(`Usted está llamando a ${persona}`);
    }

    public prenderApagar():boolean {
        if (this.estaPrendido = false) {
            return true;
        } else {
            return false;
        }
    }
}

class TelefonoConCamara extends Telefono {
    constructor(pEstaPrendido: boolean, pBateriaActual: number) {
        super(pEstaPrendido, pBateriaActual);
    }

    public sacarFoto() {
        console.log(`Usted sacó una foto`);
    }
}

class TelefonoConRadio extends Telefono {
    private frecuenciaActual: number;

    constructor(pEstaPrendido: boolean, pBateriaActual: number, pFrecuenciaActual: number) {
        super(pEstaPrendido, pBateriaActual);
        this.frecuenciaActual = pFrecuenciaActual;
    }

    public verFrecuenciaActual(): number {
        return this.frecuenciaActual;
    }
}

let telefono1: Telefono = new Telefono(false, 100);
let telefonoConCamara1: TelefonoConCamara = new TelefonoConCamara(true, 67);
let telefonoConRadio1: TelefonoConRadio = new TelefonoConRadio(false, 50, 1567);

console.log(telefono1.hacerLlamada("Juan"));
console.log(telefonoConCamara1.sacarFoto());
console.log(telefonoConRadio1.verFrecuenciaActual());