"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var List = /** @class */ (function () {
    function List() {
        this.products = [];
    }
    List.prototype.additems = function (product) {
        this.products.push(product);
    };
    List.prototype.removeProduct = function (productId) {
        this.products = this.products.filter(function (product) { return product.Id !== productId; });
    };
    List.prototype.getTotal = function () {
        return this.products.reduce(function (total, product) { return total + product.Price; }, 0);
    };
    List.prototype.getProducts = function () {
        return this.products;
    };
    return List;
}());
exports.List = List;
