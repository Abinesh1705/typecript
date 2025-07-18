var Car = /** @class */ (function () {
    function Car(carmodel, carprice, carbrand) {
        this.carmodel = carmodel;
        this.carprice = carprice;
        this.carbrand = carbrand;
        Car.cars.push(this);
    }
    Object.defineProperty(Car.prototype, "c_model", {
        get: function () {
            return this.carmodel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "c_price", {
        get: function () {
            return this.carprice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "c_brand", {
        get: function () {
            return this.carbrand;
        },
        enumerable: false,
        configurable: true
    });
    Car.getCount = function () {
        return Car.cars.length;
    };
    Car.displayAllCars = function () {
        console.log("List of all cars:");
        this.cars.forEach(function (car, index) {
            console.log("".concat(index + 1, ". ").concat(car.c_brand, " ").concat(car.c_model, " - \u20B9").concat(car.c_price));
        });
    };
    Car.cars = [];
    return Car;
}());
var car1 = new Car("800", 79990, "MARUTI");
var car2 = new Car("CITY", 35000, "HONDA");
var car3 = new Car("FIGO", 22000, "FORD");
var car4 = new Car("GLOSTER", 100000, "MG");
var car5 = new Car("COMPASS", 220000, "JEEP");
console.log("Total cars: ".concat(Car.getCount()));
Car.displayAllCars();
