class Device {
  constructor(name) {
    this.name = name;
    this.volume = 10;
  }

  increaseVolume() {
    this.volume++;
    console.log(`${this.name} volume increased to ${this.volume}`);
  }

  decreaseVolume() {
    this.volume--;
    console.log(`${this.name} volume decreased to ${this.volume}`);
  }
}

export default Device;
