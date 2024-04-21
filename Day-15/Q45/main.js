"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_car(manufacturer, model, ...options) {
    // Define the car object with known properties
    let car = { manufacturer, model };
    options.forEach(([key, value]) => (car[key] = value));
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
