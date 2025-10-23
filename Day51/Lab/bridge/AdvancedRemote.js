import BasicRemote from "./BasicRemote.js";

class AdvancedRemote extends BasicRemote {
  mute() {
    if (typeof this.device.mute === "function") {
      this.device.mute();
    } else {
      console.log(`${this.device.name} does not support mute`);
    }
  }
}

export default AdvancedRemote;
