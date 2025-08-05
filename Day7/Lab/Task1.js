var linkedListObj = {
  linkedList: [],

  insert: function (val, idx = this.length()) {
    if (idx < 0 || idx > this.length()) {
      throw new Error("Index out of bounds"); // val,[0, 1, 3, 4 , 5], val: idx < 0 | idx > length
    }
    if (idx > 0 && val <= this.nthElement(idx - 1)) {
      throw new Error("Value must be greater than previous element"); // [1, 3, val, 5, 6]: val = 2
    }
    if (idx < this.length() && val >= this.nthElement(idx)) {
      throw new Error("Value must be less than next element"); // [1, 3, val, 5, 6]: val = 8
    }
    this.linkedList.splice(idx, 0, { val });
  },

  push: function (val) {
    this.enqueue(val);
  },

  pop: function () {
    return this.linkedList.pop();
  },

  enqueue: function (val) {
    if (val <= this.nthElement(this.length() - 1)) {
      throw new Error("Value must be greater than the last element"); // [1, 3, 4, 5, 8, val]: val = 7
    } else {
      this.linkedList.push({ val });
    }
  },

  dequeue: function () {
    return this.linkedList.shift();
  },

  remove: function (idx = this.length() - 1) {
    if (idx === 0) {
      return this.dequeue();
    } else if (idx === this.length() - 1) {
      return this.pop();
    } else if (idx < 0 || idx >= this.length()) {
      throw new Error("Index out of bounds");
    }
    this.linkedList.splice(idx, 1);
  },

  display: function () {
    for (var idx in this.linkedList) {
      console.log(this.linkedList[idx]);
    }
  },

  length: function () {
    return this.linkedList.length;
  },

  nthElement: function (idx) {
    if (idx < 0 || idx >= this.length()) throw new Error("Index out of bounds");
    return this.linkedList[idx].val;
  },
};
