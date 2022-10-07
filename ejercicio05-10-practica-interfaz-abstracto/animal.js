"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(pPatas) {
        this.patas = pPatas;
    }
    Animal.prototype.getPatas = function () {
        return this.patas;
    };
    Animal.prototype.setPatas = function (patas) {
        this.patas = patas;
    };
    return Animal;
}());
exports.Animal = Animal;
