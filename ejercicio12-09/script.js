var Auto = /** @class */ (function () {
    function Auto(paramPrendido, paramCombustible, paramVelocidad, paramModelo, paramMarca, paramAnio) {
        this.estaPrendido = paramPrendido;
        this.valorCombustible = paramCombustible;
        this.velocidadActual = paramVelocidad;
        this.modelo = paramModelo;
        this.marca = paramMarca;
        this.anio = paramAnio;
    }
    ;
    Auto.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    ;
    Auto.prototype.obtenerCombustible = function () {
        return this.valorCombustible;
    };
    ;
    Auto.prototype.obtenerVelocidad = function () {
        return this.velocidadActual;
    };
    ;
    Auto.prototype.acelerar = function (cantidad) {
        var valor = cantidad;
        this.velocidadActual = this.velocidadActual + valor;
        return this.velocidadActual;
    };
    ;
    Auto.prototype.frenar = function (cantidad) {
        var valor = cantidad;
        this.velocidadActual = this.velocidadActual - valor;
        return this.velocidadActual;
    };
    ;
    return Auto;
}());
var primerAuto = new Auto(true, 100, 60, "Toyota", "Hilux", 2018);
var segundoAuto = new Auto(false, 67, 0, "Volkswagen", "Golf", 2021);
console.log(primerAuto.modelo);
console.log(primerAuto.acelerar(40));
