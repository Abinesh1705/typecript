"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(bname, bauthor, bId) {
        this.book_name = bname;
        this.book_author = bauthor;
        this.book_id = bId;
    }
    Book.prototype.Bookdetails = function () {
        console.log("BOOK NAME: ".concat(this.book_name));
        console.log("BOOK AUTHOR: ".concat(this.book_author));
        console.log("BOOK ID: ".concat(this.book_id));
    };
    return Book;
}());
exports.Book = Book;
