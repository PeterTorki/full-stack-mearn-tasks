const mongoose = require("mongoose");
const Ajv = require("ajv");
const ajv = new Ajv();

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
});

module.exports = mongoose.model("Student", StudentSchema);
