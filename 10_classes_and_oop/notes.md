# javascript and classes

## OOP

## Object

- collection of properties and methods
- toLowerCase

## why use OOP

## parts of OOP

Object literal

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## 4 pillars

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

#### Abstraction in JavaScript refers to the concept of hiding the implementation details of a function or an object and exposing only the necessary interfaces or functionalities to the outside world. It allows developers to work at higher levels of functionality without needing to understand or deal with the complexities of the underlying code.

There are several ways to achieve abstraction in JavaScript:

## 1. Encapsulation:

Encapsulation involves bundling the data and the methods that operate on the data into a single unit, typically known as a class or an object. By encapsulating data and methods, you hide the internal state of an object and only expose the necessary methods to interact with it.

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model}`);
  }
}

const myCar = new Car("Toyota", "Camry");
myCar.drive(); // Output: Driving Toyota Camry
```

## 2. Abstraction using Functions:

Functions can also be used to create abstraction by hiding the internal details and exposing only the necessary functionalities.

```javascript
function add(x, y) {
  return x + y;
}

console.log(add(2, 3)); // Output: 5
```

## 3. Abstract Classes and Interfaces:

Although JavaScript doesn't have built-in support for abstract classes or interfaces, you can mimic their behavior using prototypes or by following certain design patterns. Abstract classes and interfaces define a contract that concrete implementations must adhere to.

## 4. Prototypal Inheritance:

JavaScript supports prototypal inheritance, which allows objects to inherit properties and methods from other objects. By using inheritance, you can create hierarchies of objects where higher-level objects provide abstract functionalities, and lower-level objects implement specific behaviors.

```javascript
function Animal() {}
Animal.prototype.speak = function () {
  throw new Error("Not implemented");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.speak = function () {
  return "Woof!";
};

const dog = new Dog();
console.log(dog.speak()); // Output: Woof!
```

These are some of the common ways to achieve abstraction in JavaScript. Abstraction helps in creating modular, maintainable, and understandable code by hiding unnecessary details and exposing only what's necessary for interaction.

//////

In JavaScript, like in many other object-oriented programming (OOP) languages, the four pillars of OOP are:

## Encapsulation:

Encapsulation is the bundling of data (properties) and methods (functions) that operate on the data into a single unit, known as a class. It allows objects to hide their internal state and only expose a public interface for interacting with that state. In JavaScript, encapsulation can be achieved using objects, closures, and ES6 classes.

## Abstraction:

Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of an object to the outside world. It allows developers to work with high-level concepts without needing to understand the inner workings. In JavaScript, abstraction can be achieved through functions, objects, and classes.

## Inheritance:

Inheritance is the mechanism by which a class can inherit properties and methods from another class. It promotes code reusability and helps in creating a hierarchy of classes. In JavaScript, inheritance is prototype-based, where objects inherit properties and methods from prototype objects. ES6 introduced the class syntax, which provides a more familiar way of working with inheritance in JavaScript.

## Polymorphism:

Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables the same method to behave differently based on the object that it is invoked upon. In JavaScript, polymorphism can be achieved through method overriding, where a subclass provides a specific implementation of a method that is already defined in its superclass.

Here's a brief example demonstrating how these four pillars might be implemented in JavaScript:

```javascript
// Encapsulation
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model}`);
  }
}

// Abstraction
function add(x, y) {
  return x + y;
}

// Inheritance
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

// Polymorphism
function makeSpeak(animal) {
  animal.speak();
}

const myCar = new Car("Toyota", "Camry");
myCar.drive(); // Output: Driving Toyota Camry

console.log(add(2, 3)); // Output: 5

const dog = new Dog();
makeSpeak(dog); // Output: Dog barks
```

These four pillars are fundamental concepts in OOP and can be implemented in JavaScript using its flexible and dynamic nature.
