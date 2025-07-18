import { Book } from "./Book";
import { library } from "./library";

let lib = new library();

let book1 = new Book("Science","Rajapandi",101);
let book2 = new Book("Maths","Gokul",102);

lib.addBook(book1);
lib.addBook(book2);

console.log("----------------Book List ---------------");

lib.listBooks();

lib.removeBook(102);

console.log("----------------After Removing List --------------");
lib.listBooks();
