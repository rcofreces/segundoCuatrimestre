var Libro = /** @class */ (function () {
    function Libro(pTitulo, pAutor, pEditorial, pAnio) {
        this.titulo = pTitulo;
        this.autor = pAutor;
        this.editorial = pEditorial;
        this.anio = pAnio;
    }
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setTitulo = function (nombre) {
        this.titulo = nombre;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (nombre) {
        this.autor = nombre;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.setEditorial = function (nombre) {
        this.editorial = nombre;
    };
    Libro.prototype.getAnio = function () {
        return this.anio;
    };
    Libro.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    return Libro;
}());
var GestorDeLibros = /** @class */ (function () {
    function GestorDeLibros(pListado) {
        this.listadoDeLibros = pListado;
    }
    GestorDeLibros.prototype.insertarLibro = function (libro) {
        this.listadoDeLibros.push(libro);
        console.log("El libro ".concat(libro.getTitulo(), ", del autor ").concat(libro.getAutor(), ", de la editorial ").concat(libro.getEditorial(), ", del a\u00F1o ").concat(libro.getAnio(), ", fue agregado"));
    };
    GestorDeLibros.prototype.eliminarLibro = function () {
    };
    GestorDeLibros.prototype.modificarLibro = function () {
    };
    return GestorDeLibros;
}());
var libro1 = new Libro("Hojalata", "Pepe", "Transfer", 1990);
var libro2 = new Libro("Caperucita", "Pampita", "Transfer", 2006);
var libro3 = new Libro("Señor Tuesday", "Richard", "Transfer", 1970);
var libroNuevo = new Libro("Nuevo Libro", "Jesús", "Biblia", 1500);
var arrayLibros = [libro1, libro2, libro3];
var GestorDeLibros1 = new GestorDeLibros(arrayLibros);
console.log(GestorDeLibros1.insertarLibro(libroNuevo));
