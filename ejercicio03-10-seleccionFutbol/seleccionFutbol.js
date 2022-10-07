"use strict";
exports.__esModule = true;
exports.SeleccionFutbol = void 0;
var SeleccionFutbol = /** @class */ (function () {
    function SeleccionFutbol(pPais, pFutbolista, pEntrenador, pMasajista) {
        this.pais = pPais;
        this.listadoFutbolista = pFutbolista;
        this.listadoEntrenador = pEntrenador;
        this.listadoMasajista = pMasajista;
    }
    SeleccionFutbol.prototype.getPais = function () {
        return this.pais;
    };
    SeleccionFutbol.prototype.setPais = function (pais) {
        this.pais = pais;
    };
    SeleccionFutbol.prototype.convocarFutbolista = function (futbolista) {
        this.listadoFutbolista.push(futbolista);
        console.log("El futbolista ".concat(futbolista.getNombre(), " ").concat(futbolista.getApellido(), " fue convocado"));
    };
    SeleccionFutbol.prototype.despedirFutbolista = function (futbolista) {
        var encontrado = false;
        for (var i = 0; i < this.listadoFutbolista.length; i++) {
            if ((futbolista.getNombre() === this.listadoFutbolista[i].getNombre()) && (futbolista.getApellido() === this.listadoFutbolista[i].getApellido())) {
                this.listadoFutbolista.splice(i, 1);
                encontrado = true;
            }
        }
        if (encontrado === true) {
            console.log("El futbolista ".concat(futbolista.getNombre(), " ").concat(futbolista.getApellido(), " fue despedido"));
        }
        else {
            console.log("No se encontr\u00F3 al futbolista ".concat(futbolista.getNombre(), " ").concat(futbolista.getApellido()));
        }
    };
    SeleccionFutbol.prototype.contratarEntrenador = function (entrenador) {
        this.listadoEntrenador.push(entrenador);
        console.log("El entrenador ".concat(entrenador.getNombre(), " ").concat(entrenador.getApellido(), " fue contratado"));
    };
    SeleccionFutbol.prototype.despedirEntrenador = function (entrenador) {
        var encontrado = false;
        for (var i = 0; i < this.listadoEntrenador.length; i++) {
            if ((entrenador.getNombre() === this.listadoEntrenador[i].getNombre()) && (entrenador.getApellido() === this.listadoEntrenador[i].getApellido())) {
                this.listadoEntrenador.splice(i, 1);
                encontrado = true;
            }
        }
        if (encontrado === true) {
            console.log("El entrenador ".concat(entrenador.getNombre(), " ").concat(entrenador.getApellido(), " fue despedido"));
        }
        else {
            console.log("No se encontr\u00F3 al entrenador ".concat(entrenador.getNombre(), " ").concat(entrenador.getApellido()));
        }
    };
    SeleccionFutbol.prototype.contratarMasajista = function (masajista) {
        this.listadoMasajista.push(masajista);
        console.log("El masajista ".concat(masajista.getNombre(), " ").concat(masajista.getApellido(), " fue contratado"));
    };
    SeleccionFutbol.prototype.despedirMasajista = function (masajista) {
        var encontrado = false;
        for (var i = 0; i < this.listadoMasajista.length; i++) {
            if ((masajista.getNombre() === this.listadoMasajista[i].getNombre()) && (masajista.getApellido() === this.listadoMasajista[i].getApellido())) {
                this.listadoMasajista.splice(i, 1);
                encontrado = true;
            }
        }
        if (encontrado === true) {
            console.log("El masajista ".concat(masajista.getNombre(), " ").concat(masajista.getApellido(), " fue despedido"));
        }
        else {
            console.log("No se encontr\u00F3 al masajista ".concat(masajista.getNombre(), " ").concat(masajista.getApellido()));
        }
    };
    return SeleccionFutbol;
}());
exports.SeleccionFutbol = SeleccionFutbol;
