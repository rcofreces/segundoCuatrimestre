"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(pNombre, pApellido) {
        this.nombre = pNombre;
        this.apellido = pApellido;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    return Persona;
}());
exports.Persona = Persona;
var persona1 = new Persona("Ricardo", "Gramuglia");
var persona2 = new Persona("Eduardo", "Caballero");
console.log(persona1.getNombre());
console.log(persona2.getApellido());
persona1.setApellido("Guemes");
persona2.setNombre("Julieta");
console.log(persona1.getApellido());
console.log(persona2.getNombre());
