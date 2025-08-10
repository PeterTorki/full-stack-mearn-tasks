function Vehicle(speed, color) {
  if (typeof speed !== "number") throw new TypeError("speed must be a number");
  if (typeof color !== "number") throw new TypeError("color must be a number");

  defineProperty(this, "speed", speed);
  defineProperty(this, "color", color);
}

defineMethod(Vehicle.prototype, "turnLeft", function () {
  console.log("Turning left");
});
defineMethod(Vehicle.prototype, "turnRight", function () {
  console.log("Turning right");
});
defineMethod(Vehicle.prototype, "start", function () {
  return true;
});
defineMethod(Vehicle.prototype, "stop", function () {
  return false;
});
defineMethod(Vehicle.prototype, "goBackward", function (speed, accel) {
  console.log("Going backward at " + speed + " with accel " + accel);
});
defineMethod(Vehicle.prototype, "goForward", function (speed, accel) {
  console.log("Going forward at " + speed + " with accel " + accel);
});
defineMethod(Vehicle.prototype, "toString", function () {
  return "Vehicle: speed=" + this.speed + ", color=" + this.color;
});
defineMethod(Vehicle.prototype, "valueOf", function () {
  return this.speed;
});

function Bicycle(speed, color) {
  Vehicle.call(this, speed, color);
}

Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

defineMethod(Bicycle.prototype, "ringBell", function () {
  console.log("Ring");
});
defineMethod(Bicycle.prototype, "toString", function () {
  return "Bicycle: speed=" + this.speed + ", color=" + this.color;
});
defineMethod(Bicycle.prototype, "valueOf", function () {
  return this.speed;
});

// bicycleInstance --> Bicycle.prototype --> Vehicle.prototype --> Object.prototype

function MotorVehicle(speed, color, sizeOfEngine, licensePlate) {
  Vehicle.call(this, speed, color);

  if (typeof sizeOfEngine !== "number") throw new TypeError("sizeOfEngine must be a number");
  if (typeof licensePlate !== "string") throw new TypeError("licensePlate must be a string");

  defineProperty(this, "sizeOfEngine", sizeOfEngine);
  defineProperty(this, "licensePlate", licensePlate);
}

MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

defineMethod(MotorVehicle.prototype, "getSizeOfEngine", function () {
  return this.sizeOfEngine;
});
defineMethod(MotorVehicle.prototype, "getLicensePlate", function () {
  return this.licensePlate;
});
defineMethod(MotorVehicle.prototype, "toString", function () {
  return "MotorVehicle: speed=" + this.speed + ", engine=" + this.sizeOfEngine;
});
defineMethod(MotorVehicle.prototype, "valueOf", function () {
  return this.sizeOfEngine;
});

function DumpTruck(speed, color, sizeOfEngine, licensePlate, loadCapacity, numWheels, weight) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);

  if (typeof loadCapacity !== "number") throw new TypeError("loadCapacity must be a number");
  if (typeof numWheels !== "number") throw new TypeError("numWheels must be a number");
  if (typeof weight !== "number") throw new TypeError("weight must be a number");

  defineProperty(this, "loadCapacity", loadCapacity);
  defineProperty(this, "numWheels", numWheels);
  defineProperty(this, "weight", weight);
}

DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;

defineMethod(DumpTruck.prototype, "lowerLoad", function () {
  console.log("Lower load...");
});
defineMethod(DumpTruck.prototype, "raiseLoad", function () {
  console.log("Raise load");
});
defineMethod(DumpTruck.prototype, "toString", function () {
  return "DumpTruck: capacity=" + this.loadCapacity + ", wheels=" + this.numWheels;
});
defineMethod(DumpTruck.prototype, "valueOf", function () {
  return this.weight;
});

function Car(speed, color, sizeOfEngine, licensePlate, numOfDoors, weight) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);

  if (typeof numOfDoors !== "number") throw new TypeError("numOfDoors must be a number");
  if (typeof weight !== "number") throw new TypeError("weight must be a number");

  defineProperty(this, "numOfDoors", numOfDoors);
  defineProperty(this, "weight", weight);
}

Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;

defineMethod(Car.prototype, "switchOnAirCon", function () {
  console.log("AC is on");
});
defineMethod(Car.prototype, "getNumOfDoors", function () {
  return this.numOfDoors;
});
defineMethod(Car.prototype, "toString", function () {
  return "Car with " + this.numOfDoors + " doors, weight " + this.weight;
});
defineMethod(Car.prototype, "valueOf", function () {
  return this.weight;
});

function defineProperty(obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    writable: false,
    enumerable: false,
    configurable: false,
  });
}

function defineMethod(proto, key, fn, { writable = false, enumerable = true, configurable = false } = {}) {
  Object.defineProperty(proto, key, {
    value: fn,
    writable,
    enumerable,
    configurable,
  });
}
