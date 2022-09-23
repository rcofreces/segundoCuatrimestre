var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Telefono = /** @class */ (function () {
    function Telefono(pEstaPrendido, pBateriaActual) {
        this.estaPrendido = pEstaPrendido;
        this.bateriaActual = pBateriaActual;
    }
    Telefono.prototype.mandarMensaje = function (mensaje) {
        console.log("Se envi\u00F3 el siguiente mensaje: ".concat(mensaje));
    };
    Telefono.prototype.hacerLlamada = function (persona) {
        console.log("Usted est\u00E1 llamando a ".concat(persona));
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido = false) {
            return true;
        }
        else {
            return false;
        }
    };
    return Telefono;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara(pEstaPrendido, pBateriaActual) {
        return _super.call(this, pEstaPrendido, pBateriaActual) || this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        console.log("Usted sac\u00F3 una foto");
    };
    return TelefonoConCamara;
}(Telefono));
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio(pEstaPrendido, pBateriaActual, pFrecuenciaActual) {
        var _this = _super.call(this, pEstaPrendido, pBateriaActual) || this;
        _this.frecuenciaActual = pFrecuenciaActual;
        return _this;
    }
    TelefonoConRadio.prototype.verFrecuenciaActual = function () {
        return this.frecuenciaActual;
    };
    return TelefonoConRadio;
}(Telefono));
var telefono1 = new Telefono(false, 100);
var telefonoConCamara1 = new TelefonoConCamara(true, 67);
var telefonoConRadio1 = new TelefonoConRadio(false, 50, 1567);
telefono1.hacerLlamada("Juan");
telefonoConCamara1.sacarFoto();
console.log(telefonoConRadio1.verFrecuenciaActual());
