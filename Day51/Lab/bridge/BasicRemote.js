class BasicRemote {
  constructor(device) {
    this.device = device;
  }

  increaseVolume() {
    this.device.increaseVolume();
  }

  decreaseVolume() {
    this.device.decreaseVolume();
  }
}

export default BasicRemote;
