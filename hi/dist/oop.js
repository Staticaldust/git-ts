"use strict";
//1
class Shape {
    info() {
        return 'This is a shape';
    }
}
class Rectangle extends Shape {
    width;
    height;
    toChange;
    constructor(width, height, toChange) {
        super();
        this.width = width;
        this.height = height;
        this.toChange = toChange;
    }
    area() {
        return this.width * this.height;
    }
    info() {
        return "This is a Recktangle";
    }
    scale() {
        return this.width * this.height * this.toChange;
    }
}
let myrRecTangle = new Rectangle(5, 10, 4);
let myArea = myrRecTangle.area();
console.log(myArea);
//2
class Square extends Rectangle {
    length;
    constructor(width, height, toChange, length) {
        super(width, height, toChange);
        this.length = length;
    }
    area() {
        return this.length * 2;
    }
}
let squareArea = new Square(5, 10, 7, 4);
let result2 = squareArea.area();
console.log(result2);
//3
class ColoredRectangle extends Rectangle {
    color;
    constructor(width, height, toChange, color) {
        super(width, height, toChange);
        this.color = color;
    }
    info() {
        return `This is a Rectangle colored ${this.color}`;
    }
}
let colorFN = new ColoredRectangle(5, 10, 4, 'red');
console.log(colorFN.info());
//4
//5
class Shape2 {
    draw() {
        console.log('drawing a shape');
    }
}
class Triangle2 extends Shape2 {
    constructor() {
        super();
    }
    draw() {
        console.log('drawing a Triangle');
    }
}
class Circle2 extends Shape2 {
    constructor() {
        super();
    }
    draw() {
        console.log('drawing a circle');
    }
}
class Square2 extends Shape2 {
    constructor() {
        super();
    }
    draw() {
        console.log('drawing a square');
    }
}
const renderShapes = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].draw();
    }
};
const myTr = new Triangle2;
const myCi = new Circle2;
const mySq = new Square2;
const myarray = [myTr, myCi, mySq];
const myFN = renderShapes(myarray);
