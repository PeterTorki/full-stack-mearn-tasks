class CountryProxy {
  constructor() {
    this.api = new CountryAPI();
    this.cache = null;
  }

  getCountries() {
    if (this.cache) {
      return this.cache;
    }

    const result = this.api.getCountries();
    this.cache = result;
    return result;
  }
}

export default CountryProxy;
