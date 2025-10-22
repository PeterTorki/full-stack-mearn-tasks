import Pizza from "./Pizza.js";

export default class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }

  setSize(size) {
    this.pizza.size = size;
    return this;
  }

  addCheese() {
    this.pizza.cheese = true;
    return this;
  }

  addPepperoni() {
    this.pizza.pepperoni = true;
    return this;
  }

  addMushrooms() {
    this.pizza.mushrooms = true;
    return this;
  }

  addTopping(topping) {
    this.pizza.extraToppings.push(topping);
    return this;
  }

  build() {
    return this.pizza;
  }
}
