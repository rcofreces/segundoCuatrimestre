"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(pNombre, pApellido, pDni, pDireccion, pListAutorFav, pListGenFav, pDescuento) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.dni = pDni;
        this.direccion = pDireccion;
        this.listAutorFav = pListAutorFav;
        this.listGenFav = pListGenFav;
        this.listComprasLibro = [];
        this.listComprasRevista = [];
        this.descuento = pDescuento;
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getApellido = function () {
        return this.apellido;
    };
    Cliente.prototype.getDNI = function () {
        return this.dni;
    };
    Cliente.prototype.getDireccion = function () {
        return this.direccion;
    };
    Cliente.prototype.getListaAutoresFavoritos = function () {
        return this.listAutorFav;
    };
    Cliente.prototype.getListaGeneroFavoritos = function () {
        return this.listGenFav;
    };
    Cliente.prototype.getListaComprasLibro = function () {
        return this.listComprasLibro;
    };
    Cliente.prototype.getListaComprasRevista = function () {
        return this.listComprasRevista;
    };
    Cliente.prototype.getDescuento = function () {
        return this.descuento;
    };
    Cliente.prototype.comprarLibro = function (libro) {
        this.listComprasLibro.push(libro);
    };
    Cliente.prototype.comprarRevista = function (revista) {
        this.listComprasRevista.push(revista);
    };
    Cliente.prototype.buscarLibro = function (articulo) {
        var encontrado = false;
        for (var i = 0; i < this.listComprasLibro.length; i++) {
            if (articulo.getTitulo() === this.listComprasLibro[i].getTitulo()) {
                encontrado = true;
            }
        }
        if (encontrado === true) {
            console.log("El libro ".concat(articulo.getTitulo(), " ya fue comprado"));
        }
        else {
            console.log("El libro ".concat(articulo.getTitulo(), " no fue comprado"));
        }
    };
    Cliente.prototype.buscarRevista = function (articulo) {
        var encontrado = false;
        for (var i = 0; i < this.listComprasRevista.length; i++) {
            if (articulo.getTitulo() === this.listComprasRevista[i].getTitulo()) {
                encontrado = true;
            }
        }
        if (encontrado === true) {
            console.log("El autor ".concat(articulo.getTitulo(), " ya fue comprada"));
        }
        else {
            console.log("La revista ".concat(articulo.getTitulo(), " no fue comprada"));
        }
    };
    Cliente.prototype.leGustaLibro = function (libro) {
        var encontrado = false;
        for (var i = 0; i < this.listAutorFav.length; i++) {
            if (libro.getAutor() === this.listAutorFav[i]) {
                encontrado = true;
            }
        }
        if (encontrado === true) {
            console.log("El autor ".concat(libro.getAutor(), " se encuentra entre sus autores favoritos"));
        }
        else {
            console.log("El autor ".concat(libro.getAutor(), " no se encuentra entre sus autores favoritos"));
        }
    };
    Cliente.prototype.leGustaLibroExigente = function (libro) {
        var encontradoAutor = false;
        var encontradoGenero = false;
        for (var i = 0; i < this.listAutorFav.length; i++) {
            if (libro.getAutor() === this.listAutorFav[i]) {
                encontradoAutor = true;
            }
            for (var i_1 = 0; i_1 < this.listGenFav.length; i_1++) {
                if (libro.getGenero() === this.listGenFav[i_1]) {
                    encontradoGenero = true;
                }
            }
        }
        if (encontradoAutor === true && encontradoGenero === true) {
            console.log("El autor ".concat(libro.getAutor(), " y el genero \"").concat(libro.getGenero(), "\" se encuentra entre sus favoritos"));
        }
        else {
            console.log("El autor ".concat(libro.getAutor(), " y el genero \"").concat(libro.getGenero(), "\" no se encuentra entre sus favoritos"));
        }
    };
    return Cliente;
}());
exports.Cliente = Cliente;
