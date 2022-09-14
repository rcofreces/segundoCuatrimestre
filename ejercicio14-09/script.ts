class SistemaEducativo {
    
    private alumno: string;
    private materia: string;
    private profesor: string;
    private nota: number;

    constructor(pAlumno: string, pMateria: string, pProfesor: string, pNota: number) {
        this.alumno = pAlumno;
        this.materia = pMateria;
        this.profesor = pProfesor;
        this.nota = pNota;
    }

    public obtenerAlumno() {
        return this.alumno;
    }
    
    public obtenerMateria() {
        return this.materia;
    
    }
    public obtenerProfesor() {
        return this.profesor;
    }

    public obtenerNota() {
        return this.nota;
    }
    
    resultadoBimestre() {
        if (this.nota > 7) {
            return "aprobado";
        } else {
            return "desaprobado";
        }
    }
    
/*     public matricularAlumno() {
        return SistemaEducativo.push();
    } 
    
    public expulsarAlumno() {
        return SistemaEducativo.pop();
    }

    public contratarProfesor() {
        return SistemaEducativo.push();
    }
    
    public despedirProfesor() {
        return SistemaEducativo.pop();
    } */

}

let alumno1 = new SistemaEducativo("Ricardo Gómez", "Matemáticas", "José Perez", 8);
let alumno2 = new SistemaEducativo("Diego Leun", "Programación", "Ayelén Hauz", 7);
let alumno3 = new SistemaEducativo("María Hernández", "Javascript", "Rodrigo Pepito", 9);
let alumno4 = new SistemaEducativo("Aimé Makus", "Css", "Alejandra Galli", 4);

console.log("==============================================================================================================================================");
console.log(`El alumno ${alumno1.obtenerAlumno()} cursó la materia ${alumno1.obtenerMateria()} con el profesor ${alumno1.obtenerProfesor()} y su bimestre fue '${alumno1.resultadoBimestre()}' con un ${alumno1.obtenerNota()}.`);
console.log(`El alumno ${alumno2.obtenerAlumno()} cursó la materia ${alumno2.obtenerMateria()} con el profesor ${alumno2.obtenerProfesor()} y su bimestre fue '${alumno2.resultadoBimestre()}' con un ${alumno2.obtenerNota()}.`);
console.log(`El alumno ${alumno3.obtenerAlumno()} cursó la materia ${alumno3.obtenerMateria()} con el profesor ${alumno3.obtenerProfesor()} y su bimestre fue '${alumno3.resultadoBimestre()}' con un ${alumno3.obtenerNota()}.`);
console.log(`El alumno ${alumno4.obtenerAlumno()} cursó la materia ${alumno4.obtenerMateria()} con el profesor ${alumno4.obtenerProfesor()} y su bimestre fue '${alumno4.resultadoBimestre()}' con un ${alumno4.obtenerNota()}.`);
console.log("==============================================================================================================================================");