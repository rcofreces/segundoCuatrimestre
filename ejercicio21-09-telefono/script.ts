class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;

    constructor(pEstaPrendido: boolean, pBateriaActual: number){
        this.estaPrendido = pEstaPrendido;
        this.bateriaActual = pBateriaActual;
    }

    public mandarMensaje(mensaje: string): void {
        let mensaje1: string = mensaje; 
        console.log(`Se envió el siguiente mensaje: ${mensaje1}`);
    }

    public hacerLlamada(persona:string): void {
        let quien: string = persona;
        console.log(`Usted está llamando a ${quien}`);
    }

    public prenderApagar(): boolean {
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