import Pizza from "./pizza";

class PizzaBuilder {
  constructor() {
    this.size = null;
    this.crustType = null;
    this.countryType = null;
  }
  setSize(size) {
    this.size = size;
    return this;
  }
  setCrustType(crustType) {
    this.crustType = crustType;
    return this;
  }
  setCountryType(countryType) {
    this.countryType = countryType;
    return this;
  }
  build() {
    return new Pizza(this.size, this.crustType, this.countryType);
  }
}

export default PizzaBuilder;
