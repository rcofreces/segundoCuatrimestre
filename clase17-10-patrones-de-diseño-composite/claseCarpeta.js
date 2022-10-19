"use strict";
exports.__esModule = true;
exports.Carpeta = void 0;
var Carpeta = /** @class */ (function () {
    function Carpeta(pName, pCompomnentes) {
        this.componentes = pCompomnentes;
        this.name = pName;
    }
    Carpeta.prototype.getName = function () {
        return this.name;
    };
    Carpeta.prototype.setName = function (pName) {
        this.name = pName;
    };
    /* Método Recursivo */
    Carpeta.prototype.buscar = function (keyword) {
        console.log("Buscando recursivamente la palabra clave " + keyword + " en la carpeta " + this.name + ".");
        for (var i = 0; i < this.componentes.length; i++) {
            console.log("Longitud: ", this.componentes.length, "i: ", this.componentes[i]);
            this.componentes[i].buscar(keyword);
        }
    };
    Carpeta.prototype.agregar = function (c) {
        this.componentes.push(c);
    };
    return Carpeta;
}());
exports.Carpeta = Carpeta;
