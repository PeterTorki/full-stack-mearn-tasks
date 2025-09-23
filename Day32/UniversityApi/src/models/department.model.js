const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50 },
  location: { type: String, required: true, maxlength: 100 },
});

// Department 1<----->M Course
module.exports = mongoose.model("Department", DepartmentSchema);
