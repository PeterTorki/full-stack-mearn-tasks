import Device from "./Device.js";

class TV extends Device {
  mute() {
    this.volume = 0;
    console.log(`${this.name} is muted`);
  }
}

export default TV;
