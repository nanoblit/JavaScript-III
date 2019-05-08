/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Implicit this used in methods
 * 2. Explicit this used with call(), apply(), bind()
 * 3. Global this pointing at Window or undefined
 * 4. This used in object created with the "new" keyword
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const obj = {
    name: "Izuku",
    greet() {
        console.log(`Hi! My name is ${this.name}!`);
    }
};

obj.greet();

// Principle 3

// code example for New Binding

function Car(make) {
    this.make = make;
}

Car.prototype.greet = function() {
    console.log(`Hi! I'm a ${this.make}!`);
};

const toyota = new Car("Toyota");
toyota.greet();

// Principle 4

// code example for Explicit Binding

const someCar = {
    make: "BMW"
};

toyota.greet.call(someCar);
