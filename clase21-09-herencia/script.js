var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Televisor = /** @class */ (function () {
    function Televisor(pPulgadas, pMarca, pModelo) {
        this.pulgadas = pPulgadas;
        this.marca = pMarca;
        this.modelo = pModelo;
    }
    Televisor.prototype.getPulgadas = function () {
        return this.pulgadas;
    };
    Televisor.prototype.setPulgadas = function (cantidad) {
        this.pulgadas = cantidad;
    };
    Televisor.prototype.getMarca = function () {
        return this.marca;
    };
    Televisor.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Televisor.prototype.getModelo = function () {
        return this.modelo;
    };
    Televisor.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    return Televisor;
}());
var SmartTV = /** @class */ (function (_super) {
    __extends(SmartTV, _super);
    function SmartTV(pPulgadas, pMarca, pModelo) {
        var _this = _super.call(this, pPulgadas, pMarca, pModelo) || this;
        _this.wifi = false;
        _this.navegarInternet = true;
        return _this;
    }
    SmartTV.prototype.encederWifi = function () {
        if (this.wifi = false) {
            return true;
        }
        else {
            return false;
        }
    };
    SmartTV.prototype.empezarANavegar = function () {
        if (this.navegarInternet = false) {
            return true;
        }
        else {
            return false;
        }
    };
    return SmartTV;
}(Televisor));
var televisor1 = new Televisor(49, "Samsung", "UH7000");
var smartTV1 = new SmartTV(70, "Sony", "SYS8670");
console.log(televisor1);
console.log(smartTV1);
