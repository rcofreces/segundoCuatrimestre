var Decodificador = /** @class */ (function () {
    function Decodificador(paramModelo, paramMarca) {
        this.modelo = paramModelo;
        this.marca = paramMarca;
    }
    Decodificador.prototype.getModelo = function () {
        return this.modelo;
    };
    Decodificador.prototype.getMarca = function () {
        return this.marca;
    };
    return Decodificador;
}());
var Televisor = /** @class */ (function () {
    function Televisor(paramPrendido, paramVolumen, paramDecodificador) {
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.decodificador = paramDecodificador;
    }
    ;
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    ;
    Televisor.prototype.getVolumen = function () {
        return this.volumenActual;
    };
    ;
    Televisor.prototype.setSubirVolumen = function () {
        this.volumenActual = this.volumenActual++;
    };
    ;
    Televisor.prototype.setBajarVolumen = function () {
        this.volumenActual = this.volumenActual--;
    };
    ;
    Televisor.prototype.getDecodificador = function () {
        return this.decodificador;
    };
    return Televisor;
}());
var deco1 = new Decodificador("marca", "modelo");
var tv1 = new Televisor(true, 26, deco1);
console.log(tv1.getDecodificador());
