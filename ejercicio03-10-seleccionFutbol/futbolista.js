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
        console.log("El futbolista ha jugado un partido");
    };
    return Futbolista;
}(persona_1.Persona));
exports.Futbolista = Futbolista;
