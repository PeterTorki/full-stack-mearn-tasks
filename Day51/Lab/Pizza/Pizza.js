export default class Pizza {
  constructor() {
    this.size = null;
    this.cheese = false;
    this.pepperoni = false;
    this.mushrooms = false;
    this.extraToppings = [];
  }

  describe() {
    const toppings = [
      this.cheese && "cheese",
      this.pepperoni && "pepperoni",
      this.mushrooms && "mushrooms",
      ...this.extraToppings,
    ].filter(Boolean);

    return `Pizza (${this.size}) with ${toppings.length ? toppings.join(", ") : "no toppings"}`;
  }
}
