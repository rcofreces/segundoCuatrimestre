"use strict";
exports.__esModule = true;
exports.ListadoAnimales = void 0;
var ListadoAnimales = /** @class */ (function () {
    function ListadoAnimales(animales) {
        this.animales = animales;
    }
    ListadoAnimales.prototype.buscar = function (animalBuscado) {
        var aux = 0;
        for (var i = 0; i < this.animales.length; i++) {
            if (animalBuscado === this.animales[i]) {
                aux = 1;
            }
        }
        if (aux === 1) {
            return true;
        }
        else {
            return false;
        }
    };
    ListadoAnimales.prototype.agregarAnimal = function (nuevoAnimal) {
        this.animales.push(nuevoAnimal);
    };
    ListadoAnimales.prototype.removerAnimal = function (borrarAnimal) {
        for (var i = 0; i < this.animales.length; i++) {
            if (borrarAnimal === this.animales[i]) {
                this.animales.splice(i, 1);
            }
        }
    };
    return ListadoAnimales;
}());
exports.ListadoAnimales = ListadoAnimales;
