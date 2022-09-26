import * as fs from 'fs';

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

    public setTitulo(nombre: string): void {
        this.titulo = nombre;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(nombre: string): void {
        this.autor = nombre;
    }

    public getEditorial(): string {
        return this.editorial;
    }

    public setEditorial(nombre: string): void {
        this.editorial = nombre;
    }

    public getAnio(): number {
        return this.anio;
    }

    public setAnio(anio: number): void {
        this.anio = anio;
    }
}

class GestorDeLibros {
    private listadoDeLibros: Libro[];

    constructor(pListado:Libro[]) {
        this.listadoDeLibros = pListado;
    }

    public insertarLibro(libro: Libro): void {
        this.listadoDeLibros.push(libro);
        console.log(`El libro "${libro.getTitulo()}", del autor ${libro.getAutor()}, de la editorial ${libro.getEditorial()}, del año ${libro.getAnio()}, fue agregado al listado`);
    }

    public eliminarLibro(nombreLibro: string): void {
        for (let i: number = 0; i < this.listadoDeLibros.length; i++) {
            if (nombreLibro === this.listadoDeLibros[i].getTitulo()) {
                this.listadoDeLibros.splice(i, 1);
                return console.log(`El libro "${nombreLibro}" fue eliminado del listado`);
            }     
        }
        return console.log(`No se encontró el libro "${nombreLibro}" en el listado`);
    }

    public modificarLibro(libroAModificar: string, editorialAModificar: string, anioAModificar: number): void {
        for (let i: number = 0; i < this.listadoDeLibros.length; i++) {
            if (libroAModificar === this.listadoDeLibros[i].getTitulo()) {
                this.listadoDeLibros[i].setEditorial(editorialAModificar);
                this.listadoDeLibros[i].setAnio(anioAModificar);
                return console.log(`Se modificó del libro "${libroAModificar}" la editorial a ${editorialAModificar} y el año a ${anioAModificar}`);
            }     
        }
        return console.log(`No se encontró el libro "${libroAModificar}" en el listado`);
    }

    public consultarLibro(nombreLibro: string): void {
        for (let i: number = 0; i < this.listadoDeLibros.length; i++) {
            if (nombreLibro === this.listadoDeLibros[i].getTitulo()) {
                return console.log(this.listadoDeLibros[i]);
            }
        }
        return console.log(`No se encontró el libro "${nombreLibro}" en el listado`);
    }
}


let libro1 = new Libro("El Principito", "Antoine de Saint-Exupéry", "ABC", 1943);
let libro2 = new Libro("Pinocho", "Carlo Collodi", "Mundo", 1883);
let libro3 = new Libro("Caperucita Roja", "Hermanos Grimm", "Space", 1812);

let libroNuevo = new Libro("Harry Potter", "J. K. Rowling", "Patagonia", 1997);

let arrayLibros: Libro[] = [libro1, libro2, libro3];

let gestorDeLibros1 = new GestorDeLibros(arrayLibros);

gestorDeLibros1.insertarLibro(libroNuevo);
gestorDeLibros1.eliminarLibro("Pinocho");
gestorDeLibros1.eliminarLibro("Star Wars");
gestorDeLibros1.consultarLibro("Caperucita Roja");
gestorDeLibros1.consultarLibro("Red");
console.log(gestorDeLibros1);
gestorDeLibros1.modificarLibro("Pinocho", "Nueva Editorial", 2013);
console.log(gestorDeLibros1);

let texto: string = fs.readFileSync('100 años de soledad.txt', 'utf-8');
console.log(texto);