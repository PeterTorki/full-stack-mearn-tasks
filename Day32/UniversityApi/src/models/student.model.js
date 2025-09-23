const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50 },
  age: { type: Number, required: true, min: 16, max: 100 },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  active: { type: Boolean, default: true },
});

// Student M<----->1 Department
module.exports = mongoose.model("Student", StudentSchema);
