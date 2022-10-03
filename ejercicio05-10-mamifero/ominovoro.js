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
exports.Omnivoro = void 0;
var mamifero_1 = require("./mamifero");
var Omnivoro = /** @class */ (function (_super) {
    __extends(Omnivoro, _super);
    function Omnivoro(especie, sexo, cuadripedo) {
        var _this = _super.call(this, especie, sexo) || this;
        _this.cuadripedo = cuadripedo;
        return _this;
    }
    Omnivoro.prototype.esCuadripedo = function (parametro) {
        if (parametro = true) {
            console.log("El animal es cuadripedo");
        }
        else {
            console.log("El animal no es cuadripedo");
        }
    };
    Omnivoro.prototype.comer = function () {
        return console.log("El animal come plantas y carne");
    };
    return Omnivoro;
}(mamifero_1.Mamifero));
exports.Omnivoro = Omnivoro;
