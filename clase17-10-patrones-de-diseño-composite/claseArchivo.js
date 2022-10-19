"use strict";
exports.__esModule = true;
exports.Archivo = void 0;
var Archivo = /** @class */ (function () {
    function Archivo(pName) {
        this.name = pName;
    }
    Archivo.prototype.getName = function () {
        return this.name;
    };
    Archivo.prototype.setName = function (pName) {
        this.name = pName;
    };
    Archivo.prototype.buscar = function (keyword) {
        console.log("Buscando la palabra clave " + keyword + " en el archivo " + this.name + ".");
    };
    return Archivo;
}());
exports.Archivo = Archivo;
