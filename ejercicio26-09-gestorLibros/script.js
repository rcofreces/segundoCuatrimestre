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
        console.log("El libro \"".concat(libro.getTitulo(), "\", del autor ").concat(libro.getAutor(), ", de la editorial ").concat(libro.getEditorial(), ", del a\u00F1o ").concat(libro.getAnio(), ", fue agregado al listado"));
    };
    GestorDeLibros.prototype.eliminarLibro = function (nombreLibro) {
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (nombreLibro === this.listadoDeLibros[i].getTitulo()) {
                this.listadoDeLibros.splice(i, 1);
                return console.log("El libro \"".concat(nombreLibro, "\" fue eliminado del listado"));
            }
        }
        return console.log("No se encontr\u00F3 el libro \"".concat(nombreLibro, "\" en el listado"));
    };
    GestorDeLibros.prototype.modificarLibro = function (libroAModificar, editorialAModificar, anioAModificar) {
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (libroAModificar === this.listadoDeLibros[i].getTitulo()) {
                this.listadoDeLibros[i].setEditorial(editorialAModificar);
                this.listadoDeLibros[i].setAnio(anioAModificar);
                return console.log("Se modific\u00F3 del libro \"".concat(libroAModificar, "\" la editorial a ").concat(editorialAModificar, " y el a\u00F1o a ").concat(anioAModificar));
            }
        }
        return console.log("No se encontr\u00F3 el libro \"".concat(libroAModificar, "\" en el listado"));
    };
    GestorDeLibros.prototype.consultarLibro = function (nombreLibro) {
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (nombreLibro === this.listadoDeLibros[i].getTitulo()) {
                return console.log(this.listadoDeLibros[i]);
            }
        }
        return console.log("No se encontr\u00F3 el libro \"".concat(nombreLibro, "\" en el listado"));
    };
    return GestorDeLibros;
}());
var libro1 = new Libro("El Principito", "Antoine de Saint-Exupéry", "ABC", 1943);
var libro2 = new Libro("Pinocho", "Carlo Collodi", "Mundo", 1883);
var libro3 = new Libro("Caperucita Roja", "Hermanos Grimm", "Space", 1812);
var libroNuevo = new Libro("Harry Potter", "J. K. Rowling", "Patagonia", 1997);
var arrayLibros = [libro1, libro2, libro3];
var gestorDeLibros1 = new GestorDeLibros(arrayLibros);
/* gestorDeLibros1.insertarLibro(libroNuevo);
gestorDeLibros1.eliminarLibro("Pinocho");
gestorDeLibros1.eliminarLibro("Star Wars");
gestorDeLibros1.consultarLibro("Caperucita Roja");
gestorDeLibros1.consultarLibro("Red");
console.log(gestorDeLibros1); */
gestorDeLibros1.modificarLibro("Pinocho", "Industrial", 2013);
console.log(gestorDeLibros1);
