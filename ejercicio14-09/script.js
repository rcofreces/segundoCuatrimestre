var SistemaEducativo = /** @class */ (function () {
    function SistemaEducativo(pAlumno, pMateria, pProfesor, pNota) {
        this.alumno = pAlumno;
        this.materia = pMateria;
        this.profesor = pProfesor;
        this.nota = pNota;
    }
    SistemaEducativo.prototype.obtenerAlumno = function () {
        return this.alumno;
    };
    SistemaEducativo.prototype.obtenerMateria = function () {
        return this.materia;
    };
    SistemaEducativo.prototype.obtenerProfesor = function () {
        return this.profesor;
    };
    SistemaEducativo.prototype.obtenerNota = function () {
        return this.nota;
    };
    SistemaEducativo.prototype.resultadoBimestre = function () {
        if (this.nota > 7) {
            return "aprobado";
        }
        else {
            return "desaprobado";
        }
    };
    return SistemaEducativo;
}());
var alumno1 = new SistemaEducativo("Ricardo Gómez", "Matemáticas", "José Perez", 8);
var alumno2 = new SistemaEducativo("Diego Leun", "Programación", "Ayelén Hauz", 7);
var alumno3 = new SistemaEducativo("María Hernández", "Javascript", "Rodrigo Pepito", 9);
var alumno4 = new SistemaEducativo("Aimé Makus", "Css", "Alejandra Galli", 4);
console.log("==============================================================================================================================================");
console.log("El alumno ".concat(alumno1.obtenerAlumno(), " curs\u00F3 la materia ").concat(alumno1.obtenerMateria(), " con el profesor ").concat(alumno1.obtenerProfesor(), " y su bimestre fue '").concat(alumno1.resultadoBimestre(), "' con un ").concat(alumno1.obtenerNota(), "."));
console.log("El alumno ".concat(alumno2.obtenerAlumno(), " curs\u00F3 la materia ").concat(alumno2.obtenerMateria(), " con el profesor ").concat(alumno2.obtenerProfesor(), " y su bimestre fue '").concat(alumno2.resultadoBimestre(), "' con un ").concat(alumno2.obtenerNota(), "."));
console.log("El alumno ".concat(alumno3.obtenerAlumno(), " curs\u00F3 la materia ").concat(alumno3.obtenerMateria(), " con el profesor ").concat(alumno3.obtenerProfesor(), " y su bimestre fue '").concat(alumno3.resultadoBimestre(), "' con un ").concat(alumno3.obtenerNota(), "."));
console.log("El alumno ".concat(alumno4.obtenerAlumno(), " curs\u00F3 la materia ").concat(alumno4.obtenerMateria(), " con el profesor ").concat(alumno4.obtenerProfesor(), " y su bimestre fue '").concat(alumno4.resultadoBimestre(), "' con un ").concat(alumno4.obtenerNota(), "."));
console.log("==============================================================================================================================================");
