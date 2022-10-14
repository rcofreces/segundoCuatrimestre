export class ErrorPersonalizado extends Error {

    constructor(mensaje: string) {
        super(mensaje);
        this.name = "ErrorPersonalizado";
    }
}