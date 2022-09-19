class Alumno {
    private nombre: string;
    private apellido: string;
    private notaMatematica: number;
    private notaIngles: number;
    private notaProgramacion: number;

    constructor(pNombre: string, pApellido: string, pNotaMatematica: number, pNotaIngles: number, pNotaProgramacion: number) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.notaMatematica = pNotaMatematica;
        this.notaIngles = pNotaIngles;
        this.notaProgramacion = pNotaProgramacion;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string) {
        this.apellido = apellido;
    }

    public getNotaMatematica(): number {
        return this.notaMatematica;
    }

    public getNotaIngles(): number {
        return this.notaIngles;
    }

    public getNotaProgramacion(): number {
        return this.notaProgramacion;
    }

    public setNotaMatematica(nota: number) {
        this.notaMatematica = nota;
    }

    public setNotaIngles(nota: number) {
        this.notaIngles = nota;
    }

    public setNotaProgramacion(nota) {
        this.notaProgramacion = nota;
    }

    public getCalificacionMatematica(): string {
        if (this.notaMatematica > 7) {
            return "Aprobado";
        } else {
            return "Desaprobado";
        }
    }

    public getCalificacionIngles(): string {
        if (this.notaIngles > 7) {
            return "Aprobado";
        } else {
            return "Desaprobado";
        }
    }

    public getCalificacionProgramacion(): string {
        if (this.notaProgramacion > 7) {
            return "Aprobado";
        } else {
            return "Desaprobado";
        }
    }
    
}
class Profesor {
    private nombre: string;
    private apellido: string;
    private listadoAlumnos: Alumno[];

    constructor(pNombre: string, pApellido: string, pListadoAlumnos: Alumno[]) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.listadoAlumnos = pListadoAlumnos;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string) {
        this.apellido = apellido;
    }

    public getAlumnos() {
        return this.listadoAlumnos;
    }

}
class SistemaEducativo {
    private nombreEscuela: string;
    private listadoAlumnos: Alumno[];
    private listadoProfesores: Profesor[];

    constructor(pNombre: string, pListadoAlumnos: Alumno[], pListadoProfesores: Profesor[]) {
        this.nombreEscuela = pNombre;
        this.listadoAlumnos = pListadoAlumnos;
        this.listadoProfesores = pListadoProfesores;
    }

    public getNombreEscuela(): string {
        return this.nombreEscuela;
    }

    public setNombreEscuela(nombre: string) {
        this.nombreEscuela = nombre;
    }

    public contratarProfesor(profesor: Profesor) {
        this.listadoProfesores.push(profesor);
        console.log(`Profesor ${profesor.getNombre()} ${profesor.getApellido()} contratado`);
    }

    public despedirProfesor(profesor: Profesor) {
        for (let i: number = 0; i < this.listadoProfesores.length; i++) {
            if (profesor.getApellido() === this.listadoProfesores[i].getApellido()) {
                this.listadoProfesores.splice(i, 1);
                console.log(`Profesor ${profesor.getNombre()} ${profesor.getApellido()} despedido`);
            } else {
                console.log(`No se encontró al profesor ${profesor.getNombre()} ${profesor.getApellido()}`);
            }
            i++;
        }
    }

    public matricularAlumno(alumno: Alumno) {
        this.listadoAlumnos.push(alumno);
        console.log(`Alumno ${alumno.getNombre()} ${alumno.getApellido()} matriculado`);
    }
/* ME FALTA CORREGIR ESTA FUNCIÓN */
/*     public despedirAlumno(alumno: Alumno) {
        for (let i: number = 0; i < this.listadoAlumnos.length; i++) {
            if (alumno.getApellido() === this.listadoAlumnos[i].getApellido()) {
                this.listadoAlumnos.splice(i, 1);
                console.log(`Alumno ${alumno.getNombre()} ${alumno.getApellido()} despedido`);
            } else {
                console.log(`No se encontró al alumno ${alumno.getNombre()} ${alumno.getApellido()}`);
            }
            i++;
        }
    } */
}

let alumno1 = new Alumno("Ricardo", "Gómez", 10, 6, 7);
let alumno2 = new Alumno("María", "Galli", 6, 7, 8);
let alumno3 = new Alumno("Eduardo", "Chavez", 8, 8, 8);
let alumno4 = new Alumno("Julieta", "Rodríguez", 10, 9, 7);

let arrayAlumnos: Alumno[] = [alumno1, alumno2, alumno3, alumno4];

let docenteM = new Profesor("Daniel", "Claus", arrayAlumnos);
let docenteI = new Profesor("Paola", "Garcia", arrayAlumnos);
let docenteP = new Profesor("Julian", "Peralta", arrayAlumnos);

let arrayProfesores: Profesor[] = [docenteM, docenteI, docenteP];

let escuelaPrimaria = new SistemaEducativo("Escuela 13", arrayAlumnos, arrayProfesores);
let escuelaSecundaria = new SistemaEducativo("Escuela 15", arrayAlumnos, arrayProfesores);

console.log(docenteM);