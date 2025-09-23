const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 50 },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
});

// Course M<----->1 Department
module.exports = mongoose.model("Course", CourseSchema);
