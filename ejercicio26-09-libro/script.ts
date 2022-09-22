class Libro {
    private titulo: string;
    private autor: string;
    private editorial: string;
    private anio: number;

    constructor(pTitulo: string, pAutor: string, pEditorial: string, pAnio: number) {
        this.titulo = pTitulo;
        this.autor = pAutor;
        this.editorial = pEditorial;
        this.anio = pAnio;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(nombre: string) {
        this.titulo = nombre;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(nombre: string) {
        this.autor = nombre;
    }

    public getEditorial(): string {
        return this.editorial;
    }

    public setEditorial(nombre: string) {
        this.editorial = nombre;
    }

    public getAnio(): number {
        return this.anio;
    }

    public setAnio(anio: number) {
        this.anio = anio;
    }
}

class GestorDeLibros {
    private listadoDeLibros: Libro[];

    constructor(pListado:Libro[]) {
        this.listadoDeLibros = pListado;
    }

    public insertarLibro(libro: Libro) {
        this.listadoDeLibros.push(libro);
        console.log(`El libro ${libro.getTitulo()}, del autor ${libro.getAutor()}, de la editorial ${libro.getEditorial()}, del año ${libro.getAnio()}, fue agregado`);
    }

    public eliminarLibro() {

    }

    public modificarLibro() {

    }

/*     public consultarLibro(libro: Libro) {
        return this.listadoDeLibros;
    } */
}

let libro1 = new Libro("Hojalata", "Pepe", "Transfer", 1990);
let libro2 = new Libro("Caperucita", "Pampita", "Transfer", 2006);
let libro3 = new Libro("Señor Tuesday", "Richard", "Transfer", 1970);

let libroNuevo = new Libro("Nuevo Libro", "Jesús", "Biblia", 1500);

let arrayLibros: Libro[] = [libro1, libro2, libro3];

let gestorDeLibros1 = new GestorDeLibros(arrayLibros);

console.log(gestorDeLibros1.insertarLibro(libroNuevo));