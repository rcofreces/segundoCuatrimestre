"use strict";
exports.__esModule = true;
exports.RendicionDeExamen = void 0;
var RendicionDeExamen = /** @class */ (function () {
    function RendicionDeExamen(pExamen, pRespuestas) {
        this.examen = pExamen;
        this.respuestas = pRespuestas;
    }
    RendicionDeExamen.prototype.rendicionDeExamen = function (examen, respuestas) {
        if (examen.getTema() === examen.getTema()) {
            for (var i = 0; i < respuestas.length; i++) {
                respuestas.push(respuestas[i]);
            }
        }
    };
    RendicionDeExamen.prototype.getExamen = function () {
        return this.examen;
    };
    return RendicionDeExamen;
}());
exports.RendicionDeExamen = RendicionDeExamen;
