import { Product } from "./product";
 export class List {
    products :Product [] = [];
 
additems(product:Product){
    this.products.push(product);
 
}
removeProduct(productId: number) {
    this.products = this.products.filter(product => product.Id !== productId);
}
getTotal(): number {
    return this.products.reduce((total, product) => total + product.Price, 0);
}
getProducts(): Product[] {
    return this.products;
}
 
 
}
 

 