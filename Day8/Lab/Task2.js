function ListWithStep(start, end, step) {
  var nums = [];
  this.start = start;
  this.end = end;
  this.step = step;

  this.setter = function () {
    for (var i = start; i <= end; i += step) {
      nums.push(i);
    }
  };

  this.getter = function () {
    return nums;
  };

  this.arrLength = function () {
    return nums.length;
  };
  this.firstElement = function () {
    return nums[0];
  };
  this.lastElement = function () {
    return nums[nums.length - 1];
  };
}

ListWithStep.prototype.append = function (val) {
  if (this.arrLength() === 0) {
    this.getter().push(val);
  } else if (val - this.lastElement() === this.step) {
    this.getter().push(val);
  } else {
    throw new Error("Value must be greater than the last element by step: " + this.step);
  }
};
ListWithStep.prototype.prepend = function (val) {
  if (this.arrLength() === 0) {
    this.getter().push(val);
  } else if (this.firstElement() - val === this.step) {
    this.getter().unshift(val);
  } else {
    throw new Error("Value must be less than the first element by step: " + this.step);
  }
};
ListWithStep.prototype.pop = function () {
  if (this.arrLength() === 0) {
    throw new Error("Array is already Empty");
  }
  this.getter().pop();
};
ListWithStep.prototype.dequeue = function () {
  if (this.arrLength() === 0) {
    throw new Error("Array is already Empty");
  }
  this.getter().shift();
};
