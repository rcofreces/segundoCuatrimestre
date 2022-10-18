"use strict";
exports.__esModule = true;
var claseLibro_1 = require("./claseLibro");
var claseRevista_1 = require("./claseRevista");
var claseCliente_1 = require("./claseCliente");
var claseLibreria_1 = require("./claseLibreria");
var listAutores = ['Pedro', 'Rosa', 'Juan', 'Araceli'];
var listGeneros = ['Drama', 'Terror', 'Comedia', 'Vaqueros'];
var libro1 = new claseLibro_1.Libro('Campanita', 'Pedro', 50, 200, 'Resumen 1', 'Comedia');
var libro2 = new claseLibro_1.Libro('Iron Man', 'Juan', 150, 300, 'Resumen 2', 'Drama');
var revista1 = new claseRevista_1.Revista('Para Ti', 'Rosa', 20, 20, 2022);
var revista2 = new claseRevista_1.Revista('Oeste', 'Araceli', 15, 12, 2021);
var cliente1 = new claseCliente_1.Cliente('Juan', 'Perez', 10150270, 'Velez', listAutores, listGeneros, 0.1);
var cliente2 = new claseCliente_1.Cliente('Hernan', 'Rodriguez', 25675098, 'Nuñez', listAutores, listGeneros, 0.2);
var cliente3 = new claseCliente_1.Cliente('Maria', 'Gomez', 34643247, 'Caballito', listAutores, listGeneros, 0.3);
var arregloCliente = [cliente1, cliente2, cliente3];
var arregloLibro = [libro1, libro2];
var arregloRevista = [revista1, revista2];
var libreria1 = new claseLibreria_1.Libreria(arregloCliente, arregloLibro, arregloRevista);
var precio1 = libreria1.calcularPrecio(cliente1, libro1);
var precio2 = libreria1.calcularPrecio(cliente2, libro2);
var precio3 = libreria1.calcularPrecio(cliente1, revista1);
var precio4 = libreria1.calcularPrecio(cliente3, revista2);
/* 1 */
console.log(precio1);
console.log(precio2);
console.log(precio3);
console.log(precio4);
console.log("-----------------------------------------");
/* 2 */
cliente1.comprarLibro(libro2);
cliente1.buscarLibro(libro1);
cliente1.buscarLibro(libro2);
console.log("-----------------------------------------");
/* 3 */
cliente1.leGustaLibro(libro2);
cliente2.leGustaLibroExigente(libro1);
