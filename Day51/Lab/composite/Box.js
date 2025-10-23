import Item from "./Item.js";

// Composite node: can contain books or other boxes
class Box extends Item {
  constructor(name) {
    super();
    this.name = name;
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  showDetails(indent = 0) {
    console.log(`${" ".repeat(indent)}📦 Box: ${this.name}`);
    this.items.forEach((item) => item.showDetails(indent + 2));
  }

  getPages() {
    return this.items.reduce((sum, item) => sum + item.getPages(), 0);
  }
}

export default Box;
