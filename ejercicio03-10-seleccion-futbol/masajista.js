"use strict";
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
exports.__esModule = true;
exports.Masajista = void 0;
var persona_1 = require("./persona");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(pNombre, pApellido, pSueldo) {
        var _this = _super.call(this, pNombre, pApellido) || this;
        _this.sueldo = pSueldo;
        return _this;
    }
    Masajista.prototype.getSueldo = function () {
        return this.sueldo;
    };
    Masajista.prototype.setSueldo = function (sueldo) {
        this.sueldo = sueldo;
    };
    Masajista.prototype.darMasaje = function () {
        return console.log("Usted ha recibido un masaje");
    };
    return Masajista;
}(persona_1.Persona));
exports.Masajista = Masajista;
var masajista1 = new Masajista("María", "Alvarez", 3000);
var masajista2 = new Masajista("Nicolás", "Gómez", 2500);
var listadoMasajista = [masajista1, masajista2];
console.log(listadoMasajista);
console.log(masajista1.getNombre());
console.log(masajista2.getApellido());
masajista1.setApellido("Tito");
masajista2.setNombre("Patricio");
console.log(masajista1.getApellido());
console.log(masajista2.getNombre());
console.log(masajista1.getSueldo());
masajista2.setSueldo(10000);
console.log(masajista2.getSueldo());
masajista2.darMasaje();
