"use strict";
exports.__esModule = true;
exports.Mamifero = void 0;
var Mamifero = /** @class */ (function () {
    function Mamifero(especie, sexo) {
        this.especie = especie;
        this.sexo = sexo;
    }
    Mamifero.prototype.getEspecie = function () {
        return this.especie;
    };
    Mamifero.prototype.setEspecie = function (especie) {
        this.especie = especie;
    };
    Mamifero.prototype.getSexo = function () {
        return this.sexo;
    };
    Mamifero.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Mamifero.prototype.comer = function () {
        return console.log("El animal est\u00E1 comiendo");
    };
    return Mamifero;
}());
exports.Mamifero = Mamifero;
