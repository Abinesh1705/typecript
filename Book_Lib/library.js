"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.library = void 0;
var library = /** @class */ (function () {
    function library() {
        this.books = [];
    }
    library.prototype.addBook = function (b) {
        this.books.push(b);
    };
    library.prototype.listBooks = function () {
        this.books.forEach(function (book) {
            book.Bookdetails();
        });
    };
    library.prototype.removeBook = function (id) {
        this.books = this.books.filter(function (book) { return book.book_id !== id; });
    };
    return library;
}());
exports.library = library;
