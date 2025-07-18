import { Product } from "./product";
import { List } from "./List";
let product1 = new Product(1, 'Laptop', 999.99);
let product2 = new Product(2, 'Mouse', 19.99);
let product3 = new Product(3, 'Keyboard', 49.99);
 
let myobj = new List();
 
myobj.additems(product1);
myobj.additems(product2);
myobj.additems(product3);
 
 
console.log(myobj.getProducts());
 
myobj.removeProduct(2);
 
console.log(myobj.getProducts());
console.log(myobj.getTotal());
console.log(myobj.getProducts());
