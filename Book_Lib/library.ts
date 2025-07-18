import { Book } from "./Book";

export class library {
    private books: Book[] = [];

    addBook(b: Book) {
        this.books.push(b);
    }

    listBooks(){
        this.books.forEach(book => {
            book.Bookdetails();
        });
    }

    removeBook(id: number): void {
        this.books = this.books.filter(book => book.book_id !== id);
    }
}
