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
exports.Futbolista = void 0;
var persona_1 = require("./persona");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(pNombre, pApellido, pDorsal, pEquipo) {
        var _this = _super.call(this, pNombre, pApellido) || this;
        _this.dorsal = pDorsal;
        _this.equipo = pEquipo;
        return _this;
    }
    Futbolista.prototype.getDorsal = function () {
        return this.dorsal;
    };
    Futbolista.prototype.setDorsal = function (dorsal) {
        this.dorsal = dorsal;
    };
    Futbolista.prototype.getEquipo = function () {
        return this.equipo;
    };
    Futbolista.prototype.setEquipo = function (equipo) {
        this.equipo = equipo;
    };
    Futbolista.prototype.jugarPartido = function () {
        return console.log("El futbolista ha jugado un partido");
    };
    return Futbolista;
}(persona_1.Persona));
exports.Futbolista = Futbolista;
var futbolista1 = new Futbolista("Diego", "Maradona", 10, "Boca Juniors");
var futbolista2 = new Futbolista("Lionel", "Messi", 30, "Barcelona");
var listadoFutbolista = [futbolista1, futbolista2];
console.log(listadoFutbolista);
console.log(futbolista1.getNombre());
console.log(futbolista2.getApellido());
futbolista1.setApellido("Pelé");
futbolista2.setNombre("Román");
console.log(futbolista1.getApellido());
console.log(futbolista2.getNombre());
console.log(futbolista1.getDorsal());
futbolista2.setDorsal(99);
console.log(futbolista2.getDorsal());
console.log(futbolista1.getEquipo());
futbolista2.setEquipo("San Lorenzo");
console.log(futbolista2.getEquipo());
futbolista1.jugarPartido();
