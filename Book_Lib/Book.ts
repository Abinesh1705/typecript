export class Book {
    book_name: string;
    book_author: string;
    book_id: number;

    constructor(bname: string, bauthor: string, bId: number) {
        this.book_name = bname;
        this.book_author = bauthor;
        this.book_id = bId;
    }

    Bookdetails(){
        console.log(`BOOK NAME: ${this.book_name}`);
        console.log(`BOOK AUTHOR: ${this.book_author}`);
        console.log(`BOOK ID: ${this.book_id}`);
    }
}
