const validateStudent = require("../utils/studentsSchema");

module.exports = (req, res, next) => {
  const data = req.body;
  console.log("data in validation middleware:", data);
  const valid = validateStudent(data);
  console.log("is data valid?", valid);
  req.valid = valid;
  next(); // ✅ only call next()
};
