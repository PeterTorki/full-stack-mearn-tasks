import PizzaBuilder from "./PizzaBuilder.js";

const pizza1 = new PizzaBuilder().setSize("Large").addCheese().addPepperoni().build();

const pizza2 = new PizzaBuilder().setSize("Medium").addMushrooms().addTopping("olives").addTopping("onions").build();

console.log(pizza1.describe());
console.log(pizza2.describe());
