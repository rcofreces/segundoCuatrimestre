class Alumno {
    
    private alumno: string;

    constructor(pAlumno: string) {
        this.alumno = pAlumno;
    }

    public obtenerAlumno() {
        return this.alumno;
    }

/*     public matricularAlumno() {
        return SistemaEducativo.push();
    }

    public expulsarAlumno() {
        return this.alumno.pop();
    } */

}

class Materia {
    
    private materia: string;

    constructor(pMateria: string) {
        this.materia = pMateria;
    }

    public obtenerMateria() {
        return this.materia;
    }

}

class Profesor {
    
    private profesor: string;

    constructor(pProfesor: string) {
        this.profesor = pProfesor;
    }

    public obtenerProfesor() {
        return this.profesor;
    }

/*     public contratarProfesor() {
        return SistemaEducativo.push();
    }
    
    public despedirProfesor() {
        return SistemaEducativo.pop();
    } */

}

class Nota {
    
    private nota: number;

    constructor(pNota: number) {
        this.nota = pNota;
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

}

class SistemaEducativo {
    
    private alumno: Alumno;
    private materia: Materia;
    private profesor: Profesor;
    private nota: Nota;

    constructor(pAlumno: Alumno, pMateria: Materia, pProfesor: Profesor, pNota: Nota) {
        this.alumno = pAlumno;
        this.materia = pMateria;
        this.profesor = pProfesor;
        this.nota = pNota;
    }

}