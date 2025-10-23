class Pizza {
  constructor(size, crustType, countryType) {
    this.size = size;
    this.crustType = crustType;
    this.countryType = countryType;
  }

  getDetails() {
    return `Size: ${this.size}, Crust Type: ${this.crustType}, Country Type: ${this.countryType}`;
  }
}
export default Pizza;
