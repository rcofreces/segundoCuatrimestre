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
        console.log("Usted ha recibido un masaje");
    };
    return Masajista;
}(persona_1.Persona));
exports.Masajista = Masajista;
