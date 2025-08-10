function Shape(width, height) {
  if (this.constructor === Shape) {
    throw new Error("Shape is an abstract class");
  }

  defineProperty(this, "width", width);
  defineProperty(this, "height", height);
  defineProperty(this, "area", this.width * this.height);
  defineProperty(this, "perimeter", 2 * (this.width + this.height));
}

Shape.prototype.toString = function () {
  return "area: " + this.area + " perimeter: " + this.perimeter;
};

function Rectangle(width, height) {
  Shape.call(this, width, height);
}

Rectangle.prototype.valueOf = function () {
  return this.area;
};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

function Square(size) {
  Square.count = !Square.count ? 1 : Square.count + 1;
  Rectangle.call(this, size, size);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

var s1 = Square(5);
var s2 = Square(5);
console.log(Square.count);

function defineProperty(obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    writable: false,
    enumerable: false,
    configurable: false,
  });
}
