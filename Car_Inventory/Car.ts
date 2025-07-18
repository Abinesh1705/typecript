class Car{
    static cars:Car[] = [];
 
    constructor(private carmodel:string,private carprice:number,private carbrand:string){
        Car.cars.push(this);
    }
 
    get c_model(){
        return this.carmodel;
    }
 
    get c_price(){
        return this.carprice;
    }
 
    get c_brand(){
        return this.carbrand;
    }
 
    static getCount(): number {
        return Car.cars.length;
    }
    static displayAllCars(){
        console.log("List of all cars:");
        this.cars.forEach((car, index) => {
            console.log(`${index + 1}. ${car.c_brand} ${car.c_model} - ₹${car.c_price}`);
        });
    }
}
 
let car1 = new Car("800", 79990, "MARUTI");
let car2 = new Car("CITY", 35000, "HONDA");
let car3 = new Car("FIGO", 22000, "FORD");
let car4 = new Car("GLOSTER", 100000, "MG");
let car5 = new Car("COMPASS", 220000, "JEEP");

 
console.log(`Total cars: ${Car.getCount()}`);
Car.displayAllCars();