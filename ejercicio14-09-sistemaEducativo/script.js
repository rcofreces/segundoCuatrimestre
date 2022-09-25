var Alumno = /** @class */ (function () {
    function Alumno(pNombre, pApellido, pNotaMatematica, pNotaIngles, pNotaProgramacion) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.notaMatematica = pNotaMatematica;
        this.notaIngles = pNotaIngles;
        this.notaProgramacion = pNotaProgramacion;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Alumno.prototype.getApellido = function () {
        return this.apellido;
    };
    Alumno.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Alumno.prototype.getNotaMatematica = function () {
        return this.notaMatematica;
    };
    Alumno.prototype.getNotaIngles = function () {
        return this.notaIngles;
    };
    Alumno.prototype.getNotaProgramacion = function () {
        return this.notaProgramacion;
    };
    Alumno.prototype.setNotaMatematica = function (nota) {
        this.notaMatematica = nota;
    };
    Alumno.prototype.setNotaIngles = function (nota) {
        this.notaIngles = nota;
    };
    Alumno.prototype.setNotaProgramacion = function (nota) {
        this.notaProgramacion = nota;
    };
    Alumno.prototype.getCalificacionMatematica = function () {
        if (this.notaMatematica > 7) {
            return "Aprobado";
        }
        else {
            return "Desaprobado";
        }
    };
    Alumno.prototype.getCalificacionIngles = function () {
        if (this.notaIngles > 7) {
            return "Aprobado";
        }
        else {
            return "Desaprobado";
        }
    };
    Alumno.prototype.getCalificacionProgramacion = function () {
        if (this.notaProgramacion > 7) {
            return "Aprobado";
        }
        else {
            return "Desaprobado";
        }
    };
    return Alumno;
}());
var Profesor = /** @class */ (function () {
    function Profesor(pNombre, pApellido, pListadoAlumnos) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.listadoAlumnos = pListadoAlumnos;
    }
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    Profesor.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Profesor.prototype.getApellido = function () {
        return this.apellido;
    };
    Profesor.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Profesor.prototype.getAlumnos = function () {
        return this.listadoAlumnos;
    };
    return Profesor;
}());
var SistemaEducativo = /** @class */ (function () {
    function SistemaEducativo(pNombre, pListadoAlumnos, pListadoProfesores) {
        this.nombreEscuela = pNombre;
        this.listadoAlumnos = pListadoAlumnos;
        this.listadoProfesores = pListadoProfesores;
    }
    SistemaEducativo.prototype.getNombreEscuela = function () {
        return this.nombreEscuela;
    };
    SistemaEducativo.prototype.setNombreEscuela = function (nombre) {
        this.nombreEscuela = nombre;
    };
    SistemaEducativo.prototype.contratarProfesor = function (profesor) {
        this.listadoProfesores.push(profesor);
        console.log("Profesor ".concat(profesor.getNombre(), " ").concat(profesor.getApellido(), " contratado"));
    };
    SistemaEducativo.prototype.despedirProfesor = function (profesor) {
        for (var i = 0; i < this.listadoProfesores.length; i++) {
            if (profesor.getApellido() === this.listadoProfesores[i].getApellido()) {
                this.listadoProfesores.splice(i, 1);
                console.log("Profesor ".concat(profesor.getNombre(), " ").concat(profesor.getApellido(), " despedido"));
            }
            else {
                console.log("No se encontr\u00F3 al profesor ".concat(profesor.getNombre(), " ").concat(profesor.getApellido()));
            }
            i++;
        }
    };
    SistemaEducativo.prototype.matricularAlumno = function (alumno) {
        this.listadoAlumnos.push(alumno);
        console.log("Alumno ".concat(alumno.getNombre(), " ").concat(alumno.getApellido(), " matriculado"));
    };
    SistemaEducativo.prototype.despedirAlumno = function (alumno) {
        for (var i = 0; i < this.listadoAlumnos.length; i++) {
            if (alumno.getApellido() === this.listadoAlumnos[i].getApellido()) {
                this.listadoAlumnos.splice(i, 1);
                console.log("Alumno ".concat(alumno.getNombre(), " ").concat(alumno.getApellido(), " despedido"));
            }
            else {
                console.log("No se encontr\u00F3 al alumno ".concat(alumno.getNombre(), " ").concat(alumno.getApellido()));
            }
            i++;
        }
    };
    return SistemaEducativo;
}());
var alumno1 = new Alumno("Ricardo", "Gómez", 10, 6, 7);
var alumno2 = new Alumno("María", "Galli", 6, 7, 8);
var alumno3 = new Alumno("Eduardo", "Chavez", 8, 8, 8);
var alumno4 = new Alumno("Julieta", "Rodríguez", 10, 9, 7);
var arrayAlumnos = [alumno1, alumno2, alumno3, alumno4];
var docenteM = new Profesor("Daniel", "Claus", arrayAlumnos);
var docenteI = new Profesor("Paola", "Garcia", arrayAlumnos);
var docenteP = new Profesor("Julian", "Peralta", arrayAlumnos);
var arrayProfesores = [docenteM, docenteI, docenteP];
var escuelaPrimaria = new SistemaEducativo("Escuela 13", arrayAlumnos, arrayProfesores);
var escuelaSecundaria = new SistemaEducativo("Escuela 15", arrayAlumnos, arrayProfesores);
console.log(escuelaPrimaria.despedirAlumno(alumno2));
console.log(escuelaPrimaria.despedirAlumno(alumno4));
console.log(escuelaPrimaria.despedirAlumno(alumno3));
console.log(escuelaPrimaria.despedirAlumno(alumno1));
/*    public despedirProfesor(profesor: Profesor) {
        for (let i: number = 0; i < this.listadoProfesores.length; i++) {
            if(profesor.getApellido() === this.listadoProfesores[i].getApellido()) {
                this.listadoProfesores.splice(i, 1);
                console.log(`Profesor ${profesor} despedido`);
            } else {
                console.log(`No se encontró al profesor ${profesor}`);
            }
        }
    }

    public matricularAlumno(alumno: Alumno) {
        this.listadoAlumnos.push(alumno);
    }

    public despedirAlumno(alumno: Alumno) {
        for (let i: number = 0; i < this.listadoAlumnos.length; i++) {
            if(alumno.getApellido() === this.listadoAlumnos[i].getApellido()) {
                this.listadoAlumnos.splice(i, 1);
                console.log(`Alumno ${alumno} despedido`);
            } else {
                console.log(`No se encontró al alumno ${alumno}`);
            }
        }
    }
} */
