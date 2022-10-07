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
exports.Pez = void 0;
var animal_1 = require("./animal");
var Pez = /** @class */ (function (_super) {
    __extends(Pez, _super);
    function Pez(pPatas, nombre) {
        var _this = _super.call(this, pPatas) || this;
        _this.nombre = nombre;
        return _this;
    }
    Pez.prototype.comer = function () {
        console.log("El gato est\u00E1 comiendo");
    };
    Pez.prototype.caminar = function (patas) {
        this.nadar();
    };
    Pez.prototype.nadar = function () {
        console.log("El pez est\u00E1 nadando");
    };
    Pez.prototype.jugar = function (nombre) {
        console.log("El gato ".concat(nombre, " est\u00E1 jugando"));
    };
    Pez.prototype.getNombre = function () {
        return this.nombre;
    };
    Pez.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return Pez;
}(animal_1.Animal));
exports.Pez = Pez;
